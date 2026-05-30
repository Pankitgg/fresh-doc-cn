---
description: |
  Fresh 中的路由基于文件系统，并支持自定义 URL 模式。
---

路由是确定给定传入请求由哪个路由处理的机制。Fresh 根据 URL 路径路由请求。默认情况下，路由使用文件名指定它们被调用的路径。路由还可以定义自定义 [URL 模式][urlpattern] 以用于更高级的用例。

Fresh 中的文件路由与其他框架（如 Next.js）中看到的文件路由非常相似。文件名用于确定哪个路由应该处理给定的请求。模式根据磁盘上文件相对于 `routes/` 目录的路径确定。

文件名映射到路由模式如下：

- 文件扩展名被忽略。
- 文件路径中的字面量被视为要匹配的字面量字符串。
- 名为 `<path>/index.<ext>` 的文件与名为 `<path>.<ext>` 的文件行为相同。
- 可以通过用 `[` 和 `]` 包围标识符使路径段成为动态。
- 最后路径段遵循 `[...<ident>]` 结构的路径被视为具有通配符后缀。

这是一个文件名、它们映射的路由模式以及它们可能匹配的路径的表：

| 文件名 | 路由模式 | 匹配路径 |
| --------------------------- | ---------------------- | --------------------------------------- |
| `index.ts` | `/` | `/` |
| `about.ts` | `/about` | `/about` |
| `blog/index.ts` | `/blog` | `/blog` |
| `blog/[slug].ts` | `/blog/:slug` | `/blog/foo`, `/blog/bar` |
| `blog/[slug]/comments.ts` | `/blog/:slug/comments` | `/blog/foo/comments` |
| `old/[...path].ts` | `/old/:path*` | `/old/foo`, `/old/bar/baz` |
| `docs/[[version]]/index.ts` | `/docs{/:version}?` | `/docs`, `/docs/latest`, `/docs/canary` |

高级用例可能需要使用更复杂的模式进行匹配。可以在路由配置中指定自定义 [URL 模式][urlpattern]。此模式将用于替代基于文件路径的模式：

```ts routes/x.ts
import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  routeOverride: "/x/:module@:version/:path*",
};

// ...
```

## 路由组

在使用[布局](/docs/1.x/concepts/layouts)或[中间件](/docs/1.x/concepts/middleware)时，你有时会遇到希望路由从布局继承而不是 URL 段建议的情况。

让我们用一个示例来说明：

```txt 示例页面布局
/about -> 布局 A
/career -> 布局 A
/archive -> 布局 B
/contact -> 布局 B
```

没有任何路由分组方法，这是一个问题，因为每个路由段只能有一个 `_layout` 文件。

```txt 项目结构
<project root>
└── routes
    ├── _layout.tsx  # 适用于所有路由 :(
    ├── about.tsx
    ├── career.tsx
    ├── archive.tsx
    └── contact.tsx
```

我们可以使用路由组来解决这个问题。路由组是一个名称包裹在括号中的文件夹。例如 `(info)` 将被视为路由组，`(marketing)` 也是如此。这使我们能够将相关路由分组到一个文件夹中，并为每个组使用不同的 `_layout` 文件。

```txt 项目结构
└── <root>/routes
    ├── (marketing)
    │   ├── _layout.tsx  # 仅适用于 about.tsx 和 career.tsx
    │   ├── about.tsx
    │   └── career.tsx
    └── (info)
        ├── _layout.tsx  # 仅适用于 archive.tsx 和 contact.tsx
        ├── archive.tsx
        └── contact.tsx
```

> [warn]：注意不同组中映射到相同 URL 的路由。此类场景将导致关于应选择哪个路由文件的歧义。
>
> ```txt 项目结构
> └── <root>/routes
>     ├── (group-1)
>     │   └── about.tsx  # 不好：映射到相同的 `/about` URL
>     └── (group-2)
>         └── about.tsx  # 不好：映射到相同的 `/about` URL
> ```

## 共定位

如果你想将组件和岛屿更靠近它们的路由存储，你可能想使用共定位。

当路由组文件夹的名称以下划线开头时，如 `(_components)`，Fresh 将忽略该文件夹，它实际上被视为私有。这意味着你可以使用这些私有路由文件夹来存储与特定路由相关的组件。

按照上面的示例，假设你有一些只想在营销页面中使用的组件，你可以创建一个路由组文件夹 `(_components)` 来存放这些组件。

唯一的特殊名称是 `(_islands)`，它告诉 Fresh 将该文件夹中的所有文件视为岛屿。

```txt 项目结构
└── <root>/routes
    ├── (marketing)
    │   ├── _layout.tsx
    │   ├── about.tsx
    │   ├── career.tsx
    │   ├── (_components)
    │   │   └── newsletter-cta.tsx
    │   └── (_islands)
    │       └── interactive-stats.tsx # Fresh 将此视为岛屿
    └── shop
        ├── (_components)
        │   └── product-card.tsx
        └── (_islands)
            └── cart.tsx # Fresh 将此视为岛屿
```

结合在一起，这使你能够基于功能组织代码，并将所有相关组件、岛屿或其他任何东西放入共享文件夹中。

[urlpattern]: https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API
