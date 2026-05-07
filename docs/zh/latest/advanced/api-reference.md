---
description: |
  Fresh 入口点的所有公共导出的快速参考：fresh、fresh/runtime 和 fresh/dev。
---

本页列出了 Fresh 入口点的所有公共导出。

> [info]: 您也可以在 JSR 上探索 Fresh 的完整 API 文档：
> [`@fresh/core`](https://jsr.io/@fresh/core/doc)

## `fresh`

服务器端代码的主要入口点。

```ts
import { App, createDefine, HttpError, page, staticFiles } from "fresh";
```

| 导出 | 类型 | 描述 |
| ---- | ---- | ---- |
| [`App`](https://jsr.io/@fresh/core/doc/~/App) | 类 | 主要应用类。参见 [App](/docs/concepts/app)。 |
| [`staticFiles`](https://jsr.io/@fresh/core/doc/~/staticFiles) | 函数 | 用于服务静态文件的中间件。参见 [静态文件](/docs/concepts/static-files)。 |
| [`createDefine`](https://jsr.io/@fresh/core/doc/~/createDefine) | 函数 | 创建类型安全的 `define.*` 辅助函数。参见 [Define 辅助函数](/docs/advanced/define)。 |
| [`page`](https://jsr.io/@fresh/core/doc/~/page) | 函数 | 从处理器向页面组件返回数据。参见 [数据获取](/docs/concepts/data-fetching)。 |
| [`HttpError`](https://jsr.io/@fresh/core/doc/~/HttpError) | 类 | 抛出带状态码的 HTTP 错误。参见 [错误处理](/docs/advanced/error-handling)。 |
| [`cors`](https://jsr.io/@fresh/core/doc/~/cors) | 函数 | CORS 中间件。参见 [cors](/docs/plugins/cors)。 |
| [`csrf`](https://jsr.io/@fresh/core/doc/~/csrf) | 函数 | CSRF 保护中间件。参见 [csrf](/docs/plugins/csrf)。 |
| [`csp`](https://jsr.io/@fresh/core/doc/~/csp) | 函数 | 内容安全策略中间件。参见 [csp](/docs/plugins/csp)。 |
| [`trailingSlashes`](https://jsr.io/@fresh/core/doc/~/trailingSlashes) | 函数 | 尾部斜杠强制中间件。参见 [trailingSlashes](/docs/plugins/trailing-slashes)。 |

**类型：**

| 导出 | 类型 | 描述 |
| ---- | ---- | ---- |
| [`Context`](https://jsr.io/@fresh/core/doc/~/Context) / [`FreshContext`](https://jsr.io/@fresh/core/doc/~/FreshContext) | 接口 | 传递给所有中间件和处理器的请求上下文。 |
| [`PageProps`](https://jsr.io/@fresh/core/doc/~/PageProps) | 类型 | 页面组件接收的属性（`data`、`url`、`params`、`state` 等）。 |
| [`Middleware`](https://jsr.io/@fresh/core/doc/~/Middleware) / [`MiddlewareFn`](https://jsr.io/@fresh/core/doc/~/MiddlewareFn) | 类型 | 中间件函数类型。 |
| [`HandlerFn`](https://jsr.io/@fresh/core/doc/~/HandlerFn) | 类型 | 单个处理器函数类型。 |
| [`HandlerByMethod`](https://jsr.io/@fresh/core/doc/~/HandlerByMethod) | 类型 | 包含按方法分的处理器函数的对象。 |
| [`RouteHandler`](https://jsr.io/@fresh/core/doc/~/RouteHandler) | 类型 | `HandlerFn` 和 `HandlerByMethod` 的联合类型。 |
| [`PageResponse`](https://jsr.io/@fresh/core/doc/~/PageResponse) | 类型 | `page()` 的返回类型。 |
| [`RouteConfig`](https://jsr.io/@fresh/core/doc/~/RouteConfig) | 接口 | 路由配置（`routeOverride`、`skipInheritedLayouts` 等）。 |
| [`LayoutConfig`](https://jsr.io/@fresh/core/doc/~/LayoutConfig) | 接口 | 布局配置（`skipInheritedLayouts`、`skipAppWrapper`）。 |
| [`Define`](https://jsr.io/@fresh/core/doc/~/Define) | 接口 | `createDefine()` 返回的对象类型。 |
| [`FreshConfig`](https://jsr.io/@fresh/core/doc/~/FreshConfig) / [`ResolvedFreshConfig`](https://jsr.io/@fresh/core/doc/~/ResolvedFreshConfig) | 接口 | 应用配置类型。 |
| [`ListenOptions`](https://jsr.io/@fresh/core/doc/~/ListenOptions) | 接口 | `app.listen()` 的选项。 |
| [`Island`](https://jsr.io/@fresh/core/doc/~/Island) | 类型 | Island 组件类型。 |
| [`Method`](https://jsr.io/@fresh/core/doc/~/Method) | 类型 | HTTP 方法联合类型。 |
| [`RouteData`](https://jsr.io/@fresh/core/doc/~/RouteData) | 类型 | 路由处理器通过 `page()` 返回的数据类型。 |
| [`Lazy`](https://jsr.io/@fresh/core/doc/~/Lazy) / [`MaybeLazy`](https://jsr.io/@fresh/core/doc/~/MaybeLazy) | 类型 | 用于延迟加载路由和中间件的实用类型。 |
| [`CORSOptions`](https://jsr.io/@fresh/core/doc/~/CORSOptions) | 接口 | `cors()` 的选项。 |
| [`CsrfOptions`](https://jsr.io/@fresh/core/doc/~/CsrfOptions) | 接口 | `csrf()` 的选项。 |
| [`CSPOptions`](https://jsr.io/@fresh/core/doc/~/CSPOptions) | 接口 | `csp()` 的选项。 |

## `fresh/runtime`

服务器和客户端代码共享的运行时工具。在 [islands](/docs/concepts/islands) 中导入是安全的。

```ts
import {
  asset,
  assetSrcSet,
  Head,
  HttpError,
  IS_BROWSER,
  Partial,
} from "fresh/runtime";
```

| 导出 | 类型 | 描述 |
| ---- | ---- | ---- |
| [`IS_BROWSER`](https://jsr.io/@fresh/core/doc/runtime/~/IS_BROWSER) | 常量 | 在浏览器中为 `true`，在服务器上为 `false`。用于保护仅浏览器代码。 |
| [`asset`](https://jsr.io/@fresh/core/doc/runtime/~/asset) | 函数 | 向资源 URL 添加缓存破坏查询参数。参见 [静态文件](/docs/concepts/static-files)。 |
| [`assetSrcSet`](https://jsr.io/@fresh/core/doc/runtime/~/assetSrcSet) | 函数 | 对 `srcset` 字符串中的所有 URL 应用 `asset()`。 |
| [`Partial`](https://jsr.io/@fresh/core/doc/runtime/~/Partial) | 组件 | 标记一个区域用于部分更新。参见 [部分更新](/docs/advanced/partials)。 |
| [`Head`](https://jsr.io/@fresh/core/doc/runtime/~/Head) | 组件 | 向文档 `&lt;head&gt;` 添加元素。参见 [&lt;head&gt; 元素](/docs/advanced/head)。 |
| [`HttpError`](https://jsr.io/@fresh/core/doc/runtime/~/HttpError) | 类 | HTTP 错误类（从 `fresh` 重新导出）。 |

## `fresh/dev`

开发和构建工具。仅在 `dev.ts`（遗留）或构建脚本中使用。

```ts
import { Builder } from "fresh/dev";
```

| 导出 | 类型 | 描述 |
| ---- | ---- | ---- |
| [`Builder`](https://jsr.io/@fresh/core/doc/dev/~/Builder) | 类 | Pre-Vite 构建系统（遗留）。参见 [Builder](/docs/advanced/builder)。 |

**类型：**

| 导出 | 类型 | 描述 |
| ---- | ---- | ---- |
| [`BuildOptions`](https://jsr.io/@fresh/core/doc/dev/~/BuildOptions) | 接口 | `new Builder()` 的选项。 |
| [`ResolvedBuildConfig`](https://jsr.io/@fresh/core/doc/dev/~/ResolvedBuildConfig) | 接口 | 解析后的构建配置。 |
| [`OnTransformArgs`](https://jsr.io/@fresh/core/doc/dev/~/OnTransformArgs) / [`OnTransformOptions`](https://jsr.io/@fresh/core/doc/dev/~/OnTransformOptions) / [`TransformFn`](https://jsr.io/@fresh/core/doc/dev/~/TransformFn) | 类型 | 构建插件钩子类型。 |