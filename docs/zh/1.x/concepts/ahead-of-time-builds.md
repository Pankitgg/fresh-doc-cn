---
description: |
  Fresh 使我们可以提前优化前端资源，从而使页面加载更快。
---

Fresh 使我们能够在代码部署之前预先优化前端资源。在此过程中，岛屿的代码将被压缩和优化，以便 Fresh 可以向浏览器发送尽可能少的代码。根据岛屿所需的代码量，如果在服务端实时进行，此过程可能需要几秒钟。

提前进行这些优化，并将已经优化的资源与代码一起部署，允许 Fresh 将它们视为任何其他静态文件，并可以立即提供服务，无需任何进一步处理。对于有岛屿的页面，无需进行任何处理可以大大缩短页面加载时间。

插件可以在提前构建期间构建静态资源。这可以用于预处理或生成 CSS 文件等。

## 创建优化构建

要让 Fresh 优化所有资源，请运行以下命令之一：

```sh Terminal
# 在较新的 Fresh 项目中作为任务
deno task build
# 或手动调用
deno run -A dev.ts build
```

这将在项目目录中创建一个 `_fresh` 文件夹。该文件夹包含优化的资源和一个 `snapshot.json` 文件，其中包含 Fresh 的一些元数据。

插件生成的任何其他静态文件将存储在 `_fresh/static` 子文件夹中。它们将与其他[静态文件](/docs/1.x/concepts/static-files.md)一样提供服务。

> [info]：`_fresh` 文件夹不应该提交到存储库。在 `.gitignore` 文件中添加一个条目以确保它不会被提交。如果不存在，请在 git 存储库的根目录创建该文件。
>
> ```gitignore .gitignore
> # 忽略 fresh 构建目录
> _fresh/
> ```

## 运行带有优化资源的 Fresh

当 Fresh 以非开发模式运行时（通常通过 `main.ts`），Fresh 将自动选择优化资源，只要 `_fresh` 文件夹存在。如果找到，Fresh 将在终端打印以下消息：

```sh Terminal output
Using snapshot found at /path/to/project/_fresh
```

## 部署优化的 Fresh 项目

如果你正在将 Fresh 项目部署到 Deno Deploy，你可以使用提前构建来在部署之前优化资源。这将使你的应用程序加载更快。

打开 Deno Deploy 仪表板并进入项目设置中的"Git Integration"部分。在"Build command"字段中输入 `deno task build` 并保存。这将使你的 Deno Deploy 项目使用提前构建。

## 迁移带有插件的现有项目

如果你正在使用 Fresh 插件，请将它们提取到 `fresh.config.ts` 文件中，以便 `dev.ts` 和 `main.ts` 脚本都可以访问它们。

```ts fresh.config.ts
import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

export default defineConfig({
  plugins: [twindPlugin(twindConfig)],
});
```

```ts main.ts
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

await start(manifest, config);
```

```ts dev.ts
import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

await dev(import.meta.url, "./main.ts", config);
```
