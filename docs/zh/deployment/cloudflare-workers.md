---
description: "在 Cloudflare Workers 上部署 Fresh"
---

按照以下说明将 Fresh 部署到 Cloudflare Workers：

1. 运行 `deno install --allow-scripts npm:@cloudflare/vite-plugin npm:wrangler`
2. 在你的 [vite](/docs/advanced/vite) 配置文件中添加 cloudflare 插件：

```diff vite.config.ts
  import { defineConfig } from "vite";
  import { fresh } from "@fresh/plugin-vite";
+ import { cloudflare } from "@cloudflare/vite-plugin";

  export default defineConfig({
    plugins: [
      fresh(),
+     cloudflare(),
    ],
  });
```

3. 创建一个 `server.js` 文件作为 cloudflare worker 入口文件：

```js
import server from "./_fresh/server.js";

export default {
  fetch: server.fetch,
};
```

4. 按照 cloudflare vite 插件提供的进一步说明操作。

有关更多信息，请查看 [Cloudflare 文档](https://developers.cloudflare.com/workers/vite-plugin/)。

> [info]：请确保在 `wrangler.jsonc` 文件中设置了正确的入口点。它应该指向 `"main": "./server.js"`。
