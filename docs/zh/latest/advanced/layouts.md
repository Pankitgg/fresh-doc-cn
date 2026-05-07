---
description: "跨路由创建可重用的布局"
---

本页介绍通过 `app.layout()` 定义的**编程式布局**。如果您使用基于文件的路由，请参见[布局（基于文件）](/docs/concepts/layouts)。

布局是普通的 Preact 组件，根据匹配模式继承。当您的网站某个部分的所有页面共享相同的 HTML 结构，只有内容变化时，布局是抽象这一点的好方法。布局只在服务器上渲染。传递的 `Component` 值表示此组件的子组件。

```tsx
function PageLayout({ Component }) {
  return (
    <div>
      <Component />
      <aside>这里是一些侧边栏内容</aside>
    </div>
  );
}

const app = new App()
  .layout("*", PageLayout)
  .get("/", (ctx) => ctx.render(<h1>hello</h1>));
```

如果您浏览到 `/` 路由，Fresh 将渲染以下 HTML：

```html Response body
<div>
  <h1>hello world</h1>
  <aside>这里是一些侧边栏内容</aside>
</div>
```

## 多个布局

您可以为不同的路径注册多个布局。布局从父路径继承 - `"*"` 处的布局适用于所有路由，更具体的布局会叠加在上面：

```ts
const app = new App()
  .layout("*", MainLayout) // 应用于所有路由
  .layout("/admin/*", AdminLayout) // 为 /admin/* 路由叠加
  .get("/", (ctx) => ctx.render(<h1>Home</h1>))
  .get("/admin/dashboard", (ctx) => ctx.render(<h1>Dashboard</h1>));
```

对于 `/admin/dashboard`，`MainLayout` 和 `AdminLayout` 都会包装页面组件（MainLayout 作为外层包装，AdminLayout 作为内层）。

## 覆盖布局

使用 `skipInheritedLayouts` 用单个布局替换所有继承的布局：

```ts main.ts
const app = new App()
  .layout("*", MainLayout)
  .layout("/landing", LandingLayout, { skipInheritedLayouts: true })
  .get("/", (ctx) => ctx.render(<h1>Home</h1>)) // 使用 MainLayout
  .get("/landing", (ctx) => ctx.render(<h1>Landing</h1>)); // 仅使用 LandingLayout
```

## 选项

忽略[应用包装器](/docs/concepts/app)组件：

```ts
app.layout("/foo/bar", MyComponent, { skipAppWrapper: true });
```
