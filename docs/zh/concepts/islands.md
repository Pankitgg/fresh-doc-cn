---
description: |
  岛屿在 Fresh 中实现客户端交互功能。它们不仅在服务器端渲染，还会在客户端进行 hydration。
---

岛屿在 Fresh 中实现客户端交互功能，它们既在服务器端渲染，也在客户端渲染。

岛屿通过在 `islands/` 文件夹或 `routes/` 目录中的 `(_islands)` 文件夹内创建文件来定义。该文件的名称必须是岛屿的 PascalCase 或 kebab-case 名称。

```tsx islands/my-island.tsx
import { useSignal } from "@preact/signals";

export default function MyIsland() {
  const count = useSignal(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => (count.value += 1)}>+</button>
    </div>
  );
}
```

岛屿可以像常规 Preact 组件一样在任何地方使用。Fresh 会负责使其在客户端具有交互性。

```tsx main.tsx
import { App, staticFiles } from "fresh";
import MyIsland from "./islands/my-island.tsx";

const app = new App()
  .use(staticFiles())
  .get("/", (ctx) => ctx.render(<MyIsland />));
```

## 向岛屿传递 props

支持向岛屿传递 props，但前提是 props 必须是[可序列化的](/docs/advanced/serialization)。Fresh 可以序列化以下类型的值：

- 原始类型 `string`、`number`、`boolean`、`bigint`、`undefined` 和 `null`
- `Infinity`、`-Infinity`、`-0` 和 `NaN`
- `Uint8Array`
- `URL`
- `Date`
- `RegExp`
- `JSX` 元素
- 集合 `Map` 和 `Set`
- `Temporal` 对象（`Instant`、`ZonedDateTime`、`PlainDate`、`PlainTime`、`PlainDateTime`、`PlainYearMonth`、`PlainMonthDay`、`Duration`）
- 具有字符串键和可序列化值的普通对象
- 包含可序列化值的数组
- Preact [Signals](/docs/concepts/signals)（如果内部值可序列化）

支持循环引用。如果一个对象或信号被多次引用，它只会被序列化一次，并在反序列化时恢复引用。

> [warn]：不支持向岛屿传递函数。
>
> ```tsx routes/example.tsx
> export default function () {
>   // 错误
>   return <MyIsland onClick={() => console.log("hey")} />;
> }
> ```

### 传递 JSX

Fresh 的一个强大功能是可以通过 props 将服务器端渲染的 JSX 传递给岛屿。

```tsx routes/index.tsx
import { staticFiles } from "fresh";
import MyIsland from "../islands/my-island.tsx";

const app = new App()
  .use(staticFiles())
  .get("/", (ctx) => {
    return ctx.render(
      <MyIsland jsx={<h1>hello</h1>}>
        <p>This text is rendered on the server</p>
      </MyIsland>,
    );
  });
```

### 嵌套岛屿

岛屿也可以嵌套在其他岛屿中。在这种情况下，它们像普通的 Preact 组件一样工作，但如果存在任何 props，仍然会接收序列化的 props。

从本质上讲，Fresh 允许你以对应用程序最优的方式混合使用静态部分和交互式组件。我们会持续只向浏览器发送岛屿所需的 JavaScript 代码。

```tsx islands/other-island.tsx
export default (props: { foo: string }) => <>{props.foo}</>;
```

```tsx routes/index.tsx
import MyIsland from "../islands/my-island.tsx";
import OtherIsland from "../islands/other-island.tsx";

// Later...
<div>
  <MyIsland>
    <OtherIsland foo="this prop will be serialized" />
  </MyIsland>
  <p>Some more server rendered text</p>
</div>;
```

## 仅在客户端渲染岛屿

当使用仅限客户端的 API（如 `EventSource` 或 `navigator.getUserMedia`）时，组件会在服务器端渲染时出错。请使用 `fresh/runtime` 中的 `IS_BROWSER` 常量来保护仅限浏览器的代码。它在服务器端为 `false`，在浏览器中为 `true`：

```tsx islands/my-island.tsx
import { IS_BROWSER } from "fresh/runtime";

export function MyIsland() {
  // 在这里返回对你的岛屿有意义的所有可预渲染的 JSX
  if (!IS_BROWSER) return <div></div>;

  // 所有必须在浏览器中运行的代码都放在这里！
  // 例如：EventSource、navigator.getUserMedia 等
  return <div></div>;
}
```

## 使用自定义元素（Web Components）

[自定义元素](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)可以在 Fresh 中使用，但必须在客户端注册，因为 `customElements.define()` 是一个浏览器 API。

### 注册自定义元素

使用岛屿来注册和渲染自定义元素：

```tsx islands/MyElement.tsx
import { useEffect } from "preact/hooks";
import { IS_BROWSER } from "fresh/runtime";

export function MyElement() {
  useEffect(() => {
    if (customElements.get("my-greeting")) return;

    customElements.define(
      "my-greeting",
      class extends HTMLElement {
        connectedCallback() {
          const name = this.getAttribute("name") ?? "World";
          this.innerHTML = `<p>Hello, ${name}!</p>`;
        }
      },
    );
  }, []);

  if (!IS_BROWSER) {
    return <div></div>;
  }

  return <my-greeting name="Fresh" />;
}
```

### 使用第三方 Web 组件

第三方 Web 组件库的工作方式相同——在岛屿内导入和注册它们：

```tsx islands/ThirdPartyElement.tsx
import { useEffect } from "preact/hooks";
import { IS_BROWSER } from "fresh/runtime";

export function ShoelaceButton() {
  useEffect(() => {
    // 导入库的注册脚本
    import("@shoelace-style/shoelace/dist/components/button/button.js");
  }, []);

  if (!IS_BROWSER) {
    return <button>Click me</button>;
  }

  return <sl-button variant="primary">Click me</sl-button>;
}
```

> [tip]：从服务器端分支（`!IS_BROWSER`）返回纯 HTML 回退内容，以便在 JavaScript 加载之前页面仍可使用。
