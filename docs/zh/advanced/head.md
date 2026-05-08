---
description: 在 Fresh 中修改文档头部
---

[`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head) 元素是 HTML 中为页面设置元数据的关键元素。它允许你：

- 使用 `<title>` 设置文档标题
- 使用 `<meta>` 指定页面元数据
- 使用 `<link>` 链接到资源，如样式表
- 使用 `<script>` 包含 JavaScript 代码

> [info]: 包含 `<head>` 的外部 HTML 结构通常在 [`_app.tsx`](/docs/concepts/app) 中创建。

## 从 `ctx.state` 传递元数据

对于简单的场景，通过从处理器或[中间件](/docs/concepts/middleware)写入 `ctx.state` 来传递元数据通常就足够了。

```tsx routes/_app.tsx
import { define } from "../util.ts";

export default define.page((ctx) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>{ctx.state.title ?? "Welcome!"}</title>
      </head>
      <body>
        <ctx.Component />
      </body>
    </html>
  );
});
```

## 使用 `<Head>` 组件

对于更复杂的场景，或者需要从 [islands](/docs/concepts/islands) 设置页面元数据，Fresh 自带了 `<Head>` 组件。

```tsx routes/about.tsx
import { Head } from "fresh/runtime";

export default define.page((ctx) => {
  return (
    <div>
      <Head>
        <title>About me</title>
      </Head>
      <h1>About me</h1>
      <p>I like Fresh!</p>
    </div>
  );
});
```

### 从 islands 动态更新头部

`<Head>` 组件也可以在 [islands](/docs/concepts/islands) 中工作。当组件状态改变时，文档头部会自动更新：

```tsx islands/MetaUpdater.tsx
import { useState } from "preact/hooks";
import { Head } from "fresh/runtime";

export default function MetaUpdater() {
  const [title, setTitle] = useState("Welcome");

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <button onClick={() => setTitle("Updated!")}>Change title</button>
    </div>
  );
}
```

### 避免重复标签

当多个 `<Head />` 组件在同一页面上渲染时，你可能会遇到重复标签的问题。Fresh 将采用以下策略来查找匹配的元素：

1. 对于 `<title>` 元素，Fresh 将直接设置 `document.title`
2. 检查是否存在具有相同 `key` 的元素
3. 检查是否存在具有相同 `id` 属性的元素
4. 仅对 `<meta>` 元素：检查是否存在具有相同 `name` 属性的 `<meta>` 元素
5. 仅对 `<link>` 元素：检查是否存在具有相同 `rel` 属性的 `<link>` 元素
6. 未找到匹配元素时，Fresh 将创建一个新元素并附加到 `<head>`

当多个 `<Head>` 组件渲染具有相同 key 的元素时，**最后渲染的胜出**。由于 Fresh 是自上而下渲染的（app wrapper → 布局 → 路由 → 页面组件），路由页面可以通过使用相同的 `key` prop 来覆盖在 `_app.tsx` 中设置的默认值。

> [info]: `<title>` 标签会自动去重，即使没有 `key` prop。
