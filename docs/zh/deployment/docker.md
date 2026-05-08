---
description: "使用 Docker 部署 Fresh"
---

你可以将 Fresh 部署到任何可以运行 Docker 容器的平台。Docker 是一个用于容器化项目并可在任何支持的平台上便携运行它们的工具。

在为 Docker 打包 Fresh 应用时，重要的是在容器中设置 `DENO_DEPLOYMENT_ID` [环境变量](/docs/advanced/environment-variables)。这个变量需要设置为一个不透明的字符串 ID，用于表示当前正在运行的应用版本。这可以是 Git 提交哈希，或者项目所有文件的哈希值。对于 Fresh 的正常运行来说，当项目中的**任何**文件发生变化时，这个 ID 必须发生变化——如果没有，错误的缓存**将**导致项目无法正常工作。

以下是 Fresh 项目的示例 `Dockerfile`：

```dockerfile Dockerfile
FROM denoland/deno:latest

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno install --allow-scripts
RUN deno task build

EXPOSE 8000

CMD ["deno", "serve", "-A", "_fresh/server.js"]
```

> [info]：`deno install --allow-scripts` 步骤是必需的，用于填充 `node_modules` 并运行 npm 包所需的任何安装后脚本（例如 Tailwind CSS）。这必须在 `deno task build` 之前完成。

要在 Git 仓库中构建 Docker 镜像：

```sh Terminal
$ docker build --build-arg GIT_REVISION=$(git rev-parse HEAD) -t my-fresh-app .
```

然后运行你的 Docker 容器：

```sh Terminal
$ docker run -t -i -p 80:8000 my-fresh-app
```

要部署到云提供商，请将其推送到容器注册表并按照其文档操作。

- [亚马逊网络服务](https://docs.aws.amazon.com/AmazonECS/latest/userguide/create-container-image#create-container-image-push-ecr)
- [谷歌云](https://cloud.google.com/container-registry/docs/pushing-and-pulling)
