---
title: 为 Deno Fresh 安装 daisyUI
desc: 如何在 Deno Fresh 项目中安装 Tailwind CSS 和 daisyUI
---

[daisyUI](https://daisyui.com/) 是一个用于
[Tailwind CSS](https://tailwindcss.com/) 的组件库，提供用于常见 UI 组件（如按钮、卡片和模态框）的语义化类名。它使构建漂亮的界面更快，同时保持完整的 Tailwind CSS 兼容性。

## 安装

要开始使用 daisyUI，请确保您的 Fresh 项目中已启用 Tailwind CSS，然后安装 daisyUI 并更新您的配置。

1. 运行 `deno i -D npm:daisyui@latest` 来安装 daisyUI
2. 在 `./assets/styles.css` 中添加 daisyUI 配置：

   ```diff assets/styles.css
     @import "tailwindcss";
   + @plugin "daisyui";
   ```

现在您可以使用 daisyUI 了。

## 使用 daisyUI 组件

在 `components` 目录中创建一个按钮组件，参考 daisyUI 的样式类。

```tsx components/Button.tsx
import type { ComponentChildren } from "preact";

export interface ButtonProps {
  id?: string;
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="btn btn-dash btn-primary"
      {...props}
    />
  );
}
```

### 显示效果

<!-- ![DaisyUI Showcase](/docs/fresh-daisyui-showcase.jpg) -->
**[图片待补充]**: DaisyUI 展示效果

### daisyUI 类名参考

有关更多组件和用法，请参考
[daisyUI 官方文档](https://daisyui.com/)