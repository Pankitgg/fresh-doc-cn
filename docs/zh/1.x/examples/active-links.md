---
description: |
  在 Fresh 中轻松设置活动链接的样式
---

# 活动链接

Fresh 通过在渲染与当前 URL 匹配的链接时添加 aria-current 属性，自动增强 `<a>` 元素的可访问性。此属性可被辅助技术识别，并清楚地指示一组页面中的当前页面。

- `aria-current="page"` - 添加到具有精确路径匹配的链接，通过向辅助技术指示当前页面来增强可访问性。

随着我们努力提高可访问性，我们鼓励在适用的情况下使用 `aria-current` 来设置当前链接的样式。

## 使用 CSS 设置样式

`aria-current` 属性可以通过 CSS 属性选择器轻松设置样式，提供了一种本地方式来区分活动链接的视觉样式。

```css static/styles.css
/* 为指向当前页面的链接设置绿色 */
a[aria-current="page"] {
  color: green;
}

/* 为当前页面的所有祖先链接设置颜色 */
a[aria-current="true"] {
  color: peachpuff;
}
```

## Tailwind / Twind

在 Tailwind 或类似的 CSS 框架（如 Twind）中，你可以使用类定义中的括号表示法为带有 aria-current 属性的元素应用样式。但是，具体语法在 Tailwind 和 Twind 之间略有不同。对于 Tailwind，使用以下语法：

```tsx component/Menu.tsx
function Menu() {
  return (
    <a href="/foo" class="aria-[current]:text-green-600">
      Link to some page
    </a>
  );
}
```

对于 Twind，语法是：

```tsx component/Menu.tsx
function Menu() {
  return (
    <a href="/foo" class="[aria-current]:text-green-600">
      Link to some page
    </a>
  );
}
```

### Twind 插件

原始 twind 插件（`import twindPlugin from "$fresh/plugins/twind.ts";`）支持上述样式：

```tsx routes/page.tsx
class="[aria-current='page']:text-green-600"
```

### TwindV1 插件

新的 twind 插件（`import twindPlugin from "$fresh/plugins/twindv1.ts";`）需要略有不同的语法（注意左括号的位置）：

```tsx routes/page.tsx
class="aria-[current='page']:text-green-600"
```
