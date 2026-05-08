---
description: "在路由间创建可复用的布局"
---

本页涵盖通过 `app.layout()` 定义的**编程式布局**。如果你使用的是基于文件的路由，请参阅[布局（基于文件）](/docs/concepts/layouts)。

布局是基于匹配模式继承的普通 Preact 组件。当你的网站有一个部分，其中所有页面共享相同的 HTML 结构，只有内容发生变化时，布局是一种很好的抽象方式。布局只在服务器端渲染。传递的 `Component` 值代表该组件的子元素。

```tsx
function PageLayout({ Component }) {
  return (
    <div>
      <Component />
      <aside>Here is some sidebar content</aside>
    </div>
  );
}

const app = new App()
  .layout("*", PageLayout)
  .get("/", (ctx) => ctx.render(<h1>hello</h1>));
```

如果你浏览到 `/` 路由，Fresh 将渲染以下 HTML

```html Response body
<div>
  <h1>hello world</h1>
  <aside>Here is some sidebar content</aside>
</div>
```

## 多个布局

你可以为不同的路径注册多个布局。布局从父路径继承——`"*"` 的布局适用于所有路由，更具体的布局叠加在上面：

```ts
const app = new App()
  .layout("*", MainLayout) // 应用于所有路由
  .layout("/admin/*", AdminLayout) // 为 /admin/* 路由叠加
  .get("/", (ctx) => ctx.render(<h1>Home</h1>))
  .get("/admin/dashboard", (ctx) => ctx.render(<h1>Dashboard</h1>));
```

对于 `/admin/dashboard`，`MainLayout` 和 `AdminLayout` 都会包裹页面组件（`MainLayout` 作为外层包装，`AdminLayout` 作为内层）。

## 覆盖布局

使用 `skipInheritedLayouts` 将所有继承的布局替换为单个布局：

```ts main.ts
const app = new App()
  .layout("*", MainLayout)
  .layout("/landing", LandingLayout, { skipInheritedLayouts: true })
  .get("/", (ctx) => ctx.render(<h1>Home</h1>)) // 使用 MainLayout
  .get("/landing", (ctx) => ctx.render(<h1>Landing</h1>)); // 只使用 LandingLayout
```

## 选项

忽略 [app wrapper](/docs/concepts/app) 组件：

```ts
app.layout("/foo/bar", MyComponent, { skipAppWrapper: true });
```
