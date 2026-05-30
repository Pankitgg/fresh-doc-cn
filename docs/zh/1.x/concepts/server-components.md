---
description: |
  Fresh 的架构默认设计为利用服务器组件。
---

# 服务器组件

如果你已经了解了 Fresh 的[架构](/docs/1.x/concepts/architecture)，那么你就知道它是基于岛屿架构模式的。另一方面，这意味着其他所有内容默认都是服务器组件。当你[创建路由](/docs/1.x/getting-started/create-a-route)时，使用的所有组件都在服务器上渲染。除非你特别包含 `/islands/` 文件夹中的内容，否则不会向客户端发送任何 JavaScript。

在内部，Fresh 的渲染大量利用了 [preact-render-to-string](https://github.com/preactjs/preact-render-to-string)。这正是 Preact 的[服务器端渲染](https://preactjs.com/guide/v10/server-side-rendering/)文章中提到的库。
