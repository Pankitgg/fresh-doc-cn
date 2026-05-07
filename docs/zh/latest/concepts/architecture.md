---
description: |
  Fresh 如何处理请求：从传入请求到中间件、路由、处理程序、布局和岛屿水合的流程。
---

# 架构

Fresh 是一个服务器优先的 Web 框架。页面在服务器上渲染，只有交互部分（[岛屿](/docs/concepts/islands)）将 JavaScript 发送到浏览器。本页解释了请求如何流经框架。

## 请求生命周期

![请求生命周期流程图](/docs/architecture-flow-v2.svg)

## 核心概念

### 服务器优先渲染

每个页面在发送到浏览器之前都在服务器上完全渲染为 HTML。这意味着：

- 页面立即可见 - 没有空白加载屏幕
- 搜索引擎可以看到完整内容
- 页面在没有启用 JavaScript 的情况下也能工作

### 岛屿架构

Fresh 使用
[岛屿架构](https://jasonformat.com/islands-architecture/)。只有
`islands/` 目录中的组件在浏览器中[水合](/docs/concepts/islands)。其他所有内容都是静态 HTML，永远不会在客户端运行 JavaScript。

这意味着一个只有单个交互按钮的页面只发送该按钮的 JavaScript - 而不是整个页面的 JavaScript。

### 中间件链

中间件按注册顺序执行，包装处理程序。每个中间件调用 `ctx.next()` 将控制权传递给下一个中间件（或处理程序）。这创建了一个类似洋葱的模式，中间件可以在请求（`ctx.next()` 之前）和响应（`ctx.next()` 之后）上都起作用：

```ts
app.use(async (ctx) => {
  // 之前：在请求进入时运行
  console.log("请求:", ctx.url.pathname);

  const response = await ctx.next();

  // 之后：在响应离开时运行
  console.log("状态:", response.status);
  return response;
});
```

作用域中间件仅对匹配特定路径前缀的请求运行。将路径模式作为第一个参数传递给 `app.use()`：

```ts
app.use("/admin/*", async (ctx) => {
  // 仅对 /admin/* 路由运行
  const user = ctx.state.user;
  if (!user?.isAdmin) return new Response("禁止访问", { status: 403 });
  return ctx.next();
});
```

全局中间件在每个请求上运行；作用域中间件让你将身份验证或日志记录等逻辑应用到路由的子集。

### 布局继承

[布局](/docs/concepts/layouts)包装页面组件并从父目录继承。`routes/blog/post.tsx` 的页面从以下位置继承布局：

1. `routes/_layout.tsx` (根布局)
2. `routes/blog/_layout.tsx` (区块布局)

布局从外到内嵌套：根布局是最外层，每个更深的布局包装得更靠近页面，最内层的布局直接包装页面组件。[应用包装器](/docs/concepts/app) (`_app.tsx`) 包装所有内容。

### 构建和部署

Fresh 使用 [Vite](https://vite.dev/) 为生产环境打包岛屿 JavaScript。
`deno task build` 命令：

1. 发现所有岛屿及其依赖项
2. 使用代码分割打包客户端 JavaScript
3. 生成服务器入口点 (`_fresh/server.js`)
4. 为缓存破坏对资源进行哈希处理

在生产环境中，`_fresh/server.js` 提供预构建的资源。在开发环境中，Vite 提供热模块替换以实现即时反馈。
