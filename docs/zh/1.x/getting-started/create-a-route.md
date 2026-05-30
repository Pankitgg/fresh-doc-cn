---
description: |
  通过在 `routes/` 文件夹中创建新文件来为 Fresh 项目添加新路由。
---

在让项目本地运行之后，下一步就是向项目添加新路由。路由封装了处理项目中特定路径请求的逻辑。它们可用于处理 API 请求或渲染 HTML 页面。目前我们将做后者。

路由被定义为 `routes` 目录中的文件。文件的名称非常重要：它用于确定路由将处理的路径。例如，如果文件名是 `index.js`，路由将处理对 `/` 的请求。如果文件名是 `about.js`，路由将处理对 `/about` 的请求。如果文件名是 `contact.js` 并放置在 `routes/about/` 文件夹中，路由将处理对 `/about/contact` 的请求。这个概念称为_文件系统路由_。你可以在[_概念：路由_][concepts-routing]页面了解更多关于路由的信息。

渲染 HTML 的路由文件是 JavaScript 或 TypeScript 模块，将 JSX 组件作为默认导出。该组件将为每次访问路由路径的请求渲染。该组件接收一些可用于自定义渲染输出的属性，例如当前路由、请求的 URL、中间件设置的状态和处理程序数据（稍后会介绍后两者）。

在演示项目中，我们将创建一个路由来处理 `/about` 页面。要做到这一点，需要创建一个新的 `routes/about.tsx` 文件。在此文件中，我们可以声明一个每次用户访问页面时都应渲染的组件。这是通过 JSX 完成的。

> [info]：要了解更多关于 JSX 的信息，你可以阅读 React 文档中的[这篇文章][jsx]。请注意，Fresh 不使用 React，而是使用 [Preact][preact]，一个更轻量级的虚拟 DOM 库，与 React 类似。

```tsx routes/about.tsx
export default function AboutPage() {
  return (
    <main>
      <h1>关于</h1>
      <p>这是关于页面。</p>
    </main>
  );
}
```

新页面将在 `http://localhost:8000/about` 可见。

[concepts-routing]: /docs/1.x/concepts/routing
[jsx]: https://react.dev/learn/writing-markup-with-jsx
[preact]: https://preactjs.com/
