---
description: |
  How to render raw HTML in Fresh.
---

Fresh 中的文本内容总是会被转义，无论是服务端渲染还是在[岛屿](/docs/concepts/islands)中渲染。虽然这通常是期望的行为，但在某些情况下可能会造成问题。

你可以通过 Preact 的 `dangerouslySetInnerHTML` 属性来渲染原始 HTML：

```tsx routes/dynamic-html.tsx
<div dangerouslySetInnerHTML={{ __html: "<h1>This is raw HTML</h1>" }} />;
```

输出结果：

```html Response body
<div>
  <h1>This is raw HTML</h1>
</div>
```

渲染原始 HTML 的一个常见用例是对代码块进行语法高亮或渲染 Markdown。

> [warn]：设置任意 HTML 可能存在危险，这就是 `dangerouslySetInnerHTML` 命名的由来。请确保你信任数据源。将用户提供的 HTML 渲染到 DOM 中会使你的网站容易受到跨站脚本攻击。必须先对标记进行清理，或者使用你信任的内容。
