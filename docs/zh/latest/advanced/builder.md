---
description: |
  Builder 类用于为生产环境生成优化的资源。
---

> [警告]: `Builder` 类在 Fresh 2 的 alpha 阶段使用，在 Fresh vite 插件发布之前。如果您使用 vite，可以跳过此页面。

# Builder 类

`Builder` 类用于生成应用的生产资源。您通常会在项目的 `dev.ts` 文件中创建它。

```ts dev.ts
import { Builder } from "fresh/dev";

const builder = new Builder({ target: "safari12" });

if (Deno.args.includes("build")) {
  // 创建生产构建
  await builder.build();
} else {
  // 启动带有热重载的开发服务器
  await builder.listen(() => import("./main.ts"));
}
```

## 选项

您可以通过传递选项来自定义构建器。

```ts dev.ts
const builder = new Builder({
  // 生成代码的浏览器目标。映射到 https://esbuild.github.io/api/#target
  target?: string | string[];
  // 项目的根目录。所有其他路径如果是相对路径将相对于此解析。（默认：`Deno.cwd()`）
  root?: string;
  // 服务器入口点的路径。（默认：`<root>/main.ts`）
  serverEntry?: string;
  // 执行生产构建时写入生成文件的位置。（默认：`<root>/_fresh/`）
  outDir?: string;
  // 静态文件目录的路径，或目录数组。当指定多个目录时，按顺序搜索，第一个匹配的获胜。（默认：`<root>/static/`）
  staticDir?: string | string[];
  // 岛屿目录的路径。（默认：`<root>/islands`）
  islandDir?: string;
  // 路由目录的路径。（默认：`<root>/routes`）
  routeDir?: string;
  // 应忽略的文件路径
  ignore?: RegExp[];
  // 可选生成生产源映射。参见 https://esbuild.github.io/api/#source-maps
  sourceMap?: {
    kind?: boolean | 'linked' | 'inline' | 'external' | 'both';
    sourceRoot?: string;
    sourcesContent?: boolean;
  };
})
```

## 注册岛屿

构建器是您注册包含岛屿的文件的地方。这与 Fresh 内部使用的 API 相同。

```ts dev.ts
const builder = new Builder();

// 本地岛屿的路径
builder.registerIsland("path/to/my/Island.tsx");
// 文件 URL 也可以
builder.registerIsland("file:///path/to/my/Island.tsx");
// 也支持来自 jsr 的岛屿
builder.registerIsland("jsr:@marvinh-test/fresh-island");
```

## 添加构建插件

`Builder` 有一个非常简单的静态文件处理机制。

```ts dev.ts
builder.onTransformStaticFile({
  pluginName: "My cool plugin",
  filter: /\.css$/,
}, (args) => {
  // 在每个 `.css` 文件前添加 `body { background: red }`
  const code = `body { background: red } ${args.text}`;

  return {
    content: code,
    map: undefined, // 可选：源映射
  };
});
```

> [信息]: 只有 `static/` 目录或您设置 `staticDir` 的目录中的静态文件会被处理。构建器不会处理其他任何内容。

### 多个静态目录

您可以向 `staticDir` 传递一个数组，从多个目录提供文件。当多个目录中存在相同的文件名时，数组中的第一个目录优先。

```ts dev.ts
const builder = new Builder({
  staticDir: ["static", "generated"],
});
```

当您有一个构建步骤将资产生成到单独的目录中，并且希望将它们与手动编写的静态文件分开时，这很有用。

## 测试

使用 `Builder` 类测试应用程序涉及创建构建快照并将其分配给每个应用实例。

```ts my-app.test.ts
// 出于性能原因，最好只执行一次而不是每个测试用例都执行
const builder = new Builder();
const applySnapshot = await builder.build({ snapshot: "memory" });

function testApp() {
  const app = new App()
    .get("/", () => new Response("hello"))
    .fsRoutes();

  // 将构建快照应用于此应用实例
  applySnapshot(app);
  return app;
}

Deno.test("My Test", async () => {
  const handler = testApp().handler();

  const response = await handler(new Request("http://localhost"));
  const text = await response.text();

  if (text !== "hello") {
    throw new Error("fail");
  }
});
```

## Tailwindcss

[Tailwindcss](https://tailwindcss.com/) 是一个实用优先的 CSS 框架，从 JSX 中使用的类名生成 CSS。由于我们在 Deno 自己使用 Tailwindcss，Fresh 附带了一个官方插件。

### 使用方法

1. 在 `deno.json` 中设置 `nodeModulesDir` 为 `"manual"`

```diff deno.json
  {
    "name": "@example/my-cool-project"
+   "nodeModulesDir": "manual",
    "imports": {
      ...
    }
  }
```

2. 运行 `deno install jsr:@fresh/plugin-tailwind`
3. 更新 `dev.ts`：

```diff dev.ts
  import { Builder } from "fresh/dev";
+ import { tailwind } from "@fresh/plugin-tailwind";
  
  const builder = new Builder();
+ tailwind(builder);
```

4. 在您的主样式表顶部添加 `@import "tailwindcss";`。

有关如何使用 tailwindcss 的更多信息，请查看 [他们的文档](https://tailwindcss.com/docs/styling-with-utility-classes)。

### 选项

您可以通过以下选项自定义 tailwind 插件：

```ts dev.ts
tailwind(builder, {
  // 排除某些文件不处理
  exclude: ["/admin/**", "*.temp.css"],
  // 强制优化（默认为生产模式）
  optimize: true,
  // 排除基础样式
  base: null,
});
```

### Tailwindcss v3

如果您无法更新到当前版本的 tailwindcss，我们有一个专用的 `@fresh/plugin-tailwindcss-v3` 插件，使用 tailwindcss v3。这样您可以自行决定何时最好更新到 v4。

```ts dev.ts
import { Builder } from "fresh/dev";
import { tailwind } from "@fresh/plugin-tailwind-v3";

tailwind(builder, {});
```
