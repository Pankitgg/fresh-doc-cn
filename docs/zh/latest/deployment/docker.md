---
description: "使用 Docker 部署 Fresh"
---

# Docker 部署

您可以将 Fresh 部署到任何可以运行 Docker 容器的平台。Docker 是一个容器化项目并在任何支持平台上可移植运行的工具。

将 Fresh 应用打包到 Docker 时，重要的是在容器中设置 `DENO_DEPLOYMENT_ID` [环境变量](/docs/advanced/environment-variables)。此变量需要设置为一个不透明的字符串 ID，表示当前运行的应用版本。这可以是 Git commit hash，或项目中所有文件的哈希值。对于 Fresh 的功能来说，当项目中的**任何**文件更改时，此 ID 必须更改至关重要——如果不更改，不正确的缓存**将会**导致项目无法正常运行。

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

> [信息]: `deno install --allow-scripts` 步骤是必需的，用于填充 `node_modules` 并运行 npm 包（例如 Tailwind CSS）所需的任何安装后脚本。这必须在 `deno task build` 之前进行。

要在 Git 仓库中构建 Docker 镜像：

```sh Terminal
$ docker build --build-arg GIT_REVISION=$(git rev-parse HEAD) -t my-fresh-app .
```

然后运行 Docker 容器：

```sh Terminal
$ docker run -t -i -p 80:8000 my-fresh-app
```

要部署到云提供商，请将其推送到容器注册表并遵循他们的文档。

- [Amazon Web Services](https://docs.aws.amazon.com/AmazonECS/latest/userguide/create-container-image.html#create-container-image-push-ecr)
- [Google Cloud](https://cloud.google.com/container-registry/docs/pushing-and-pulling)
