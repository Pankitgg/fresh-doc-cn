---
description: |
  将 Fresh 应用程序部署到 Deno Deploy，几秒钟内即可在全球边缘可用，从而为全球用户提供出色的延迟。
---

作为入门指南的最后一步，我们将使用 [Deno Deploy][deno-deploy] 将演示站点部署到公共互联网。Deno Deploy 是由 Deno 公司构建的全球分布式边缘运行时，允许开发人员快速轻松地将 Web 应用程序部署到互联网。Deno Deploy 在全球各地都有边缘节点来服务流量。因此，全球用户都能获得出色的延迟，因为他们的流量由物理上离他们最近的服务器提供服务。

要部署到 Deno Deploy，我们将利用 GitHub 集成。要使用此功能，代码需要推送到 GitHub 上的存储库。完成此操作后，必须前往 [Deno Deploy 仪表板][deno-deploy-dashboard] 并创建一个新项目。

点击"New Project"按钮并选择包含 Fresh 项目的 GitHub 存储库。选择"Fresh"框架预设，然后点击"Advanced options"。在"Build command"字段中输入 `deno task build`。点击"Create project"。

项目现在将部署到 Deno Deploy。完成后，项目将在 https://$PROJECT_NAME.deno.dev 可用。

每次 GitHub 存储库中的代码更新时，它都将作为预览或生产部署进行部署。只有对默认/生产分支（通常是 `main`）的更改才会创建生产部署。

[deno-deploy]: https://deno.com/deploy
[deno-deploy-dashboard]: https://dash.deno.com/projects
