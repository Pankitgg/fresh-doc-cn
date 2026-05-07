---
description: "创建应用的生产构建"
---

# 部署

将应用部署到生产环境时，我们可以运行构建步骤来优化资产以供浏览器使用。首先，确保安装了依赖项：

```sh Terminal
deno install --allow-scripts
```

然后运行构建：

```sh Terminal
deno task build
```

> [信息]: 这在幕后运行 [vite](/docs/advanced/vite) 构建。如果您正在从 Fresh 1.x 迁移并且仍然有 `dev.ts` 文件，请参见 [迁移指南](/docs/migration-guide) 以更新您的任务。

完成后，它将在项目目录中创建一个 `_fresh` 文件夹，其中包含优化的资产。

> [信息]: `_fresh` 文件夹不应提交到 git。通过 `.gitignore` 排除它。
>
> ```gitignore .gitignore
> # 忽略 fresh 构建目录
> _fresh/
> ```

## 运行生产构建

要在生产模式下运行 Fresh，请运行 `start` 任务：

```sh Terminal
deno task start
```

这会运行 `deno serve -A _fresh/server.js`，直接提供构建的资产。Fresh 将自动拾取 `_fresh` 目录中的优化资产。
