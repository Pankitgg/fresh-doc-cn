---
description: |
  在 Fresh 中轻松设置活动链接的样式
---

Fresh 通过在渲染与当前 URL 匹配的链接时添加 aria-current 属性，自动增强 `<a>` 元素的可访问性。此属性被辅助技术识别，并清楚地指示一组页面中的当前页面。

- `aria-current="page"` - 添加到路径完全匹配的链接，通过向辅助技术指示当前页面来增强可访问性。
- `aria-current="true"` - 添加到祖先链接（例如，当前页面是 `/docs/intro` 时的 `/docs`）。

我们旨在改善可访问性，因此鼓励在适用的情况下使用 aria-current 来设置当前链接的样式。

### 查询参数

当链接的 `href` 包含查询参数时，Fresh 在匹配时会考虑它们。指向 `/products?sort=name` 的链接仅在当前 URL 也有 `?sort=name` 时才会收到 `aria-current="page"`。如果查询参数不同，该链接将被视为祖先链接。`href` 中没有查询参数的链接无论当前 URL 的查询字符串如何都会匹配。

### 保留自定义的 `aria-current`

如果您自己在 `<a>` 元素上设置了 `aria-current`，Fresh 会保持其不变。这在与管理自己活动状态的组件库（例如 daisyUI tabs）集成时很有用。

## 使用 CSS 设置样式

使用属性选择器可以轻松地用 CSS 设置 aria-current 属性的样式，提供了一种原生方式来视觉区分活动链接。

```css static/styles.css
/* 给指向当前页面的链接设置绿色 */
a[aria-current="page"] {
  color: green;
}

/* 给当前页面的所有祖先链接设置颜色 */
a[aria-current="true"] {
  color: peachpuff;
}
```

## Tailwindcss

在 Tailwindcss 或类似的 CSS 框架中，您可以在类定义中使用方括号表示法将样式应用于具有 `aria-current` 属性的元素。对于 Tailwindcss，使用以下语法：

```tsx components/Menu.tsx
function Menu() {
  return (
    <a href="/foo" class="aria-[current]:text-green-600">
      Link to some page
    </a>
  );
}
```