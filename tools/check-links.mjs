import { existsSync, statSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const publicDir = path.resolve("public");
const origin = "https://local.invalid";
const productionOrigin = "https://tty627.github.io";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(entryPath));
    else files.push(entryPath);
  }

  return files;
}

function routeFor(file) {
  return "/" + path.relative(publicDir, file).split(path.sep).join("/");
}

function candidatesFor(pathname) {
  const decoded = decodeURIComponent(pathname);
  const relative = decoded.replace(/^\/+/, "");
  const direct = path.join(publicDir, relative);

  if (decoded.endsWith("/")) return [path.join(direct, "index.html")];
  if (path.extname(decoded)) return [direct];
  return [direct, path.join(direct, "index.html")];
}

const files = await walk(publicDir);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const missing = [];
const attributePattern = /\b(href|src)\s*=\s*(["'])(.*?)\2/gi;
const anchorPattern = /\b(?:id|name)\s*=\s*(["'])(.*?)\1/gi;
const anchorCache = new Map();

async function anchorsFor(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  const html = await readFile(file, "utf8");
  const anchors = new Set([...html.matchAll(anchorPattern)].map((match) => match[2]));
  anchorCache.set(file, anchors);
  return anchors;
}

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const base = new URL(routeFor(file), origin);

  for (const match of html.matchAll(attributePattern)) {
    const attribute = match[1].toLowerCase();
    const value = match[3].trim();
    if (!value) continue;
    if (/^(?:mailto:|tel:|javascript:|data:|blob:)/i.test(value)) continue;

    let resolved;
    try {
      resolved = new URL(value, base);
    } catch {
      missing.push({ page: routeFor(file), target: value, reason: "invalid URL" });
      continue;
    }

    if (resolved.origin !== origin && resolved.origin !== productionOrigin) continue;
    const candidates = candidatesFor(resolved.pathname);
    const targetFile = candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile());
    if (!targetFile) {
      missing.push({ page: routeFor(file), target: value, reason: "not generated" });
      continue;
    }

    if (attribute === "href" && resolved.hash.length > 1 && targetFile.endsWith(".html")) {
      let fragment;
      try {
        fragment = decodeURIComponent(resolved.hash.slice(1));
      } catch {
        missing.push({ page: routeFor(file), target: value, reason: "invalid fragment" });
        continue;
      }
      const anchors = await anchorsFor(targetFile);
      if (!anchors.has(fragment)) {
        missing.push({ page: routeFor(file), target: value, reason: "fragment not found" });
      }
    }
  }
}

if (missing.length) {
  console.error("Broken internal links or assets:");
  for (const item of missing) {
    console.error("- " + item.page + " -> " + item.target + " (" + item.reason + ")");
  }
  process.exit(1);
}

console.log("Checked " + htmlFiles.length + " HTML files: no broken internal links or assets.");
