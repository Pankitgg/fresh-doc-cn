---
description: "创建应用的生产构建"
---

将应用部署到生产环境时，我们可以运行一个构建步骤来优化资源以供浏览器使用。首先，确保依赖项已安装：

```sh Terminal
deno install --allow-scripts
```

然后运行构建：

```sh Terminal
deno task build
```

> [info]：这会在后台运行 [vite](/docs/advanced/vite) 构建。如果你是从 Fresh 1.x 迁移而来，并且仍然有 `dev.ts` 文件，请参阅[迁移指南](/docs/migration-guide) 来更新你的任务。

完成后，它会在项目目录中创建一个 `_fresh` 文件夹，其中包含优化后的资源。

> [info]：不应将 `_fresh` 文件夹提交到 git。通过 `.gitignore` 将其排除。
>
> ```gitignore .gitignore
> # 忽略 fresh 构建目录
> _fresh/
> ```

## 运行生产构建

要以生产模式运行 Fresh，请运行 `start` 任务：

```sh Terminal
deno task start
```

这将运行 `deno serve -A _fresh/server.js`，直接服务构建后的资源。Fresh 会自动拾取 `_fresh` 目录中的优化资源。
