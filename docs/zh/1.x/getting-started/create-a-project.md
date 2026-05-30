---
description: |
  通过运行 Fresh 项目创建工具来创建新的 Fresh 项目。这将搭建 Fresh 项目所需的各种文件和目录。
---

可以通过使用 Fresh 项目创建工具来创建新的 Fresh 项目。它将搭建一个新项目，并附带一些示例文件供你入门。

要创建新项目，请运行：

```sh Terminal
deno run -A -r https://fresh.deno.dev
cd fresh-project
deno task start
```

这将搭建新项目，然后切换到新创建的目录，并启动开发服务器。

这将创建一个包含若干文件和目录的目录。其中有 4 个文件是运行 Fresh 项目所必需的：

- **`dev.ts`**：这是项目的开发入口点。这是你启动项目时运行的文件。这个文件不一定非要叫 `dev.ts`，但这是惯例。
- **`main.ts`**：这是项目的生产入口点。这是你链接到 Deno Deploy 的文件。这个文件实际上不一定非要叫 `main.ts`，但这是惯例。
- **`fresh.gen.ts`**：这是清单文件，包含有关你的路由和岛屿的信息。这个文件在开发时会根据你的 `routes/` 和 `islands/` 文件夹自动生成。

项目目录中还会创建一个 **`deno.json`** 文件。这个文件有两个作用：

- 它定义了 "imports" 字段。这是一个用于管理项目依赖的[导入映射][import-map]。这样可以方便地导入和更新依赖。
- 它注册了一个 "start" [任务][task-runner]，用于启动项目，而无需输入一长串 `deno run` 命令。

还会创建两个重要的文件夹，分别包含你的路由和岛屿：

- **`routes/`**：这个文件夹包含项目中的所有路由。此文件夹中每个文件的名称对应于该页面将被访问的路径。此文件夹中的代码永远不会直接发送到客户端。你将在下一节了解更多关于路由的工作原理。
- **`islands/`**：这个文件夹包含项目中所有交互式岛屿。此文件夹中每个文件的名称对应于该文件中定义的岛屿名称。此文件夹中的代码可以在客户端和服务端运行。你将在本章后面部分了解更多关于岛屿的内容。

最后还会创建一个 **`static/`** 文件夹，其中包含自动"原样"提供的静态文件。[了解更多关于静态文件的内容][static-files]。

[import-map]: https://docs.deno.com/runtime/fundamentals/modules
[task-runner]: https://docs.deno.com/runtime/reference/cli/task
[static-files]: ../concepts/static-files
