---
description: |
  Fresh 可以轻松将你的应用部署到 Deno Deploy 或其他平台。
---

Fresh 应用可以部署到各种平台。推荐的部署目标是 Deno Deploy，但 Fresh 也可以部署到任何可以运行 Deno 的环境。

## 部署到 Deno Deploy

部署到 Deno Deploy 的最简单方法是通过 GitHub 集成。将你的代码推送到 GitHub 仓库，然后在 Deno Deploy 仪表板中创建一个新项目。

1. 将你的代码推送到 GitHub
2. 前往 [Deno Deploy 仪表板](https://dash.deno.com)
3. 点击"New Project"
4. 选择你的 GitHub 仓库
5. 选择"Fresh"框架预设
6. 在"Build command"字段中输入 `deno task build`
7. 点击"Create project"

你的项目现在将部署到 Deno Deploy。每次你推送到你的仓库时，它将自动部署。

## 部署到其他平台

Fresh 也可以部署到任何可以运行 Deno 的平台。这包括：

- AWS
- Google Cloud
- Azure
- 任何 VPS 或专用服务器

要部署到其他平台，你需要：

1. 安装 Deno
2. 克隆你的仓库
3. 运行 `deno task build`
4. 运行 `deno task start`

## 环境变量

Fresh 支持环境变量。这些可以在部署时设置，或在本地开发时使用 `.env` 文件。

```env .env
DATABASE_URL=postgres://localhost/mydb
API_KEY=secret
```

环境变量可以通过 `Deno.env.get()` 访问。

```ts
const databaseUrl = Deno.env.get("DATABASE_URL");
```
