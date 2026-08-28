/* global hexo */
"use strict";

hexo.extend.filter.register("template_locals", function (locals) {
  if (!locals.page || !locals.page.__index || !/^notes(?:\/|$)/.test(locals.path)) {
    return locals;
  }

  var pageNumber = Number(locals.page.current || 1);
  locals.page.title = pageNumber > 1
    ? "文章 · 第 " + pageNumber + " 页"
    : "文章";
  locals.page.description = "项目开发和实验记录。";
  return locals;
});
