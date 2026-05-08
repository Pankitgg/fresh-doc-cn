---
description: "在 Deno Deploy 上部署 Fresh"
---

部署 Fresh 的推荐方式是使用 [Deno Deploy](https://deno.com/deploy)。它会自动为拉取请求创建分支预览、收集请求和 HTTP 指标，以及开箱即用地收集[跟踪数据](/docs/advanced/opentelemetry)。

## 设置

1. 登录 [Deno Deploy](https://deno.com/deploy)
2. 创建新应用
3. 链接你的 GitHub 仓库
4. 选择 "Fresh" 预设（如果它没有自动被检测到）

每次你合并到 `main` 分支时，都会创建一个新的生产部署。

## 构建步骤

当选择 Fresh 预设时，Deno Deploy 会在部署期间自动运行 `deno task build`。请确保你的 `deno.json` 中有正确的构建任务：

```json deno.json
{
  "tasks": {
    "build": "vite build",
    "start": "deno serve -A _fresh/server.js"
  }
}
```

## 环境变量

你可以在 Deno Deploy 仪表板的**设置 > 环境变量**部分设置环境变量。这些可以通过 `Deno.env.get()` 在运行时访问。

对于需要在[岛屿](/docs/concepts/islands)代码（客户端）中使用的变量，请使用 `FRESH_PUBLIC_` 前缀——请参阅[环境变量](/docs/advanced/environment-variables)。

## 自定义域名

自定义域名可以在 Deno Deploy 仪表板的**设置 > 域名**部分进行配置。Deno Deploy 会自动为你的域名配置 TLS 证书。

## 故障排除

如果你的部署无法启动：

1. 确保已运行 `deno task build`（检查是否选择了 Fresh 预设）
2. 验证你的入口文件是 `_fresh/server.js`，而不是 `main.ts`——Fresh 2 会在构建步骤期间生成服务器入口
3. 在 Deno Deploy 仪表板中查看部署日志以获取具体错误信息

有关更多详细信息，请参阅 [Deno Deploy 文档](https://docs.deno.com/deploy/manual/)。
