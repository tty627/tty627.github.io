# tty627.github.io

谭天晔（Tianye Tan）的个人主页，发布于 <https://tty627.github.io/>。

站点采用混合结构：

- 根路径 `/` 是面向作品展示的定制静态首页；
- About 页面由 Hexo + Fluid 生成；当前没有已发布文章，首页及导航不展示文章入口；
- GitHub Actions 在 PR 中执行完整检查，在 `main` push 后发布到 `gh-pages`。

## Local development

要求 Node.js 20.19 或更高版本。

~~~bash
npm ci
npm run dev
~~~

生产检查：

~~~bash
npm run check
~~~

该命令会清理旧输出、执行严格构建，并检查生成页面中的内部链接和静态资源。

## Content

~~~text
source/index.html       portfolio 首页
source/css/             首页与 Fluid 样式覆盖
source/js/              首页主题切换
source/about/index.md   About 页面
source/assets/          favicon 与个人标识
~~~

涉及实习、团队项目或课程作业时，应明确公开边界、个人贡献与使用限制。

## Deployment

不要手动提交 `public/`。合并到 `main` 后，Actions 会使用 `Asia/Shanghai` 时区构建并将生成结果发布到 `gh-pages`。
