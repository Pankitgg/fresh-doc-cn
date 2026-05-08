---
description: |
  如何在 Fresh 中使用环境变量，包括内联到 island 包中的公共变量。
---

Deno 中的环境变量通常通过 `Deno.env.get()` 或 `process.env.*` 调用来读取，或者如果使用了 `--env-file` 标志，则通过 `.env` 文件读取，参见[Deno 中如何使用环境变量](https://docs.deno.com/runtime/reference/env_variables/)。

在此基础上，Fresh 在构建 [islands](/docs/concepts/islands) 时，会自动内联所有名称以 `FRESH_PUBLIC_ 开头的环境变量。

> [info]: 这个内联步骤发生在构建应用时（`deno task build`）。Island 内部的环境变量无法在运行时读取。

示例：

```sh Terminal
$ FRESH_PUBLIC_FOO=bar deno task dev
```

```tsx
export function MyIsland() {
  const value = Deno.env.get("FRESH_PUBLIC_FOO");
  return <h1>{value}</h1>;
}
```

这段代码在打包后将变成：

```tsx
export function MyIsland() {
  const value = "bar";
  return <h1>{value}</h1>;
}
```

这样你就可以在浏览器中使用特定的环境变量。

> [warn]: 为了使内联生效，代码需要能被我们的插件分析。这意味着不是所有在 Deno 中读取环境变量的形式都支持，即使它是完全有效的 JavaScript 代码。
>
> ```ts MyIsland.tsx
> // 正确
> Deno.env.get("FRESH_PUBLIC_FOO");
> process.env.FRESH_PUBLIC_FOO;
>
> // 错误
> const name = "FRESH_PUBLIC_FOO";
> Deno.env.get(name);
> process.env[name];
>
> // 错误
> const obj = Deno.env.toObject();
> obj.FRESH_PUBLIC_FOO;
> ```
