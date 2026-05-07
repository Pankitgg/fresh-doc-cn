---
description: |
  如何在 Fresh 中渲染原始 HTML。
---

Fresh 中的文本内容始终被转义，无论是服务器端渲染还是在
[islands](/docs/concepts/islands) 中渲染。虽然这通常是期望的行为，但在某些情况下可能会造成问题。

要解决这个问题，您可以通过 Preact 的 `dangerouslySetInnerHTML` 属性渲染原始 HTML：

```tsx routes/dynamic-html.tsx
<div dangerouslySetInnerHTML={{ __html: "<h1>This is raw HTML</h1>" }} />;
```

这将输出：

```html Response body
<div>
  <h1>This is raw HTML</h1>
</div>
```

渲染原始 HTML 的常见用例是语法高亮代码块或渲染 markdown。

> [warn]: 设置任意 HTML 可能很危险，因此命名为 `dangerouslySetInnerHTML`。确保您信任来源。将用户提供的 HTML 渲染到 DOM 会使您的站点容易受到跨站点脚本攻击。标记必须首先进行清理，或者更好的是，使用您信任的内容。