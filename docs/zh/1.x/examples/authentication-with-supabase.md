---
description: |
  了解如何使用 Supabase 实现 PKCE 认证流程。
---

# 使用 Supabase 进行认证

Fresh 是快速构建轻量级、服务器端渲染 Web 应用程序的绝佳工具，而 Supabase 提供了一种简单的方法来为你的应用添加认证（和/或 PostgreSQL 数据库后端）。

在这个示例中，我们将创建一个使用 Supabase 实现 PKCE 认证流程的小型应用。

PKCE 认证流程专为无法存储客户端密钥的应用程序设计，例如原生移动应用或服务器端渲染的 Web 应用。你可以在[此处](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-pkce)了解 PKCE 的具体细节，或查看[其规范](https://datatracker.ietf.org/doc/html/rfc7636)。我们的示例基于你可以从 [Supabase 文档](https://supabase.com/docs/guides/auth/server-side/oauth-with-pkce-flow-for-ssr)中拼凑出的信息。

我们在这里构建的示例应用的目的是展示实现的基本构建块。因此，它的功能有限，并且有意忽略了诸如[密码重置](https://supabase.com/docs/guides/auth/server-side/email-based-auth-with-pkce-flow-for-ssr)、[适当的错误处理](https://fresh.deno.dev/docs/1.x/concepts/error-pages)以及验证输入表单数据等内容。你可以在[此处](https://github.com/morlinbrot/supa-fresh-pkce)找到完整代码，其中实现了缺失的功能。

## Supabase

首先，我们需要一个 Supabase 帐户，[可以在此处免费创建](https://supabase.com/)。通过 `.env` 文件向我们的应用提供凭据是一种便捷的方式（切勿将 `.env` 文件检入版本控制）。

```txt .env.example
SUPABASE_URL=https://<projectName>.supabase.co
SUPABASE_ANON_KEY=<api_key>
```

更新你的 `deno.json` 文件的 imports 部分以包含以下内容：

```json deno.json
"imports": {
  "supabase": "npm:@supabase/supabase-js@2",
  "supabase/ssr": "npm:@supabase/ssr",
}
```

从 Deno 1.38 开始，读取 .env 文件是内置的，可以使用 `--env` 标志启用。以下是运行我们应用的完整命令：

```shell
deno run --unstable-kv --allow-env --allow-read --allow-write --allow-run --allow-net --watch=static/,routes/ dev.ts
```

### `@supabase/ssr`

Supabase 提供了 `@supabase/ssr` 包，用于在 SSR 环境中与其 API 配合使用。它暴露了 `createServerClient` 方法，我们可以在服务器端使用它。像这样设置：

```ts lib/supabase.ts
import { deleteCookie, getCookies, setCookie } from "$std/http/cookie.ts";
import { assert } from "$std/assert/assert.ts";
import { type CookieOptions, createServerClient } from "supabase/ssr";

export function createSupabaseClient(
  req: Request,
  // 请记住这个可选参数，我们稍后会回到它。
  resHeaders = new Headers(),
) {
  const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
  const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");

  assert(
    SUPABASE_URL && SUPABASE_ANON_KEY,
    "SUPABASE URL 和 SUPABASE_ANON_KEY 环境变量必须设置。",
  );

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { flowType: "pkce" },
    cookies: {
      get(name: string) {
        return decodeURIComponent(getCookies(req.headers)[name]);
      },
      set(name: string, value: string, options: CookieOptions) {
        setCookie(resHeaders, {
          name,
          value: encodeURIComponent(value),
          ...options,
        });
      },
      remove(name: string, options: CookieOptions) {
        deleteCookie(resHeaders, name, options);
      },
    },
  });
}
```

注意：我们指定了 `flowType` 为 `pkce`，并且我们使用 [`encodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 来序列化并将会话对象存储为 cookie。

关键是，**我们需要为每个请求创建一个新的客户端实例！**

## 注册

现在，我们可以在端点中使用此客户端与 Supabase API 进行通信。以下是 `/api/sign-up` 处理程序：

```ts routes/api/sign-up.ts
import { FreshContext, Handlers } from "$fresh/server.ts";
import { createSupabaseClient } from "lib/supabase.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: FreshContext) {
    const form = await req.formData();
    const email = form.get("email");
    const password = form.get("password");

    const headers = new Headers();
    headers.set("location", "/sign-in"); // 成功后重定向到 /sign-in。

    const supabase = createSupabaseClient(req);
    const { error } = await supabase.auth.signUp({
      email: String(email),
      password: String(password),
    });

    if (error) throw error; // 查看完整应用以了解适当的错误处理。

    return new Response(null, { status: 303, headers });
  },
};
```

创建一个表单来调用我们的 API 端点，并在 `/sign-up` 处渲染它：

```tsx routes/sign-up.tsx
export default function SignUpPage() {
  return (
    <form action="/api/sign-up" method="post">
      <input autofocus type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 确认

要完成注册流程，我们需要一个 `/confirm` 路由来拦截成功的电子邮件确认：

```ts routes/api/confirm.ts
import { Handlers } from "$fresh/server.ts";
import { createSupabaseClient } from "lib/supabase.ts";

export const handler: Handlers = {
  async GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const token_hash = searchParams.get("token_hash");
    const type = searchParams.get("type") as EmailOtpType | null;
    const next = searchParams.get("next") ?? "/welcome";

    const redirectTo = new URL(req.url);
    redirectTo.pathname = next;

    if (token_hash && type) {
      const supabase = createSupabaseClient(req);
      const { error } = await supabase.auth.verifyOtp({ type, token_hash });
      if (error) throw error; // 查看完整应用以了解适当的错误处理。
    }

    redirectTo.searchParams.delete("next");
    return Response.redirect(redirectTo);
  },
};
```

查看 Supabase 文档了解[如何配置电子邮件模板和其他端点的详细信息](https://supabase.com/docs/guides/auth/server-side/email-based-auth-with-pkce-flow-for-ssr)，例如完整实现所需的 `/password-reset`。

## 登录

`/api/sign-in` 路由也非常直接：

```ts routes/api/sign-in.ts
import { Handlers } from "$fresh/server.ts";
import { createSupabaseClient } from "lib/supabase.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const email = form.get("email")!;
    const password = form.get("password")!;

    const headers = new Headers();
    headers.set("location", "/");

    const supabase = createSupabaseClient(req, headers);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error; // 查看完整应用以了解适当的错误处理。

    return new Response(null, { status: 303, headers });
  },
};
```

注意：我们这次传递了 `headers`。Supabase 客户端将会话设置为 cookie，我们将在接下来编写的中间件中获取它。

## 中间件

我们现在可以编写一个中间件来检查任何请求的认证状态，保护任何受保护的路由。你可以在[文档中](https://fresh.deno.dev/docs/1.x/concepts/middleware)了解中间件以及将它们放在哪里。

```ts routes/_middleware.ts
import { FreshContext } from "$fresh/server.ts";
import { createSupabaseClient } from "lib/supabase.ts";

export const handler = [
  async function authMiddleware(req: Request, ctx: FreshContext) {
    const url = new URL(req.url);
    const headers = new Headers();
    headers.set("location", "/");

    const supabase = createSupabaseClient(req, headers);
    // 注意：始终使用 `getUser` 而不是 `getSession`，因为这会调用 Supabase API 并重新验证令牌。
    const { error, data: { user } } = await supabase.auth.getUser();

    const isProtectedRoute = url.pathname.includes("secret");

    // 不要介意 401，因为它只意味着没有提供凭据。例如：没有会话 cookie。
    if (error && error.status !== 401) throw error; // 查看完整应用以了解适当的错误处理。

    if (isProtectedRoute && !user) {
      return new Response(null, { status: 303, headers });
    }

    ctx.state.user = user;

    return ctx.next();
  },
];
```

就是这样！这些是在 Fresh 应用中使用 Supabase 实现 PKCE 认证流程的构建块。同样，请在[此处](https://github.com/morlinbrot/supa-fresh-pkce)查看完整代码以获取该应用的完整功能版本。
