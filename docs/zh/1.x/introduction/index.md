---
description: |
  Fresh 是一个面向 JavaScript 和 TypeScript 开发者的全栈现代 Web 框架，专为构建高质量、高性能和个性化的 Web 应用程序而设计。
---

Fresh 是一个面向 JavaScript 和 TypeScript 开发者的全栈现代 Web 框架。它专为构建高质量、高性能和个性化的 Web 应用程序而设计。你可以使用它来创建个人主页、博客、电子商务网站、类似 GitHub 或 Twitter 的大型 Web 应用程序等。

Fresh 的核心是一个路由框架和模板引擎的组合，它在服务端按需渲染页面。这些服务端渲染的页面可以包含在客户端变为交互式的区域（也称为[岛屿架构](https://jasonformat.com/islands-architecture)）。Fresh 使用 [Preact][preact] 作为 JSX 渲染引擎。

Fresh 项目可以通过 [Deno][deno] 手动部署到任何平台，但它的初衷是部署到 [Deno Deploy][deno-deploy] 等边缘运行时，以获得最佳体验。

一些突出特性：

- 零配置
- 轻量且快速（框架本身不需要客户端 JS）
- 可选的客户端组件按需水合
- 高度弹性，因为使用了渐进式增强和原生浏览器功能
- 开箱即用的 TypeScript 支持
- 类似 Next.js 的文件系统路由

[preact]: https://preactjs.com
[deno]: https://deno.com
[deno-deploy]: https://deno.com/deploy
