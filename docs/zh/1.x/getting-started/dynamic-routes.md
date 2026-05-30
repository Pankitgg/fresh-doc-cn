---
description: |
  通过在磁盘上路由文件名的路由段中添加动态段来创建 Fresh 中的动态路由：`/greet/[name].tsx`。
---

上次创建的 `/about` 路由非常静态。无论向路由传递什么查询或路径参数，它总是渲染相同的页面。让我们创建一个 `/greet/:name` 路由，它将渲染一个包含路径中传递的名称的问候页面。

在开始之前，快速回顾一下"动态"路由。动态路由不仅仅匹配单个静态路径，而是根据模式匹配一整串不同的路径。例如，`/greet/:name` 路由将匹配 `/greet/Luca` 和 `/greet/John` 路径，但不匹配 `/greet/Luca/John`。

Fresh 通过文件系统路由开箱即用地支持动态路由。要使任何路径段成为动态段，只需在文件名中将该段放在方括号中。例如，`/greet/:name` 路由映射到文件名 `routes/greet/[name].tsx`。

就像静态的 `/about` 路由一样，动态的 `/greet/:name` 路由将渲染一个页面。该模块必须再次暴露一个组件作为默认导出。这次，组件将在其 `props` 对象中接收匹配的路径段属性作为参数。

```tsx routes/greet/[name].tsx
import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <p>向你问好，{name}！</p>
    </main>
  );
}
```

`PageProps` 接口实际上包含许多有用的属性，可用于自定义渲染输出。除了匹配的 URL 模式参数外，原始 `url` 和 `route` 名称也可以在这里找到。

现在导航到 `http://localhost:8000/greet/Luca` 将渲染一个显示"向你问好，Luca！"的页面。

[_概念：路由_][concepts-routing] 页面有更多关于动态路由的信息，特别是关于如何创建更高级的动态路由。

[concepts-routing]: /docs/1.x/concepts/routing
