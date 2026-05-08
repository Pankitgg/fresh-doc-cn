---
description: |
  排查 Fresh 应用程序问题。
---

本页面包含一些技巧，帮助你在事情不如预期工作时排查你的应用。

## 更新 Deno

Deno 中的 Node 兼容性层在每个 Deno 版本中都在不断接收新的改进和错误修复。你遇到的问题很可能已经被修复了。要排除这种可能性，请安装最新的 Deno 版本。

```sh Terminal
deno upgrade
```

## 安装或重新安装依赖

首次运行时，你可能会看到 Deno 抱怨缺少包。用以下命令安装它们：

```sh Terminal
deno install --allow-scripts
```

如果你之后遇到依赖问题，并怀疑 Deno 可能在缓存过时的包，可以通过在上述命令中添加 `-r` 来强制重新安装。

## 更新 Fresh

解决大多数问题的最简单方法是确保你使用的是最新版本的 [Fresh](https://jsr.io/@fresh/core/versions)。我们持续改进 Fresh，你遇到的问题很有可能已经在最新版本中解决了。

## 不要使用 esm.sh

Fresh 1.x 严重依赖 [esm.sh](https://esm.sh/) 以便能够将 npm 包与 Fresh 一起使用。这种情况在 Fresh 2 的早期 alpha 版本中继续存在。随着迁移到 [`vite`](/docs/advanced/vite)，这不再是必要的，你应该直接使用 npm 中的相关 npm 包。

```diff deno.json
  {
    "imports": {
-     "cowsay": "https://esm.sh/cowsay"
+     "cowsay": "npm:cowsay@^1.6.0"
    }
  }
```

> [info]: 不使用 `esm.sh` 可以解决你的应用中重复 Preact 版本的许多问题和隐患。如果你看到应用中浏览器中出现奇怪的 JavaScript 错误，这很可能是原因。

## 连接调试器

要连接调试器到 Deno 上的 Vite，请运行以下命令：

```sh Terminal
deno run -A --inspect npm:vite
# 或者
deno run -A --inspect-brk npm:vite
```

## 调试 Vite 解析

要调试 Vite 解析问题，请使用 `--debug` 标志运行 Vite。这会在终端打印大量调试信息。

## 调试 Vite 转换

要调试 Vite 插件转换，请使用 [`vite-plugin-inspect`](https://github.com/antfu-collective/vite-plugin-inspect)。这为你提供了一个 UI，显示每个文件所有插件的所有转换。

## 我的部署无法启动

如果你的部署无法启动，请检查以下事项：

1. 确保你运行了 `deno task build`。
2. 确保你的入口点指向生成的 `_fresh/server.js` 文件，而不是 `main.ts`。后者在 Fresh 2 中无法工作。

类似 `ISOLATE_INTERNAL_FAILURE` 的错误消息可能表示上述问题，但也可能是由部署配置中的其他问题引起的。

## VS Code 无法找到包和/或类型

如果你在 VS Code 中看到类似 `Cannot find module 'fresh/runtime'` 的错误，或者看到大量 TypeScript 错误，你可能没有安装 Deno 扩展。你可以在 VS Code 的扩展浏览器中轻松找到它（标识符：`denoland.vscode-deno`）。

安装并启用后，当前安装的 Deno 版本应该出现在底部状态栏中。如果这没有自动发生，你可以通过命令面板（macOS 上 Cmd+Shift+P，Windows/Linux 上 Ctrl+Shift+P）启用 Deno 扩展，并运行 `Deno: Enable`。

有关详细说明，请参阅官方 [Deno VS Code 文档](https://docs.deno.com/runtime/reference/vscode/)。
