---
description: |
  配置核心 Fresh 服务器的能力使其具有灵活性。
---

# 服务器配置

在本页中，我们讨论服务器在启动期间如何配置。

主要方法的签名如下：

```ts main.ts
export async function start(manifest: Manifest, config: FreshConfig = {});
```

## 配置

`Manifest` 来自 `fresh.gen.ts`，所以那里没有什么要做的。`config` 是事情变得有趣的地方。[`FreshConfig`](https://deno.land/x/fresh/server.ts?s=FreshConfig) 看起来像这样：

```ts fresh 🍋
export interface FreshConfig {
  build?: {
    /**
     * The directory to write generated files to when `dev.ts build` is run.
     * This can be an absolute path, a file URL or a relative path.
     */
    outDir?: string;
    /**
     * This sets the target environment for the generated code. Newer
     * language constructs will be transformed to match the specified
     * support range. See https://esbuild.github.io/api/#target
     * @default {"es2022"}
     */
    target?: string | string[];
  };
  render?: RenderFunction;
  plugins?: Plugin[];
  staticDir?: string;
  router?: RouterOptions;
  server?: Partial<Deno.ServeTlsOptions>;
}
```

为了完整性，这里是剩余的两个类型：

```ts fresh 🍋
export type RenderFunction = (
  ctx: RenderContext,
  render: InnerRenderFunction,
) => void | Promise<void>;

export interface RouterOptions {
  /**
   *  Controls whether Fresh will append a trailing slash to the URL.
   *  @default {false}
   */
  trailingSlash?: boolean;
  /**
   *  Configures the pattern of files to ignore in islands and routes.
   *
   *  By default Fresh will ignore test files,
   *  for example files with a `.test.ts` or a `_test.ts` suffix.
   *
   *  @default {/(?:[^/]*_|[^/]*\.|)test\.(?:ts|tsx|mts|js|mjs|jsx|)\/*$/}
   */
  ignoreFilePattern?: RegExp;
  /**
   * Serve fresh from a base path instead of from the root.
   *   "/foo/bar" -> http://localhost:8000/foo/bar
   * @default {undefined}
   */
  basePath?: string;
}
```

## 构建

### outDir

正如注释所示，这可以用于配置生成文件的写入位置：

```tsx dev.ts
await dev(import.meta.url, "./main.ts", {
  build: {
    outDir: Deno.env.get("FRESH_TEST_OUTDIR") ?? undefined,
  },
});
```

### target

这应该是一个有效的 ES Build 目标。

```tsx dev.ts
await dev(import.meta.url, "./main.ts", {
  build: {
    target: "es2015",
  },
});
```

## 插件

有关此主题的更多详细信息，请参阅[文档](/docs/1.x/concepts/plugins)。但作为一个快速示例，你可以执行类似这样的操作来加载插件：

```ts main.ts
await start(manifest, { plugins: [twindPlugin(twindConfig)] });
```

## StaticDir

这允许你指定站点的静态资产存储的位置。这是一个示例：

```ts main.ts
await start(manifest, { staticDir: "./custom_static" });
```

## Render

这是目前可用的最复杂的选项。它允许你配置组件的渲染方式。

## RouterOptions

### TrailingSlash

默认情况下，Fresh 使用类似 `https://www.example.com/about` 的 URL。如果你愿意，你可以通过使用 `trailingSlash` 设置将其配置为 `https://www.example.com/about/`。

```ts main.ts
await start(manifest, { router: { trailingSlash: true } });
```

### ignoreFilePattern

默认情况下，Fresh 会忽略与路由和岛屿相邻的测试文件。如果你愿意，你可以更改 Fresh 用于忽略这些文件的模式。

### basePath

此设置允许你从域名的子路径提供 Fresh 应用。例如，`/foo/bar` 的值将从 `http://localhost:8000/foo/bar` 提供应用，而不是 `http://localhost:8000/`。

`basePath` 将自动应用于应用中的绝对链接。例如，当 `basePath` 是 `/foo/bar` 时，链接到 `/about` 将自动变为 `/foo/bar/about`。

```tsx
<a href="/about">About</a>;
```

渲染的 HTML：

```html
<a href="/foo/bar/about">About</a>
```

`basePath` 也应用于 `<img>` 标签的 `src` 和 `srcset` 属性、`<link>` 的 `href` 属性以及 `<script>` 标签的 `src` 属性。

## 服务器

现在 Deno 已经稳定了 [Deno.serve](https://docs.deno.com/api/deno/~/Deno.serve) 并且 Fresh 已经切换到使用此 API，所有服务器配置选项都嵌入在 `FreshConfig` 内的 `server` 中。完全展开的参数集如下所示：

```ts
server: {
  /** Server private key in PEM format */
  cert: string;

  /** Cert chain in PEM format */
  key: string;

  /** The port to listen on.
   *
   * @default {8000} */
  port?: number;

  /** A literal IP address or host name that can be resolved to an IP address.
   *
   * __Note about `0.0.0.0`__ While listening `0.0.0.0` works on all platforms,
   * the browsers on Windows don't work with the address `0.0.0.0`.
   * You should show the message like `server running on localhost:8080` instead of
   * `server running on 0.0.0.0:8080` if your program supports Windows.
   *
   * @default {"0.0.0.0"} */
  hostname?: string;

  /** An {@linkcode AbortSignal} to close the server and all connections. */
  signal?: AbortSignal;

  /** Sets `SO_REUSEPORT` on POSIX systems. */
  reusePort?: boolean;

  /** The handler to invoke when route handlers throw an error. */
  onError?: (error: unknown) => Response | Promise<Response>;

  /** The callback which is called when the server starts listening. */
  onListen?: (params: { hostname: string; port: number }) => void;
}
```

使用这些来根据你的需要配置服务器。
