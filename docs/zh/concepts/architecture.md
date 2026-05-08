---
description: |
  Fresh 如何处理请求：请求从传入、经过中间件、路由、处理器、布局，到达岛屿 hydration 的完整流程。
---

Fresh 是一个服务端优先的 Web 框架。页面在服务端渲染，只有交互部分（[岛屿](/docs/concepts/islands)）才会将 JavaScript 发送到浏览器。本页面将解释请求如何在框架中流动。

## 请求生命周期

![请求生命周期流程图](/architecture-flow-v2.svg)

## 核心概念

### 服务端优先渲染

每个页面在发送到浏览器之前都会在服务端完全渲染为 HTML。这意味着：

- 页面立即可见 - 没有空白加载屏幕
- 搜索引擎能看到完整内容
- 页面在禁用 JavaScript 时也能工作

### 岛屿架构

Fresh 使用 [岛屿架构](https://jasonformat.com/islands-architecture/)。只有 `islands/` 目录中的组件才会在浏览器中进行 [hydration](/docs/concepts/islands)。其他所有内容都是静态 HTML，永远不会在客户端运行 JavaScript。

这意味着一个只有一个交互式按钮的页面只需要发送该按钮的 JavaScript，而不是整个页面的 JavaScript。

### 中间件链

中间件按注册顺序执行，包装处理器。每个中间件调用 `ctx.next()` 将控制权传递给下一个中间件（或处理器）。这创建了一个洋葱模式，中间件可以在请求上（`ctx.next()` 之前）和响应上（`ctx.next()` 之后）执行操作：

```ts
app.use(async (ctx) => {
  // 之前：在进入时运行
  console.log("请求:", ctx.url.pathname);

  const response = await ctx.next();

  // 之后：在出去时运行
  console.log("状态:", response.status);
  return response;
});
```

作用域中间件只对匹配特定路径前缀的请求运行。将路径模式作为第一个参数传递给 `app.use()`：

```ts
app.use("/admin/*", async (ctx) => {
  // 只对 /admin/* 路由运行
  const user = ctx.state.user;
  if (!user?.isAdmin) return new Response("禁止访问", { status: 403 });
  return ctx.next();
});
```

全局中间件对每个请求都运行；作用域中间件让你可以将认证或日志等逻辑应用到部分路由。

### 布局继承

[布局](/docs/concepts/layouts) 包装页面组件，并从父目录继承。`routes/blog/post.tsx` 的页面会从以下布局继承：

1. `routes/_layout.tsx`（根布局）
2. `routes/blog/_layout.tsx`（章节布局）

布局从外向内嵌套：根布局在最外层，每个更深的布局更接近页面，最内层布局直接包装页面组件。[应用包装器](/docs/concepts/app)（`_app.tsx`）包装所有内容。

### 构建和部署

Fresh 使用 [Vite](https://vite.dev/) 来打包生产环境的岛屿 JavaScript。`deno task build` 命令：

1. 发现所有岛屿及其依赖
2. 使用代码分割打包客户端 JavaScript
3. 生成服务端入口点（`_fresh/server.js`）
4. 对资源进行哈希处理以实现缓存破坏

在生产环境中，`_fresh/server.js` 提供预构建的资源。在开发环境中，Vite 提供热模块替换以获得即时反馈。
