---
description: |
  新版本的 Fresh 会定期发布。本页解释如何更新你的项目。
---

# 更新

Fresh 由多个独立版本和发布的部分组成。

- Fresh (https://deno.land/x/fresh)
- Preact (https://esm.sh/preact)
- preact-render-to-string (https://esm.sh/preact-render-to-string)

一些插件也有自己的依赖项，可以独立更新。

- Twind (https://esm.sh/twind)（用于 twind 插件）

在大多数情况下，这些部分可以独立更新。某些版本的 Fresh 可能需要特定依赖项的最低版本。这在下面有记录。

| Fresh version | Preact            | preact-render-to-string | Deno      |
| ------------- | ----------------- | ----------------------- | --------- |
| 1.0.0-1.0.2   | >=10.8.1 <11.0.0  | >=5.2.0 <6.0.0          | >= 1.23.0 |
| 1.1.0-1.1.5   | >=10.8.1 <11.0.0  | >=5.2.0 <6.0.0          | >= 1.25.0 |
| 1.2.0         | >=10.15.0 <11.0.0 | >=6.1.0                 | >= 1.25.0 |

## 更新依赖

要更新你的依赖，你有两个选项：

- 运行 Fresh 更新器来更新你的项目依赖。
- 手动更新 `deno.json` 文件中的依赖版本。

### 自动更新器

自动更新器是一个命令行工具，会将你的项目的 `deno.json` 文件更新到 Fresh 及其依赖的最新版本。它还可能包含你的项目的代码修改，将你的代码更新到 Fresh 项目的最新推荐模式。

要运行自动更新器，从你的项目根目录运行以下命令：

```sh Terminal
$ deno run -A -r https://fresh.deno.dev/update
```

系统将提示你确认将对你的项目进行的更改。

### 手动更新

要手动更新项目的依赖，你可以编辑项目目录根部的 `deno.json` 文件。依赖版本编码在此文件的 URL 中。例如，以下是如何将项目从 Fresh 1.0.2 更新到 1.1.3，并将 Preact 更新到最新版本：

```diff deno.json
  {
    "imports": {
-     "$fresh/": "https://deno.land/x/fresh@1.0.2/",
+     "$fresh/": "https://deno.land/x/fresh@1.1.5/",

-     "preact": "https://esm.sh/preact@10.8.1",
-     "preact/": "https://esm.sh/preact@10.8.1/",
+     "preact": "https://esm.sh/preact@10.11.0",
+     "preact/": "https://esm.sh/preact@10.11.0/",

-     "preact-render-to-string": "https://esm.sh/*preact-render-to-string@5.2.0",
+     "preact-render-to-string": "https://esm.sh/*preact-render-to-string@6.1.0",

      "twind": "https://esm.sh/twind@0.16.17",
      "twind/": "https://esm.sh/twind@0.16.17/"
    }
  }
```

## 自动更新检查

Fresh 会定期检查是否有新的 Fresh 版本可用，如果它在 CI 之外运行。这每天发生一次，可以通过设置 `FRESH_NO_UPDATE_CHECK=true` 环境变量来禁用。

## 代码修改

代码修改是可以运行的小型脚本，以更新你的项目的代码以匹配 Fresh 项目的最新推荐模式。代码修改可以通过自动更新器运行。有时代码修改无法覆盖所有情况，因此你可能需要手动更新一些代码。本节解释当前可用的代码修改。

### 经典 JSX -> 自动 JSX

> 此代码修改仅在 Fresh 1.1.0 及以上版本中可用。

依赖于 `/** @jsx h */` 编译指示的经典 JSX 转换不再是 Fresh 项目中使用 JSX 的推荐方式。相反，从 1.1.0 版本开始，Fresh 项目应该使用自动 JSX 转换，不需要 JSX 编译指示或 preact 导入。

```diff routes/hello-world.tsx
- /** @jsx h */
- import { h } from "preact";

  export default function Page() {
    return <div>Hello world!</div>;
  }
```

此代码修改将更新你的 deno.json 文件以包含相关的编译器选项以启用自动 JSX 转换。然后它将遍历你的项目并删除任何 `/** @jsx h */` 编译指示和 `import { h } from "preact"` 语句。

### 经典 twind -> Twind 插件

> 此代码修改仅在 Fresh 1.1.0 及以上版本中可用。

Fresh 1.1.0 版本引入了一个新的插件，用于在 Fresh 中使用 twind。这个插件比之前可用的原始 twind 集成更容易使用。

此代码修改将更新你的项目以使用新的 twind 插件。它将更新你的 `main.ts` 文件以导入 twind 插件并将其添加到插件数组中。它还将更新你的文件以删除许多不必要的 `tw` 函数使用，并删除不必要的 twind 导入。虽然代码修改可以处理大多数情况，但你可能需要手动更新一些代码。此外，如果你使用自定义配置，你将需要手动更新你的 `twind.config.ts`。
