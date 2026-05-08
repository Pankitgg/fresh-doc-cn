---
description: |
  Style active links with ease in Fresh
---

Fresh 会自动增强 `<a>` 元素的辅助功能，在渲染与当前 URL 匹配的链接时添加 aria-current 属性。这个属性可以被辅助技术识别，并清楚地指示当前页面在一组页面中的位置。

- `aria-current="page"` - 添加到精确路径匹配的链接，通过向辅助技术指示当前页面来增强可访问性。
- `aria-current="true"` - 添加到祖先链接（例如，当当前页面是 `/docs/intro` 时，添加到 `/docs`）。

由于我们致力于改善可访问性，我们鼓励在适用的情况下使用 aria-current 来设置当前链接的样式。

### 查询参数

当链接的 `href` 包含查询参数时，Fresh 会在匹配时考虑它们。指向 `/products?sort=name` 的链接只有在当前 URL 也有 `?sort=name` 时才会获得 `aria-current="page"`。如果查询参数不同，则该链接会被视为祖先链接。`href` 中没有查询参数的链接会忽略当前 URL 的查询字符串进行匹配。

### 保留自定义的 `aria-current`

如果你自己在 `<a>` 元素上设置了 `aria-current`，Fresh 将保持不变。这在集成管理自己活跃状态的组件库（如 daisyUI 标签页）时很有用。

## 使用 CSS 样式

aria-current 属性可以通过属性选择器用 CSS 轻松设置样式，这提供了一种原生的方式来视觉区分活跃链接。

```css static/styles.css
/* Give links pointing to the current page a green color */
a[aria-current="page"] {
  color: green;
}

/* Color all ancestor links of the current page */
a[aria-current="true"] {
  color: peachpuff;
}
```

## Tailwindcss

在 Tailwindcss 或类似的 CSS 框架中，你可以使用类定义中的方括号语法来为具有 `aria-current` 属性的元素应用样式。对于 Tailwindcss，请使用以下语法：

```tsx components/Menu.tsx
function Menu() {
  return (
    <a href="/foo" class="aria-[current]:text-green-600">
      Link to some page
    </a>
  );
}
```
