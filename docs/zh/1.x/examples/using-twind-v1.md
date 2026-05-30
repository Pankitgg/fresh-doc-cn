---
description: |
  通过一些调整，可以使用 twind v1
---

当你使用 `deno run -A -r https://fresh.deno.dev` 初始化项目时，你会得到一个如下的 `main.ts`：

```ts main.ts
/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

await start(manifest, config);
```

Fresh 配置如下：

```ts fresh.config.ts
import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

export default defineConfig({
  plugins: [twindPlugin(twindConfig)],
});
```

让我们升级到 v1：

```diff fresh.config.ts
 import { defineConfig } from "$fresh/server.ts";
-import twindPlugin from "$fresh/plugins/twind.ts";
+import twindPlugin from "$fresh/plugins/twindv1.ts";
 import twindConfig from "./twind.config.ts";

 export default defineConfig({
```

twind 配置对象在 v1 中发生了重大变化，因此我们也必须更改 `twind.config.ts`。一个好的基础如下所示（只需用这个替换任何存在的内容）：

```ts twind.config.ts
import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset, presetAutoprefix()],
  }),
  selfURL: import.meta.url,
};
```

（注意：`as Preset` 转换是修复 twind 类型问题所必需的。）

要查看有哪些其他预设可用，你可以前往 [twind 文档](https://twind.style/presets)。
