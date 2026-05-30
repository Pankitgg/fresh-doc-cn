---
description: |
  使用 Fresh 的 `<Head>` 组件向 `<head>` 标签添加 `<title>` 或 `<meta>` 等组件。
---

我们可以使用 `$fresh/runtime.ts` 中的 `<Head />` 组件来添加元素作为 `<head>` 元素的子元素。通过添加元素作为 Fresh 的 `<Head />` 标签的子元素，这些会自动注入到网页的 `<head>` 元素中。一些用途包括：

- 使用 `<title>` 设置文档标题
- 使用 `<meta>` 指定页面元数据
- 使用 `<link>` 链接到资源如样式表
- 使用 `<script>` 包含第三方 JavaScript 代码

```tsx routes/index.tsx
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Fresh 应用</title>
        <meta
          name="description"
          content="这是对 Fresh 的简要描述"
        />
        <link rel="stylesheet" href="styles.css" />
        <script src="script.js"></script>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1>Hello World</h1>
      </div>
    </>
  );
}
```

## 避免重复标签

当在同一页面渲染多个 `<Head />` 组件时，你可能会得到重复标签。例如，当你在路由中渲染 `<Head />`，在另一个组件中也渲染 `<Head />` 时。

```tsx routes/page-a.tsx
<Head>
  <meta name="og:title" content="这是一个标题" />
</Head>;
```

```tsx components/MyTitle.tsx
<Head>
  <meta name="og:title" content="其他标题" />
</Head>;
```

为了确保标签不重复，Fresh 支持设置 `key` 属性。通过给匹配的元素设置相同的 `key` 属性，只有最后一个会被渲染。

```diff routes/page-a.tsx
  <Head>
-   <meta name="og:title" content="这是一个标题" />
+   <meta name="og:title" content="这是一个标题" key="title" />
  </Head>
```

```diff components/MyTitle.tsx
  <Head>
-   <meta name="og:title" content="其他标题" />
+   <meta name="og:title" content="其他标题" key="title" />
  </Head>
```

渲染的页面只会包含带有 `"其他标题"` 的 `<meta>` 标签。

> [info]：`<title>` 标签自动去重，即使没有 `key` 属性。
