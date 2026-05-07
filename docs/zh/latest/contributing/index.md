---
description: |
  为 Fresh 做出贡献的指南和资源。
---

# 贡献

Fresh 组织为一个包含多个包的单体仓库：

- **`packages/fresh/`** - 核心 Fresh 框架 (`@fresh/core`)
- **`packages/plugin-vite/`** - Vite 集成插件 (`@fresh/plugin-vite`)
- **`packages/plugin-tailwindcss/`** - Tailwind CSS v4 插件
- **`packages/plugin-tailwindcss-v3/`** - Tailwind CSS v3 插件
- **`packages/init/`** - 项目脚手架工具
- **`packages/update/`** - Fresh 更新工具
- **`www/`** - 文档网站 (fresh.deno.dev)

## 入门

前提条件：[Deno](https://deno.com/)（最新版本）和 Git。

```sh Terminal
git clone https://github.com/denoland/fresh.git
cd fresh
deno task ok
```

`deno task ok` 运行格式化、lint、类型检查和完整测试套件。在提交任何 pull request 之前运行它。

仓库使用 Deno
[工作区](https://docs.deno.com/runtime/fundamentals/workspaces/)，因此 `packages/` 中的所有包都可以使用它们的发布名称自动相互访问（`@fresh/core`、`@fresh/plugin-vite` 等）。

## 开发

`www/` 目录和 Vite 插件演示都使用本地 Fresh 包，使其成为很好的集成测试：

```sh Terminal
deno task www           # 文档站点开发服务器
deno task build-www     # 文档站点生产构建

deno task demo          # vite 演示开发服务器
deno task demo:build    # vite 演示生产构建
deno task demo:start    # 服务 vite 演示生产构建
```

### 在外部项目中测试

要在单独的项目中使用您的本地 Fresh 检出，请在项目的 `deno.json` 中添加
[`links`](https://docs.deno.com/runtime/fundamentals/configuration/#links)：

```json deno.json
{
  "imports": {
    "@fresh/core": "jsr:@fresh/core@^2.0.0",
    "@fresh/plugin-vite": "jsr:@fresh/plugin-vite@^1.0.0"
  },
  "links": [
    "../path/to/fresh/packages/fresh",
    "../path/to/fresh/packages/plugin-vite"
  ]
}
```

这会用您的本地版本覆盖 JSR 包。更改会立即反映，无需重新构建。

## 测试

```sh Terminal
# 所有测试（并行）
deno task test

# 特定测试文件
deno test -A packages/fresh/src/app_test.ts

# 按测试名称过滤
deno test -A --filter "test name pattern"

# 有意输出更改后更新快照
deno test -A --update-snapshots path/to/test.ts
```

测试使用 `@std/expect` 进行断言，遵循 `*_test.ts` 命名约定，并需要 `-A` 标志。快照测试存储在 `__snapshots__/` 目录中。

一些测试可能在本地失败但在 CI 中通过（`Could not find server address`、`Text file busy (os error 26)`）——这些可以安全忽略。

## Pull Requests

- 在提交前运行 `deno task ok` 以尽早捕获格式化、lint 和类型错误
- 保持 PR 集中——每个 PR 一个功能或修复
- 为任何行为更改添加或更新测试
- 遵循现有代码风格——仓库使用 `deno fmt` 进行格式化和 `deno lint` 进行 lint