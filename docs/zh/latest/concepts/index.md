---
description: |
  本章介绍 Fresh 的一些基本概念。
---

Fresh 的工作方式是接收一个
[`Request`](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)，将其通过一个或多个中间件传递，直到其中一个中间件响应。这可以是 HTML 响应、JSON 响应或任何其他类型的响应。

如果响应是 HTML 且包含 Islands（=交互式 Preact 组件），Fresh 将在浏览器中启动它们并执行相关的 JavaScript。

以下是 Fresh 中的基本概念概述：

- [**架构**](/docs/concepts/architecture) - 请求如何在 Fresh 中流动，从中间件到 islands
- [**App**](/docs/concepts/app) - 包含有关您应用的所有信息，如路由等
- [**中间件**](/docs/concepts/middleware) - 响应对请求并返回 `Response`。用于设置头，或向其他中间件传递状态。当中间件不调用下一个中间件而是直接返回响应时，通常称为"处理器"。
- [**上下文**](/docs/concepts/context) - 通过每个中间件传递。用于共享状态、触发重定向或渲染 HTML。
- [**路由**](/docs/concepts/routing) - 响应特定 URL 并在匹配时作为中间件链运行
- [**数据获取**](/docs/concepts/data-fetching) - 在服务器上加载数据并将其传递给页面组件
- [**Islands**](/docs/concepts/islands) - 在客户端渲染交互式 Preact 组件
- [**Signals**](/docs/concepts/signals) - Islands 的响应式状态管理
- [**静态文件**](/docs/concepts/static-files) - 服务图像、CSS 和其他资源
- [**文件路由**](/docs/concepts/file-routing) - 基于文件系统的约定式路由

高级概念：

- [**应用包装器**](/docs/advanced/app-wrapper) - 负责外部 HTML 结构，通常到 `<body>` 标签
- [**布局**](/docs/advanced/layouts) - 在跨路由调用 `ctx.render()` 时重用共享布局
- [**部分更新**](/docs/advanced/partials) - 在当前页面上流式传输服务器生成的内容