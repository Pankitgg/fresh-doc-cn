---
description: |
  更改源目录以有效管理你的项目。
---

# 更改源目录

当你使用 `deno run -A -r https://fresh.deno.dev` 初始化项目时，你将得到类似以下的项目结构：

```txt Project Structure
<project root>
├── README.md
├── components
│   └── Button.tsx
├── deno.json
├── dev.ts
├── fresh.gen.ts
├── islands
│   └── Counter.tsx
├── main.ts
├── routes
│   ├── greet
│   │   ├── [name].tsx
│   ├── api
│   │   └── joke.ts
│   ├── _404.tsx
│   └── index.tsx
└── static
    ├── favicon.ico
    └── logo.svg
```

## 使用 `src` 目录

如果你想要你的代码存放在 `src` 目录（或你选择的任何其他目录）中，那么你需要执行以下操作：

1. 将所有文件移动到 `src` 目录，除了 `deno.json` 和 `README.md`。
2. 修改 `deno.json` 中的 `start` 任务以指向新目录。

以下是 `deno.json` 的差异：

```diff deno.json
 {
   "lock": false,
   "tasks": {
-    "start": "deno run -A --watch=static/,routes/ dev.ts"
+    "start": "deno run -A --watch=src/static/,src/routes/ src/dev.ts"
   },
   "imports": {
     "$fresh/": "file:///Users/reed/code/fresh/",
```

生成的文件结构如下所示：

```txt Project Structure
<project root>
├── README.md
├── deno.json
└── src
    ├── components
    │   └── Button.tsx
    ├── dev.ts
    ├── fresh.gen.ts
    ├── islands
    │   └── Counter.tsx
    ├── main.ts
    ├── routes
    │   ├── greet
    │   │   ├── [name].tsx
    │   ├── api
    │   │   └── joke.ts
    │   ├── _404.tsx
    │   └── index.tsx
    └── static
        ├── favicon.ico
        └── logo.svg
```

成功了！你的代码现在存放在其他位置。
