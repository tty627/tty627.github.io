/* global hexo */
"use strict";

hexo.extend.filter.register("template_locals", function (locals) {
  if (!locals.page || !locals.page.__index || !/^notes(?:\/|$)/.test(locals.path)) {
    return locals;
  }

  var pageNumber = Number(locals.page.current || 1);
  locals.page.title = pageNumber > 1
    ? "Writing / 技术笔记 · Page " + pageNumber
    : "Writing / 技术笔记";
  locals.page.description = "关于实验失败、研究工具、系统工程与量化验证的技术笔记。";
  return locals;
});
