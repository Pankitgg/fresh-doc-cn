---
description: 使用 View Transitions API 为页面导航添加动画
---

Fresh 将浏览器的原生
[View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
集成到其 [部分更新](/docs/advanced/partials) 系统中。启用后，客户端导航期间的 DOM 更新会包装在 `document.startViewTransition()` 中，让您无需编写任何 JavaScript 动画代码即可在页面之间实现流畅的动画过渡。

这是渐进增强的方式——如果浏览器不支持 View Transitions API，部分更新仍然像以前一样工作，只是没有动画。

## 启用视图过渡

在 `f-client-nav` 旁边添加 `f-view-transition` 属性：

```tsx routes/_app.tsx
export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
      </head>
      <body f-client-nav f-view-transition>
        <Component />
      </body>
    </html>
  );
}
```

现在所有部分导航（链接点击、表单提交、前进/后退）都将被动画化。

## 自定义动画

默认的视图过渡是淡入淡出效果。使用 `::view-transition-old` 和 `::view-transition-new` 伪元素通过标准 CSS 自定义它：

```css static/styles.css
::view-transition-old(root) {
  animation: fade-out 0.2s ease-in;
}
::view-transition-new(root) {
  animation: fade-in 0.2s ease-out;
}
```

### 每个元素的过渡

在 CSS 中分配 `view-transition-name` 以使特定元素独立于页面其余部分进行动画：

```css static/styles.css
.sidebar {
  view-transition-name: sidebar;
}
.main-content {
  view-transition-name: content;
}
```

然后针对这些命名的过渡：

```css static/styles.css
/* 侧边栏保持原位 */
::view-transition-old(sidebar),
::view-transition-new(sidebar) {
  animation: none;
}

/* 内容滑动 */
::view-transition-old(content) {
  animation: slide-out-left 0.3s ease-in;
}
::view-transition-new(content) {
  animation: slide-in-right 0.3s ease-out;
}
```

这对于在动画化主内容区域时保持持久 UI（导航栏、侧边栏）稳定很有用。

### 方向感知动画

由于 Fresh 会跟踪导航历史，您可以使用 CSS 自定义属性或类来为前进和后退导航应用不同的动画。View Transitions API 会自动捕获旧状态和新状态——将其与 `::view-transition-group` 结合使用以创建方向滑动效果。

## 禁用视图过渡

通过设置 `f-view-transition={false}` 在子树中禁用视图过渡：

```tsx
<body f-client-nav f-view-transition={false}>
```

## 浏览器支持

视图过渡在 Chrome 111+、Edge 111+ 和 Safari 18+ 中受支持。Firefox 支持正在开发中。在不支持的浏览器上，导航正常工作但没有动画——不需要 polyfill。