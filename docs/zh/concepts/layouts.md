---
description: |
  使用 _layout.tsx 文件将页面包裹在共享 UI 中。布局会自动嵌套，支持异步数据加载，并且可以按路由跳过。
---

本页面介绍使用 `_layout.tsx` 文件的**基于文件的布局**。如果您是通过 `new App()` 以编程方式定义路由，请参阅[布局（编程式）](/docs/advanced/layouts)。

布局允许您将一组页面包裹在共享的 UI 中——导航栏、侧边栏、页脚或任何通用结构。它们在 `_layout.tsx` 文件中定义，并基于目录树自动嵌套。

## 布局的工作原理

在 `routes/` 下的任何目录中放置一个 `_layout.tsx` 文件。它会包裹该目录及其子目录中的每个页面。每个目录可以有一个布局。

```txt-files 项目结构
<project root>
└── routes
    ├── _app.tsx           # App 包装器（最外层的 HTML shell）
    ├── _layout.tsx        # 根布局 - 包裹所有页面
    ├── index.tsx
    ├── about.tsx
    ├── blog
    │   ├── _layout.tsx    # 博客布局 - 包裹博客页面
    │   ├── index.tsx
    │   └── [slug].tsx
    └── admin
        ├── _layout.tsx    # 管理后台布局 - 包裹管理后台页面
        └── dashboard.tsx
```

当用户访问 `/blog/my-post` 时，Fresh 会从外向内渲染这些组件：

1. `_app.tsx` - 最外层的 `<html>`/`<head>`/`<body>` shell
2. `routes/_layout.tsx` - 根布局（例如：网站页眉和页脚）
3. `routes/blog/_layout.tsx` - 博客布局（例如：博客侧边栏）
4. `routes/blog/[slug].tsx` - 页面本身

## 基本布局

布局接收 `Component`（要包裹的子组件）和其他属性，如 `state` 和 `url`。通过[中间件](/docs/concepts/middleware)设置的任何状态都可以通过 `props.state` 获取。

```tsx routes/_layout.tsx
import { define } from "../utils.ts";

export default define.layout(({ Component, state, url }) => {
  return (
    <div class="layout">
      <nav>
        <a href="/" class={url.pathname === "/" ? "active" : ""}>Home</a>
        <a href="/about">About</a>
        {state.user && <span>Hi, {state.user.name}</span>}
      </nav>
      <main>
        <Component />
      </main>
      <footer>&copy; 2026</footer>
    </div>
  );
});
```

## 异步布局

布局可以是异步的，以便在渲染之前获取数据：

```tsx routes/blog/_layout.tsx
import { define } from "../../utils.ts";

export default define.layout(async (ctx) => {
  const categories = await db.categories.list();

  return (
    <div class="blog-layout">
      <aside>
        <h2>Categories</h2>
        <ul>
          {categories.map((c) => (
            <li>
              <a href={`/blog?cat=${c.slug}`}>{c.name}</a>
            </li>
          ))}
        </ul>
      </aside>
      <article>
        <ctx.Component />
      </article>
    </div>
  );
});
```

## 退出布局继承

有时路由需要完全不同的外壳——登录页面、全屏仪表板或打印视图。在路由配置中使用 `skipInheritedLayouts` 可以跳过从父目录继承的所有布局：

```tsx routes/login.tsx
import { type RouteConfig } from "fresh";
import { define } from "../utils.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};

export default define.page(() => {
  return (
    <div class="login-page">
      <h1>Sign in</h1>
      <form method="POST">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
});
```

您也可以从布局文件本身跳过继承的布局。当网站的某个部分需要完全不同的外壳时，这很有用：

```tsx routes/admin/_layout.tsx
import { type LayoutConfig } from "fresh";
import { define } from "../../utils.ts";

export const config: LayoutConfig = {
  skipInheritedLayouts: true,
};

export default define.layout(({ Component, state }) => {
  return (
    <div class="admin-shell">
      <aside class="admin-sidebar">
        <a href="/admin/dashboard">Dashboard</a>
        <a href="/admin/users">Users</a>
      </aside>
      <main>
        <Component />
      </main>
    </div>
  );
});
```

## 布局与 App 包装器的区别

[App 包装器](/docs/concepts/app)（`_app.tsx`）和布局有不同的用途：

- **App 包装器** - 最外层的 `<html>`/`<head>`/`<body>` 结构。只有一个，它包裹所有内容。
- **布局** - 基于目录结构嵌套的可复用 UI 外壳。可以有多个，它们位于 App 包装器和页面组件之间。
