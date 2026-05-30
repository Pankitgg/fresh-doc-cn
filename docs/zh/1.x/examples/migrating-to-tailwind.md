---
description: |
  从 twind 迁移到 Tailwind CSS
---

# 迁移到 Tailwind CSS

从 1.6 版本开始，Fresh 开箱即用地提供了正式的 Tailwind CSS 插件。当你创建一个新的 Fresh 项目时，勾选 Tailwind CSS 选项现在将安装 Tailwind CSS 插件，而不是像之前那样安装 twind。

## 迁移前的要求

Tailwind 插件需要 Fresh 的[预构建](/docs/1.x/concepts/ahead-of-time-builds)功能已设置好，否则将无法工作。在继续本指南之前，请确保将你的项目切换到预构建模式。如果你的项目已经配置为使用预构建，那么你可以继续。

## 迁移到 Tailwind CSS

1. 在你的项目文件夹中创建 `<project>/tailwind.config.ts` 文件：

```ts tailwind.config.ts
import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
```

2. 在你的静态目录中创建 CSS 文件 `<project>/static/styles.css`：

```css static/styles.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. 在你的 HTML 中添加创建的样式表，在 `<project>/routes/_app.tsx` 中：

```diff routes/_app.tsx
  import { AppProps } from "$fresh/server.ts";
  
  export default function App({ Component }: AppProps) {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My Fresh Project</title>
+         <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          <Component />
      </body>
      </html>
    );
  }
```

4. 将 `twind` 插件替换为 `tailwind`

```diff fresh.config.ts
  import { defineConfig } from "$fresh/server.ts";
- import twind from "$fresh/plugins/twind.ts";
+ import tailwind from "$fresh/plugins/tailwind.ts";

  export default defineConfig({
-   plugins: [twind()],
+   plugins: [tailwind()],
  });
```

5. 更新你的 `deno.json` 文件并添加以下 `tailwindcss` 导入。为了让 [vscode Tailwind CSS 扩展](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 工作，我们还需要设置 `"nodeModulesDir": "manual"`。这将在你运行 `deno install` 时在你的项目文件夹中创建 `node_modules` 目录。

```diff deno.json
  {
+   "nodeModulesDir": "manual",
    "imports": {
      "$fresh/": "https://deno.land/x/fresh@1.5.2/",
      "preact": "https://esm.sh/preact@10.22.0",
      "preact/": "https://esm.sh/preact@10.22.0/",
-     "twind": "https://esm.sh/twind@0.16.19",
-     "twind/": "https://esm.sh/twind@0.16.19/"
+     "tailwindcss": "npm:tailwindcss@3.4.1"
    }
  }
```

6. 将 `node_modules` 添加到你的 `.gitignore`，或者如果项目根目录中不存在该文件，则创建一个。

```diff .gitignore
+ node_modules/
```

就是这样！现在你可以在项目中使用 Tailwind CSS 了。

> [info]: 如果你是 vscode 用户，请务必安装[官方 Tailwind CSS 扩展](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 以获得完整的智能感知支持。为了让它工作，你还需要在 `deno.json` 中设置 `"nodeModulesDir": "manual"`。

> [warn]: Tailwind CSS 不支持 twind 的分组语法：`text(lg uppercase gray-100)`。这些需要重写为它们的展开值，如 `text-lg uppercase text-gray-100`。选择 `data-*` 或 `aria-*` 属性在 Tailwind CSS 中也有所不同。
>
> | Twind                       | Tailwind CSS                |
> | --------------------------- | --------------------------- |
> | `[data-current]:bg-red-600` | `data-[current]:bg-red-300` |
> | `[aria-current]:bg-red-600` | `aria-[current]:bg-red-300` |

> [warn]: Tailwind CSS 不允许你动态生成和应用 CSS 类，这意味着你需要明确指定要应用的类。换句话说，要使用动态类，你需要确保它们存在于最终的 CSS 文件中。
>
> | Twind                               | Tailwind CSS                                                   |
> | ----------------------------------- | -------------------------------------------------------------- |
> | ``<a class={`link-${color}`}></a>`` | ``<a class={color === 'blue' ?`link-blue`:`link-green`}></a>`` |

## 常见问题 (FAQ)

### twind 和 Tailwind CSS 之间有什么区别？

Twind 是一个项目，旨在使你能够在单个脚本中使用 Tailwind 类似的功能，该脚本也可以在浏览器中使用。两者之间的关键区别在于 twind 在每个请求上动态生成 CSS，并被发送到浏览器以使 Fresh 中岛屿新生成的类能够工作。总的来说，这不是构建高性能站点的理想设置。

相比之下，Tailwind CSS 提前生成结果 CSS 文件，这只在每次部署时发生一次。不需要运行时组件，这使得你的 Fresh 项目对请求的响应更快。

在 Tailwind CSS v2 时代，twind 推动了很多很棒的想法，比如允许对 `opacity-82` 这样的类使用任何数字，但它没有跟上 Tailwind CSS 的最新发展。事实上，twind 已经有一年多没有维护了。我们也从未能够让 twind 支持自动补全。

### 为什么 Fresh 使用 twind 而不是 Tailwind CSS？

当 Fresh 最初构建时，Deno 不支持 npm 模块和 node API。这意味着 Tailwind CSS 无法与 Deno 一起工作。现在，许多年过去了，Deno 已经支持这两者，我们可以和其他人一样使用相同的 npm `tailwindcss` 模块。
