---
description: |
  如何在 Fresh 中使用环境变量，包括内联到 island 捆绑包中的公共变量。
---

Deno 中的环境变量通常通过 `Deno.env.get()` 或 `process.env.*` 调用读取，或者如果使用 `--env-file` 标志，则通过 `.env` 文件读取，请参阅
[如何在 Deno 中使用环境变量](https://docs.deno.com/runtime/reference/env_variables/)。

除此之外，Fresh 在 [islands](/docs/concepts/islands) 捆绑期间会自动内联所有名称以 `FRESH_PUBLIC_` 开头的环境变量。

> [info]: 此内联步骤在构建应用时发生 (`deno task build`)。Islands 内的环境变量不能在运行时读取。

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

此代码在捆绑时将转换为：

```tsx
export function MyIsland() {
  const value = "bar";
  return <h1>{value}</h1>;
}
```

这样您就可以在浏览器中使用特定的环境变量。

> [warn]: 要使内联工作，代码需要能够被我们的插件分析。这意味着并非所有在 Deno 中读取环境变量的形式都受支持，即使它是完全有效的 JavaScript 代码。
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