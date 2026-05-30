---
description: |
  岛屿在 Fresh 中启用客户端交互性。它们在服务端渲染后在客户端水合。
---

岛屿在 Fresh 中启用客户端交互性。岛屿是隔离的 Preact 组件，在服务端渲染然后在客户端水合。这与 Fresh 中的所有其他组件不同，因为它们通常只在服务端渲染。

岛屿通过在 Fresh 项目的 `islands/` 文件夹中创建文件来定义。此文件的名称必须是岛屿的帕斯卡命名或短横线命名。

```tsx islands/my-island.tsx
import { useSignal } from "@preact/signals";

export default function MyIsland() {
  const count = useSignal(0);

  return (
    <div>
      计数器当前为 {count}。{" "}
      <button onClick={() => (count.value += 1)}>+</button>
    </div>
  );
}
```

岛屿可以像常规 Preact 组件一样在页面中使用。Fresh 将自动处理在客户端重新水合岛屿。

```tsx route/index.tsx
import MyIsland from "../islands/my-island.tsx";

export default function Home() {
  return <MyIsland />;
}
```

## 向岛屿传递 JSX

岛屿支持通过 `children` 属性传递 JSX 元素。

```tsx islands/my-island.tsx
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function MyIsland({ children }: Props) {
  const count = useSignal(0);

  return (
    <div>
      计数器当前为 {count}。{" "}
      <button onClick={() => (count.value += 1)}>+</button>
      {children}
    </div>
  );
}
```

这允许你将服务端渲染的静态内容传递给浏览器中的岛屿。

```tsx routes/index.tsx
import MyIsland from "../islands/my-island.tsx";

export default function Home() {
  return (
    <MyIsland>
      <p>这段文本在服务端渲染</p>
    </MyIsland>
  );
}
```

你还可以在 `components/` 目录中创建共享组件，这些组件可以在静态内容和交互式岛屿中使用。当这些组件在岛屿中使用时，可以添加交互性，例如 `onClick` 处理程序（在岛屿外的按钮上使用 `onClick` 处理程序不会触发）。

```tsx islands/my-island.tsx
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import Card from "../components/Card.tsx";
import Button from "../components/Button.tsx";

interface Props {
  children: ComponentChildren;
}

export default function MyIsland({ children }: Props) {
  const count = useSignal(0);

  return (
    <Card>
      计数器当前为 {count}。{" "}
      <Button onClick={() => (count.value += 1)}>+</Button>
      {children}
    </Card>
  );
}
```

## 向岛屿传递其他属性

岛屿支持传递属性，但前提是属性是可序列化的。Fresh 可以序列化以下类型的值：

- 原始类型 `string`、`boolean`、`bigint` 和 `null`
- 大多数 `number`（`Infinity`、`-Infinity` 和 `NaN` 会被静默转换为 `null`）
- 具有字符串键和可序列化值的普通对象
- 包含可序列化值的数组
- Uint8Array
- JSX 元素（仅限于 `props.children`）
- Preact Signals（如果内部值是可序列化的）

支持循环引用。如果对象或信号被多次引用，它只会被序列化一次，引用会在反序列化时恢复。不支持传递复杂对象如 `Date`、自定义类或函数。

在服务端渲染期间，Fresh 会用特殊注释注释 HTML，指示每个岛屿将去往何处。这给发送到客户端的代码提供了足够的信息，可以将岛屿放在它们应该在的位置，而无需对交互式岛屿的静态子项进行水合。当不需要交互性时，不会向客户端发送任何 JavaScript。

```html Response body
<!--frsh-myisland_default:default:0-->
<div>
  计数器当前为 0。
  <button>+</button>
  <!--frsh-slot-myisland_default:children-->
  <p>这段文本在服务端渲染</p>
  <!--/frsh-slot-myisland_default:children-->
</div>
<!--/frsh-myisland_default:default:0-->
```

### 嵌套岛屿

在这种情况下，它们的行为像普通的 Preact 组件，但如果存在序列化的属性，仍然会接收它们。

```tsx islands/other-island.tsx
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  foo: string;
}

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

export default function OtherIsland({ children, foo }: Props) {
  const number = useSignal(randomNumber());

  return (
    <div>
      <p>来自属性的字符串：{foo}</p>
      <p>
        <button onClick={() => (number.value = randomNumber())}>随机</button>
        {" "}
        数字是：{number}。
      </p>
    </div>
  );
}
```

本质上，Fresh 允许你以最适合你的应用程序的方式在应用程序中混合静态和交互式部分。我们将继续只向浏览器发送岛屿所需的 JavaScript。

```tsx route/index.tsx
import MyIsland from "../islands/my-island.tsx";
import OtherIsland from "../islands/other-island.tsx";

export default function Home() {
  return (
    <div>
      <MyIsland>
        <OtherIsland foo="此属性将被序列化" />
      </MyIsland>
      <p>更多服务端渲染文本</p>
    </div>
  );
}
```

## 仅在客户端渲染岛屿

当使用仅客户端的 API 时，如 `EventSource` 或 `navigator.getUserMedia`，此组件不会在服务端运行，因为它会产生如下错误：

```
An error occurred during route handling or page rendering. ReferenceError: EventSource is not defined
    at Object.MyIsland (file:///Users/someuser/fresh-project/islands/my-island.tsx:6:18)
    at m (https://esm.sh/v129/preact-render-to-string@6.2.0/X-ZS8q/denonext/preact-render-to-string.mjs:2:2602)
    at m (https://esm.sh/v129/preact-render-to-string@6.2.0/X-ZS8q/denonext/preact-render-to-string.mjs:2:2113)
    ....
```

使用 [`IS_BROWSER`](https://deno.land/x/fresh/runtime.ts?doc=&s=IS_BROWSER) 标志作为保护来修复问题：

```tsx islands/my-island.tsx
import { IS_BROWSER } from "$fresh/runtime.ts";

export function MyIsland() {
  // 在这里返回任何有意义的可预渲染 JSX
  if (!IS_BROWSER) return <div></div>;

  // 所有必须在浏览器中运行的代码都在这里！
  // 如：EventSource、navigator.getUserMedia 等。
  return <div></div>;
}
```
