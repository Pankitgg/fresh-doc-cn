---
description: |
  使用 _layout.tsx 文件在共享 UI 中包装页面。布局自动嵌套，支持异步数据加载，并且可以按路由跳过。
---

# 布局

本页介绍使用 `_layout.tsx` 文件的**基于文件的布局**。如果您使用 `new App()` 以编程方式定义路由，请参见[布局（编程式）](/docs/advanced/layouts)。

布局允许您在共享 UI（导航栏、侧边栏、页脚或任何常见结构）中包装一组页面。它们在 `_layout.tsx` 文件中定义，并根据目录树自动嵌套。

## 布局如何工作

在 `routes/` 下的任何目录中放置一个 `_layout.tsx` 文件。它包装该目录及其子目录中的每个页面。每个目录可以有一个布局。

```txt-files 项目结构
<project root>
└── routes
    ├── _app.tsx           # 应用包装器（最外层 HTML 外壳）
    ├── _layout.tsx        # 根布局 - 包装所有页面
    ├── index.tsx
    ├── about.tsx
    ├── blog
    │   ├── _layout.tsx    # 博客布局 - 包装博客页面
    │   ├── index.tsx
    │   └── [slug].tsx
    └── admin
        ├── _layout.tsx    # 管理布局 - 包装管理页面
        └── dashboard.tsx
```

当用户访问 `/blog/my-post` 时，Fresh 从外到内渲染这些组件：

1. `_app.tsx` - 外部 `<html>`/`<head>`/`<body>` 外壳
2. `routes/_layout.tsx` - 根布局（例如站点页眉和页脚）
3. `routes/blog/_layout.tsx` - 博客布局（例如博客侧边栏）
4. `routes/blog/[slug].tsx` - 页面本身

## 基本布局

布局接收 `Component`（要包装的子组件）和其他 props（如 `state` 和 `url`）。[中间件](/docs/concepts/middleware)设置的任何状态都可以通过 `props.state` 访问。

```tsx routes/_layout.tsx
import { define } from "../utils.ts";

export default define.layout(({ Component, state, url }) => {
  return (
    <div class="layout">
      <nav>
        <a href="/" class={url.pathname === "/" ? "active" : ""}>首页</a>
        <a href="/about">关于</a>
        {state.user && <span>你好, {state.user.name}</span>}
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

布局可以是异步的，以便在渲染前获取数据：

```tsx routes/blog/_layout.tsx
import { define } from "../../utils.ts";

export default define.layout(async (ctx) => {
  const categories = await db.categories.list();

  return (
    <div class="blog-layout">
      <aside>
        <h2>分类</h2>
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

## 选择退出布局继承

有时路由需要完全不同的外观——登录页面、全屏仪表板或打印视图。在路由配置中使用 `skipInheritedLayouts` 来跳过从父目录继承的所有布局：

```tsx routes/login.tsx
import { type RouteConfig } from "fresh";
import { define } from "../utils.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};

export default define.page(() => {
  return (
    <div class="login-page">
      <h1>登录</h1>
      <form method="POST">
        <input type="email" name="email" placeholder="邮箱" />
        <input type="password" name="password" placeholder="密码" />
        <button type="submit">登录</button>
      </form>
    </div>
  );
});
```

您也可以从布局文件本身跳过继承的布局。当您站点的某个部分需要完全不同的外壳时，这很有用：

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
        <a href="/admin/dashboard">仪表板</a>
        <a href="/admin/users">用户</a>
      </aside>
      <main>
        <Component />
      </main>
    </div>
  );
});
```

## 布局 vs 应用包装器

[应用包装器](/docs/concepts/app)（`_app.tsx`）和布局服务于不同的目的：

- **应用包装器** - 最外层的 `<html>`/`<head>`/`<body>` 结构。只有一个，它包装一切。
- **布局** - 可重用的 UI 外壳，根据目录结构嵌套。可以有很多，它们位于应用包装器和页面组件之间。
