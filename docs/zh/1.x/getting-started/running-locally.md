---
description: |
  要启动 Fresh 项目，只需运行 `deno task start`。这将以默认权限标志和监视模式启动项目。
---

搭建新项目后的下一步就是实际启动它。要做到这一点，你可以直接运行 `deno task start`。环境变量将自动从 `.env` 文件中读取。

```sh Terminal
$ deno task start
Watcher Process started.
 🍋 Fresh ready
     Local: http://localhost:8000
```

如果你想手动启动而不使用 Deno task，请使用适当的标志运行 `deno run` 和 `main.ts`。你需要提供以下权限标志：

- **`--allow-net`**：这是启动 HTTP 服务器所必需的。
- **`--allow-read`**：这是从磁盘读取（静态）文件所必需的。
- **`--allow-env`**：这是读取可用于配置你项目的环境变量所必需的。
- **`--allow-run`**：这是在开发期间在底层调用 `deno` 和 `esbuild` 进行类型剥离所必需的。在生产环境中，这是通过 WebAssembly 二进制文件完成的。

对于开发，你还希望使用 [`--watch` 标志][--watch] 运行，这样 Fresh 服务器将在你每次更改代码时自动重新加载。默认情况下 `--watch` 只监视你模块图中的文件。一些项目文件（如静态文件）不属于模块图，但你可能也希望在更改它们时重新启动/重新加载。这可以通过将额外的文件夹作为参数传递来实现：`--watch=static/`。你还应该将 `routes/` 添加到监视列表中，以便在添加新路由时服务器自动重启。

如果你想更改端口或主机，请修改 `main.ts` 中 `start()` 调用的配置包，以包含显式的端口号：

```ts main.ts
await start(manifest, { server: { port: 3000 } });
```

你也可以通过设置 `PORT` 环境变量来更改端口：

```sh Terminal
$ PORT=3000 deno task start
```

将所有这些结合起来，我们得到以下 `deno run` 命令：

```sh Terminal
$ deno run --allow-net --allow-read --allow-env --allow-run --watch=static/,routes/ main.ts
Watcher Process started.
 🍋 Fresh ready
     Local: http://localhost:3000
```

如果你现在访问 http://localhost:3000，你可以看到正在运行的项目。尝试更改 `routes/index.tsx` 中的一些文本，看看页面在你保存文件时如何自动更新。

[--watch]: https://docs.deno.com/runtime/getting_started/command_line_interface/#watch-mode
