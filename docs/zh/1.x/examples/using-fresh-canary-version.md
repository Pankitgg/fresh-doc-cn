---
description: |
  对于最新版本不适合你需求的情况。
---

假设你有一个用例需要修改项目以使用 canary 版本的 Fresh。或者你想使用稍微不同的初始化脚本。本页面将为你提供指导。

## 在 `deno.json` 中使用 canary Fresh

### 最新 alpha 版本

使用 Fresh 2 canary 最简单的方法是使用更新命令：

```sh Terminal
deno run -A -r jsr:@fresh/update@2.0.0-alpha.35 .
```

这将自动更新你的 `deno.json` 以使用指定的 canary 版本。

### 特定提交

如果你需要特定的提交（用于测试特定的修复或功能）：

```diff deno.json
   "tasks": {
     "update": "deno run -A -r jsr:@fresh/update ."
   },
   "imports": {
-    "$fresh/": "jsr:@fresh/core@^2.0.0",
+    "$fresh/": "https://raw.githubusercontent.com/denoland/fresh/your-commit-hash/",
     "preact": "npm:preact@^10.26.9",
     "@preact/signals": "npm:@preact/signals@^2.2.0"
   }
```

将 `your-commit-hash` 替换为你所需的提交哈希。

### 分叉的 Fresh

用于测试你自己的分叉或 PR：

```diff deno.json
   "tasks": {
     "update": "deno run -A -r jsr:@fresh/update ."
   },
   "imports": {
-    "$fresh/": "https://deno.land/x/fresh@1.7.3/",
+    "$fresh/": "https://raw.githubusercontent.com/your-username/fresh/your-branch/",
     "preact": "https://esm.sh/preact@10.26.9",
     "preact/": "https://esm.sh/preact@10.22.0/",
   }
```

## 创建新项目

### 使用 JSR

```sh Terminal
deno run -A -r jsr:@fresh/init@2.0.0-alpha.35
```

### 从本地源

如果你正在开发 Fresh 本身：

```sh Terminal
deno run -A -r ./init/src/init.ts
```

### 推荐阅读

- [Fresh v2 博客](https://deno.com/blog/fresh-2)
- [迁移指南](../../migration-guide.md)
