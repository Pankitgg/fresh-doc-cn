---
description: "在 Deno Deploy 上部署 Fresh"
---

# Deno Deploy 部署

部署 Fresh 的推荐方式是使用 [Deno Deploy](https://deno.com/deploy)。它会自动为拉取请求创建分支预览，收集请求和 HTTP 指标，以及开箱即用地为您收集 [trace](/docs/advanced/opentelemetry)。

## 设置

1. 登录 [Deno Deploy](https://deno.com/deploy)
2. 创建一个新应用
3. 链接您的 GitHub 仓库
4. 如果没有自动检测到，请选择 "Fresh" 预设

每次您合并到 `main` 分支时，都会创建一个新的生产部署。

## 构建步骤

当选择 Fresh 预设时，Deno Deploy 会在部署期间自动运行 `deno task build`。确保您的 `deno.json` 有正确的构建任务：

```json deno.json
{
  "tasks": {
    "build": "vite build",
    "start": "deno serve -A _fresh/server.js"
  }
}
```

## 环境变量

您可以在 Deno Deploy 仪表板中项目的 **Settings > Environment Variables** 部分设置环境变量。这些变量在运行时可通过 `Deno.env.get()` 访问。

对于需要在 [岛屿](/docs/concepts/islands) 代码（客户端）中可用的变量，使用 `FRESH_PUBLIC_` 前缀 - 参见 [环境变量](/docs/advanced/environment-variables)。

## 自定义域名

自定义域名可以在 Deno Deploy 仪表板中项目的 **Settings > Domains** 部分配置。Deno Deploy 会自动为您的域名提供 TLS 证书。

## 故障排除

如果您的部署无法启动：

1. 确保已运行 `deno task build`（检查是否选择了 Fresh 预设）
2. 验证您的入口点是 `_fresh/server.js`，而不是 `main.ts` - Fresh 2 在构建步骤中生成服务器入口
3. 在 Deno Deploy 仪表板中检查部署日志以获取特定错误

有关更多详细信息，请参阅 [Deno Deploy 文档](https://docs.deno.com/deploy/manual/)。
