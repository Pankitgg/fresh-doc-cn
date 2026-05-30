---
description: |
  在 `<html>` 标签中设置 lang 属性。
---

当你使用 `deno run -A -r https://fresh.deno.dev` 初始化项目时，你会得到一个如下的 `main.ts`：

```ts main.ts
/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
```

如果你的站点是英文的，这是一个很好的开始，但假设你想更改语言，根据 `<html lang=asdf>` 标签。那么你需要这样做：

```ts main.ts
/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
  plugins: [twindPlugin(twindConfig)],
  render: (ctx, render) => {
    ctx.lang = "de";
    render();
  },
});
```

如果你好奇这是如何工作的，可以查看 `render.ts` 中的 `TemplateOptions`。
