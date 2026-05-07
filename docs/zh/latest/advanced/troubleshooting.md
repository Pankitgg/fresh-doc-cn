---
description: |
  排查 Fresh 应用程序的问题。
---

# 故障排除

本页面包含一些提示，用于在应用程序出现问题时进行排查。

## 更新 Deno

Deno 中的 Node 兼容性层不断接收新的改进和 bug 修复。您遇到的问题很可能已经在最新版本中修复。要排除这种可能性，请安装最新版本的 Deno。

```sh Terminal
deno upgrade
```

## 安装或重新安装依赖

首次运行时，您可能会看到 Deno 抱怨缺少包。使用以下命令安装它们：

```sh Terminal
deno install --allow-scripts
```

如果稍后遇到依赖问题，并且怀疑 Deno 可能缓存了过时的包，您可以通过在上述命令中添加 `-r` 来强制重新安装。

## 更新 Fresh

解决大多数问题的最简单方法是确保您使用的是 Fresh 的[最新版本](https://jsr.io/@fresh/core/versions)。我们持续开发 Fresh，您遇到的问题很可能已经在最新版本中解决。

## 不要使用 esm.sh

Fresh 1.x 严重依赖 [esm.sh](https://esm.sh/) 来能够在 Fresh 中使用 npm 包。这在 Fresh 2 的早期 alpha 版本中继续了一段时间。随着迁移到 [`vite`](/docs/advanced/vite)，这不再必要，您应该直接从 npm 使用相关的 npm 包。

```diff deno.json
  {
    "imports": {
-     "cowsay": "https://esm.sh/cowsay"
+     "cowsay": "npm:cowsay@^1.6.0"
    }
  }
```

> [信息]: 不使用 `esm.sh` 解决了应用中重复 Preact 版本的许多问题和陷阱。如果您在浏览器中看到奇怪的 JavaScript 错误，这很可能是原因。

## 附加调试器

要将调试器附加到 Deno 的 vite，请运行此命令：

```sh Terminal
deno run -A --inspect npm:vite
# 或者
deno run -A --inspect-brk npm:vite
```

## 调试 vite 解析

要调试 vite 解析问题，请使用 `--debug` 标志运行 vite。这将向终端打印大量调试信息。

## 调试 vite 转换

要调试 vite 插件转换，请使用 [`vite-plugin-inspect`](https://github.com/antfu-collective/vite-plugin-inspect)。这为您提供一个 UI，显示每个文件的所有插件的所有转换。

## 我的部署无法启动

如果您的部署无法启动，请检查以下事项：

1. 确保您运行了 `deno task build`。
2. 确保您的入口指向生成的 `_fresh/server.js` 文件而不是 `main.ts`。后者在 Fresh 2 中不起作用。

像 `ISOLATE_INTERNAL_FAILURE` 这样的错误消息可能表明上述问题，但也可能由部署配置中的其他问题引起。

## VS Code 找不到包和/或类型

如果您在 VS Code 中看到像 `Cannot find module 'fresh/runtime'` 这样的错误，或者看到很多 TypeScript 错误，您很可能没有安装 Deno 扩展。您可以在 VS Code 的扩展浏览器中轻松找到它（标识符：`denoland.vscode-deno`）。

安装并启用后，当前安装的 Deno 版本应该出现在底部状态栏中。如果这没有自动发生，您可以通过命令面板（macOS 上为 Cmd+Shift+P，Windows/Linux 上为 Ctrl+Shift+P）启用 Deno 扩展并运行 `Deno: Enable`。

有关详细说明，请参阅官方的 [Deno VS Code 文档](https://docs.deno.com/runtime/reference/vscode/)。
