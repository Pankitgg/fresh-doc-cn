---
description: "使用 deno compile 生成自包含的可执行文件。"
---

您可以使用
[`deno compile` 命令](https://docs.deno.com/runtime/reference/cli/compile/) 从您的应用创建一个自包含的可执行文件。
它将包含所有资源和依赖项。这个可执行文件可以在任何平台上运行，无需安装 Deno。

## 构建可执行文件

```sh Terminal
# 先构建您的应用
deno task build
# 生成自包含的可执行文件
deno compile --output my-app --include _fresh -A _fresh/compiled-entry.js
```

`--include _fresh` 标志确保所有构建的资源（JavaScript 捆绑包、CSS、静态文件）都嵌入到二进制文件中。

## 配置

编译后的入口文件开箱即用地支持两个环境变量：

- `PORT` 用于设置端口号 (`PORT=4000 ./my-app`)
- `HOSTNAME` 用于设置主机名 (`HOSTNAME=0.0.0.0 ./my-app`)

## 交叉编译

您可以使用 `--target` 标志为不同平台编译：

```sh Terminal
deno compile --target x86_64-unknown-linux-gnu --output my-app --include _fresh -A _fresh/compiled-entry.js
```

有关支持的目标的完整列表，请参阅
[`deno compile` 文档](https://docs.deno.com/runtime/reference/cli/compile/)。

## 限制

- 可执行文件大小包含 Deno 运行时（约 50-130 MB，取决于平台）
- 无法静态分析的动态导入可能不会被包含
- 具有平台特定二进制文件的原生 npm 包需要与目标平台匹配