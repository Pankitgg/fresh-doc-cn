---
description: |
  你可以通过创建应用处理程序为你的 Fresh 项目编写 HTTP 测试。
---

你可以通过 [`createHandler()`](https://deno.land/x/fresh/server.ts?doc=&s=createHandler) 创建应用处理程序来为你的 Fresh 项目编写测试。

## 1. 创建你的路由

```tsx routes/index.tsx
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();

    // 处理一些事情

    return new Response(null, {
      status: 303,
      headers: { location: "/" },
    });
  },
};

export default function HomePage() {
  return <div>Hello Deno!</div>;
}
```

```tsx routes/foo.tsx
export default function FooPage() {
  return <div>Hello Foo!</div>;
}
```

## 2. 编写你的测试

```ts tests/main_test.ts
import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import config from "../fresh.config.ts";
import { assert, assertEquals } from "$std/testing/asserts.ts";

const CONN_INFO: ServeHandlerInfo = {
  remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" },
};

Deno.test("HTTP 断言测试", async (t) => {
  const handler = await createHandler(manifest, config);

  await t.step("#1 GET /", async () => {
    const resp = await handler(new Request("http://127.0.0.1/"), CONN_INFO);
    assertEquals(resp.status, 200);
  });

  await t.step("#2 POST /", async () => {
    const formData = new FormData();
    formData.append("text", "Deno!");
    const req = new Request("http://127.0.0.1/", {
      method: "POST",
      body: formData,
    });
    const resp = await handler(req, CONN_INFO);
    assertEquals(resp.status, 303);
  });

  await t.step("#3 GET /foo", async () => {
    const resp = await handler(new Request("http://127.0.0.1/foo"), CONN_INFO);
    const text = await resp.text();
    assert(text.includes("<div>Hello Foo!</div>"));
  });
});
```

## 3. 运行测试

```sh Terminal
$ deno test --allow-read --allow-env --allow-net
running 1 test from ./tests/main_test.ts
HTTP 断言测试 ...
  #1 GET / ... ok (31ms)
  #2 POST / ... ok (35ms)
  #3 GET /foo ... ok (12ms)
HTTP 断言测试 ... ok (118ms)

ok | 1 passed (3 steps) | 0 failed (236ms)
```

## createHandler 详解

此函数的类型如下：

```ts fresh 🍋
export async function createHandler(
  manifest: Manifest,
  config: FreshConfig = {},
): Promise<
  (req: Request, connInfo?: ServeHandlerInfo) => Promise<Response>
```

当你使用它时，你很可能会从你的项目中导入清单。当然你也可以导入配置（`fresh.config.ts`），但你也可以自由提供你自己的选项包。[`FreshConfig`](https://deno.land/x/fresh/server.ts?s=FreshConfig) 声明如下：

```ts fresh 🍋
export interface FreshConfig {
  build?: {
    outDir?: string;
    target?: string | string[];
  };
  render?: RenderFunction;
  plugins?: Plugin[];
  staticDir?: string;
  router?: RouterOptions;
  server?: Partial<Deno.ServeTlsOptions>;
}
```

有关这些如何工作的更多信息，请参阅有关[服务器配置](/docs/1.x/concepts/server-configuration)的页面。
