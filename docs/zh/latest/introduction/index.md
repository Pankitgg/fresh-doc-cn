---
description: |
  Fresh 是一个面向 JavaScript 和 TypeScript 开发者的全栈现代 Web 框架，
  旨在构建高质量、高性能和个性化的 Web 应用程序。
---

# 介绍

Fresh 是一个小巧、快速且可扩展的全栈 Web 框架，基于 Web 标准构建。它专为构建高质量、高性能和个性化的 Web 应用程序而设计。

```tsx main.ts
import { App } from "fresh";

const app = new App()
  .get("/", () => new Response("hello world"))
  .get("/jsx", (ctx) => ctx.render(<h1>渲染 JSX！</h1>));

app.listen();
```

## 快速开始

运行以下命令创建一个新的 Fresh 应用：

```sh 终端
deno run -Ar jsr:@fresh/init
```

## 特性

Fresh 的核心思想是渲染服务器生成的 HTML 页面，并且只将 JavaScript 发送到页面中需要交互的区域。这通常被称为
[岛屿架构](https://jasonformat.com/islands-architecture)。

- **快速** 🚀 - 得益于 [Preact][preact] 和 Deno 的
  [`precompile` 转换](https://docs.deno.com/runtime/reference/jsx/#jsx-precompile-transform)，渲染速度超快
- **轻量** 🏎️ - 只发送你需要的 JavaScript
- **可扩展** 🧩 - 几乎每个方面都可以自定义
- **强大且小巧的 API** 🤗 - 熟悉的 API 让你快速上手
- **内置 [OpenTelemetry](/docs/advanced/opentelemetry)** 📈 - 内置支持 OpenTelemetry

## 何时使用 Fresh

Fresh 非常适合主要使用服务器端渲染的网站和应用，比如主页、电子商务网站或类似 GitHub 或 Bluesky 的应用。

- Web API
- 电子商务网站
- 作品集网站
- 落地页和文档
- CRUD 应用

Fresh 的小巧 API 和
[基于文件的约定](/docs/concepts/file-routing) 也使其非常适合 AI 辅助开发。智能体可以搭建路由、添加
[中间件](/docs/concepts/middleware)，并以最小的上下文构建功能，因为框架简单且可预测。

也就是说，如果你想构建单页应用（SPA），那么 Fresh 不是合适的框架。

## 谁在使用 Fresh？

Fresh 为 [deno.com](https://deno.com) 和 [Deno Deploy][deno-deploy] 以及 Deno 的许多其他项目提供支持。它也被 [deco.cx](https://deco.cx/) 用于电子商务项目。

## 托管

Fresh 可以在任何 [Deno][deno] 运行的地方运行。在
[Deno Deploy][deno-deploy] 上一键部署，或将你的应用打包到 Docker 容器中，用于任何云提供商或自托管基础设施。

[preact]: https://preactjs.com
[deno]: https://deno.com
[deno-deploy]: https://deno.com/deploy
