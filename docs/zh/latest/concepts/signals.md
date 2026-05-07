---
description: |
  Signals 使用 @preact/signals 在 Fresh 岛屿中提供响应式状态管理。
---

# Signals（信号）

[Signals](https://preactjs.com/guide/v10/signals/) 是 Preact 的响应式原语，用于在[岛屿](/docs/concepts/islands)中管理状态。当信号的值改变时，任何读取它的组件都会自动重新渲染——无需 `setState` 或手动订阅。

## 创建信号

在组件内部使用 `useSignal` 创建局部状态，或在模块级别使用 `signal` 创建共享状态：

```tsx islands/Counter.tsx
import { useSignal } from "@preact/signals";

export default function Counter() {
  const count = useSignal(0);

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={() => count.value++}>增加</button>
    </div>
  );
}
```

> [信息]: Signals 可以直接在 JSX 中渲染（`{count}`），无需访问 `.value`。Preact 会自动检测信号并订阅更新。

## 计算信号

使用 `computed` 从其他信号派生值。计算信号会在其依赖项更改时自动更新：

```tsx islands/TemperatureConverter.tsx
import { useComputed, useSignal } from "@preact/signals";

export default function TemperatureConverter() {
  const celsius = useSignal(20);
  const fahrenheit = useComputed(() => celsius.value * 9 / 5 + 32);

  return (
    <div>
      <input
        type="range"
        min={-40}
        max={100}
        value={celsius}
        onInput={(e) => celsius.value = Number(e.currentTarget.value)}
      />
      <p>{celsius}°C = {fahrenheit}°F</p>
    </div>
  );
}
```

## 将信号作为 props 传递

信号可以作为 props 传递给岛屿。Fresh 会自动在服务器上序列化它们，并在客户端上将它们重建为实时信号：

```tsx routes/index.tsx
import { useSignal } from "@preact/signals";
import Slider from "@/islands/Slider.tsx";

export default function Home() {
  const value = useSignal(50);
  return (
    <div>
      <Slider value={value} />
      <Slider value={value} />
    </div>
  );
}
```

两个滑块共享同一个信号——移动一个会更新另一个。当同一个信号对象传递给多个岛屿时，Fresh 会保留引用，使它们保持同步。

> [信息]: 在这里的路由组件（不是岛屿）中使用 `useSignal` 是有意的。信号在服务器渲染期间创建，序列化为 HTML，并在客户端上重建为实时信号。这就是 Fresh 在同一页面上的多个岛屿之间共享响应式状态的方式。

## 岛屿之间共享状态

对于需要在不相关岛屿之间共享的状态，在单独的模块中创建信号：

```ts utils/cart.ts
import { signal } from "@preact/signals";

export const cart = signal<string[]>([]);
```

```tsx islands/AddToCart.tsx
import { cart } from "@/utils/cart.ts";

export default function AddToCart(props: { product: string }) {
  return (
    <button onClick={() => cart.value = [...cart.value, props.product]}>
      添加 {props.product}
    </button>
  );
}
```

```tsx islands/CartCount.tsx
import { cart } from "@/utils/cart.ts";

export default function CartCount() {
  return <span>购物车中的商品: {cart.value.length}</span>;
}
```

由于两个岛屿都导入相同的模块级信号，它们会自动共享相同的状态。有关更多模式，请参见[在岛屿之间共享状态](/docs/examples/sharing-state-between-islands)。

## 序列化

当信号作为岛屿 props 传递时，Fresh 会自动处理[序列化](/docs/advanced/serialization)：

- 信号的当前值通过 `.peek()` 在服务器上提取
- 在客户端上，该值被重新包装到实时的 `signal()` 或 `computed()` 中
- 循环引用和重复信号引用被保留

信号的内部值本身必须是可序列化的（请参阅[岛屿 - 传递 props](/docs/concepts/islands#passing-props-to-islands) 了解支持的类型的完整列表）。
