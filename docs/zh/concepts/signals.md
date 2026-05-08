---
description: |
  Signals 提供使用 @preact/signals 的响应式状态管理。
---

[Signals](https://preactjs.com/guide/v10/signals/) 是 Preact 的响应式原语，用于在 [islands](/docs/concepts/islands) 中管理状态。当一个 signal 的值发生变化时，任何读取它的组件都会自动重新渲染——无需使用 `setState` 或手动订阅。

## 创建 Signals

在组件内使用 `useSignal` 管理局部状态，或在模块级别使用 `signal` 管理共享状态：

```tsx islands/Counter.tsx
import { useSignal } from "@preact/signals";

export default function Counter() {
  const count = useSignal(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => count.value++}>Increment</button>
    </div>
  );
}
```

> [info]：Signals 可以直接在 JSX 中渲染（`{count}`），而无需访问 `.value`。Preact 会自动检测 signal 并订阅更新。

## 计算 Signals

使用 `computed` 从其他 signals 派生值。计算 signals 会在其依赖项发生变化时自动更新：

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

## 将 Signals 作为 props 传递

Signals 可以作为 props 传递给 islands。Fresh 会在服务器端自动序列化它们，并在客户端重新构建为实时的 signals：

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

两个滑块共享同一个 signal——操作其中一个会更新另一个。当相同的 signal 对象被传递给多个 islands 时，Fresh 会保留引用以确保它们保持同步。

> [info]：在路由组件（非 island）中使用 `useSignal` 是有意为之。Signal 在服务器渲染时创建，序列化到 HTML 中，然后在客户端重新构建为实时的 signal。这就是 Fresh 在同一页面的多个 islands 之间共享响应式状态的方式。

## 跨 islands 共享状态

对于需要在不相关的 islands 之间共享的状态，请在单独的模块中创建一个 signal：

```ts utils/cart.ts
import { signal } from "@preact/signals";

export const cart = signal<string[]>([]);
```

```tsx islands/AddToCart.tsx
import { cart } from "@/utils/cart.ts";

export default function AddToCart(props: { product: string }) {
  return (
    <button onClick={() => cart.value = [...cart.value, props.product]}>
      Add {props.product}
    </button>
  );
}
```

```tsx islands/CartCount.tsx
import { cart } from "@/utils/cart.ts";

export default function CartCount() {
  return <span>Items in cart: {cart.value.length}</span>;
}
```

由于两个 islands 导入的是同一个模块级别的 signal，它们会自动共享相同的状态。更多模式请参见[在 islands 之间共享状态](/docs/examples/sharing-state-between-islands)。

## 序列化

当 signals 作为 island props 传递时，Fresh 会自动处理[序列化](/docs/advanced/serialization)：

- Signal 的当前值通过 `.peek()` 在服务器端提取
- 在客户端，值被重新包装成实时的 `signal()` 或 `computed()`
- 循环引用和重复的 signal 引用会被保留

Signal 的内部值本身必须是可序列化的（有关支持类型的完整列表，请参见 [Islands - 传递 props](/docs/concepts/islands#passing-props-to-islands)）。
