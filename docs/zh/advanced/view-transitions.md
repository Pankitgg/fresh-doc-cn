---
description: 使用视图过渡 API 为页面导航添加动画效果
---

Fresh 将浏览器的原生[视图过渡 API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) 集成到其 [partials](/docs/advanced/partials) 系统中。启用后，客户端导航期间的 DOM 更新会被包装在 `document.startViewTransition()` 中，让你在零 JavaScript 动画代码的情况下获得页面之间的平滑过渡动画。

这是渐进增强——如果浏览器不支持视图过渡 API，partials 的工作方式与以前完全相同，不会有动画。

## 启用视图过渡

将 `f-view-transition` 属性与 `f-client-nav` 一起添加：

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

现在所有 partial 导航（链接点击、表单提交、前进/后退）都会有动画效果。

## 自定义动画

默认的视图过渡是交叉淡入淡出。使用标准的 `::view-transition-old` 和 `::view-transition-new` 伪元素用 CSS 自定义它：

```css static/styles.css
::view-transition-old(root) {
  animation: fade-out 0.2s ease-in;
}
::view-transition-new(root) {
  animation: fade-in 0.2s ease-out;
}
```

### 按元素过渡

在 CSS 中分配 `view-transition-name` 以独立于页面其余部分地动画特定元素：

```css static/styles.css
.sidebar {
  view-transition-name: sidebar;
}
.main-content {
  view-transition-name: content;
}
```

然后定位那些命名过渡：

```css static/styles.css
/* 侧边栏保持不动 */
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

这对于在动画主内容区域时保持持久 UI（导航栏、侧边栏）稳定很有用。

### 方向感知动画

由于 Fresh 追踪导航历史，你可以使用 CSS 自定义属性或类来为前进和后退导航应用不同的动画。视图过渡 API 自动捕获旧状态和新状态——将其与 `::view-transition-group` 结合使用可创建方向滑动效果。

## 禁用视图过渡

通过设置 `f-view-transition={false}` 在子树中禁用视图过渡：

```tsx
<body f-client-nav f-view-transition={false}>
```

## 浏览器支持

视图过渡在 Chrome 111+、Edge 111+ 和 Safari 18+ 中受支持。Firefox 支持正在开发中。在不受支持的浏览器上，导航正常工作，不会有动画——无需 polyfill。
