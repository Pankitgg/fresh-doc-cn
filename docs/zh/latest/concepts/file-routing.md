---
description: |
  路由是 Fresh 应用的基本构建块。它们用于定义应用在请求给定路径时的行为。
---

# 文件路由

在 [`App`](/docs/concepts/app) 实例上使用 `.fsRoutes()` 助手来指定基于文件的路由应该插入的位置。它根据项目中 `routes/` 文件夹的结构添加路由（或者您在 `vite.config.ts` 中实例化 [`fresh()` vite 插件](/docs/advanced/vite) 时指定的任何其他文件夹）。当您在那里添加新文件时，它会自动注册新路由。

```ts main.ts
import { App, staticFiles } from "fresh";

const app = new App({ basePath: "/foo" })
  .use(staticFiles())
  .fsRoutes(); // 在这里插入所有基于文件的路由
```

> [信息]: 使用基于文件的路由时，`staticFiles()` 中间件是必需的。否则，[岛屿](/docs/concepts/islands)所需的 JavaScript 文件将不会被提供给浏览器。

项目结构示例：

```txt-files 项目结构
<project root>
├── deno.json
├── main.ts
├── vite.config.ts
└── routes
    ├── (marketing)  # 路由组，用于对相关路由进行分组
    │   ├── _layout.tsx  # 对此目录中的所有路由应用布局
    │   ├── about.tsx    # /about 路由
    │   ├── career.tsx   # /career 路由
    │   ├── (_components)  # 相关组件
    │   │   └── newsletter-cta.tsx
    │   └── (_islands)  # 本地岛屿目录
    │       └── interactive-stats.tsx # Fresh 将此视为岛屿
    └── shop
        ├── (_components)
        │   └── product-card.tsx
        ├── (_islands)
        │   └── cart.tsx # Fresh 将此视为岛屿
        └── index.tsx
```

**`routes/` 内的特殊目录：**

- **`(_islands)`** - 此目录中的文件被视为[岛屿](/docs/concepts/islands)，就像顶级 `islands/` 文件夹中的文件一样。这允许您将岛屿与使用它们的路由放在一起。
- **`(_components)`** - 用于仅由附近路由使用的非岛屿组件的常规目录。Fresh 不会特别处理这些文件 - 括号只是防止它们成为路由。

文件名映射到路由模式如下：

- 忽略文件扩展名。
- 文件路径中的字面量被视为要匹配的字符串字面量。
- 名为 `<path>/index.<ext>` 的文件的行为与名为 `<path>.<ext>` 的文件相同。
- 通过用 `[` 和 `]` 包围标识符，可以使路径段成为动态的。
- 最后一个路径段遵循 `[...<ident>]` 结构的路径被视为具有通配符后缀。

以下是文件名、它们映射到的路由模式以及它们可能匹配的路径的表格：

| 文件名                      | 路由模式               | 匹配路径                                 |
| --------------------------- | ---------------------- | ---------------------------------------- |
| `index.ts`                  | `/`                    | `/`                                      |
| `about.ts`                  | `/about`               | `/about`                                 |
| `blog/index.ts`             | `/blog`                | `/blog`                                  |
| `blog/[slug].ts`            | `/blog/:slug`          | `/blog/foo`, `/blog/bar`                 |
| `blog/[slug]/comments.ts`   | `/blog/:slug/comments` | `/blog/foo/comments`                     |
| `old/[...path].ts`          | `/old/:path*`          | `/old/foo`, `/old/bar/baz`               |
| `docs/[[version]]/index.ts` | `/docs{/:version}?`    | `/docs`, `/docs/latest`, `/docs/canary`  |
| `[[name]].ts`               | `/{:name}?`            | `/`, `/foo`, `/bar`                      |

高级用例可能需要使用更复杂的模式进行匹配。可以在路由配置中指定自定义 [URL 模式][urlpattern]。此模式将替代基于文件路径的模式：

```ts routes/my-route.ts
import { RouteConfig } from "fresh";

export const config: RouteConfig = {
  routeOverride: "/x/:module@:version/:path*",
};

// ...
```

您还可以通过导出 `css` 数组来为特定路由加载额外的 CSS 文件。这是一个顶级导出，与 `config` 分开：

```ts routes/dashboard.tsx
export const css = ["./assets/dashboard.css"];
```

## 路由组

当使用[布局](/docs/advanced/layouts)或[中间件](/docs/concepts/middleware)时，您有时会遇到一种情况，即您希望路由从 URL 段建议的布局以外的布局继承。

让我们用一个例子来说明：

```txt 示例页面布局
/about -> 布局 A
/career -> 布局 A
/archive -> 布局 B
/contact -> 布局 B
```

如果没有任何分组路由的方法，这是一个问题，因为每个路由段只能有一个 `_layout` 文件。

```txt-files 项目结构
└── <root>/routes
    ├── _layout.tsx  # 应用于所有路由 :(
    ├── about.tsx
    ├── career.tsx
    ├── archive.tsx
    └── contact.tsx
```

我们可以使用路由组来解决这个问题。路由组是一个名称用括号括起来的文件夹。例如 `(info)` 将被视为路由组，`(marketing)` 也是如此。这使我们能够将相关路由分组到一个文件夹中，并为每个组使用不同的 `_layout` 文件。

```txt-files 项目结构
└── <root>/routes
    ├── (marketing)
    │   ├── _layout.tsx  # 仅应用于 about.tsx 和 career.tsx
    │   ├── about.tsx
    │   └── career.tsx
    └── (info)
        ├── _layout.tsx  # 仅应用于 archive.tsx 和 contact.tsx
        ├── archive.tsx
        └── contact.tsx
```

> [警告]: 请注意不同组中映射到同一 URL 的路由。这种情况会导致应该选择哪个路由文件的歧义。
>
> ```txt-files 项目结构
> └── <root>/routes
>     ├── (group-1)
>     │   └── about.tsx  # 不好：映射到相同的 `/about` URL
>     └── (group-2)
>         └── about.tsx  # 不好：映射到相同的 `/about` URL
> ```

[urlpattern]: https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API
