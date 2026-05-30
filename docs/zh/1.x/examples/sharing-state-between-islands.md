---
description: |
  当你需要岛屿之间共享状态时，本页面提供了一些方法。
---

所有这些内容都来自 Luca 的这个很棒的[示例](https://fresh-with-signals.deno.dev/)。源代码可以在[这里](https://github.com/lucacasonato/fresh-with-signals)找到。

## 具有独立状态的多个兄弟岛屿

想象我们有这样的 `Counter.tsx`：

```tsx islands/Counter.tsx
import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

// 此岛屿用于显示计数器并增加/减少它。计数器的状态存储在此岛屿中。
export default function Counter(props: CounterProps) {
  const count = useSignal(props.start);
  return (
    <div class="flex gap-2 items-center w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button onClick={() => count.value--}>-1</Button>
      <Button onClick={() => count.value++}>+1</Button>
    </div>
  );
}
```

注意 `useSignal` 在 `Counter` 组件内。然后如果我们像这样实例化一些计数器...

```tsx routes/index.tsx
<Counter start={3} />
<Counter start={4} />
```

它们将跟踪自己独立的状态。这里还没有太多共享。

## 具有共享状态的多个兄弟岛屿

但我们可以通过查看这样的 `SynchronizedSlider.tsx` 来改变：

```tsx islands/SynchronizedSlider.tsx
import { Signal } from "@preact/signals";

interface SliderProps {
  slider: Signal<number>;
}

// 此岛屿显示一个滑块，其值等于 `slider` 信号的值。当滑块移动时，`slider` 信号会更新。
export default function SynchronizedSlider(props: SliderProps) {
  return (
    <input
      class="w-full"
      type="range"
      min={1}
      max={100}
      value={props.slider.value}
      onInput={(e) => (props.slider.value = Number(e.currentTarget.value))}
    />
  );
}
```

现在如果我们做以下操作...

```tsx routes/index.tsx
export default function Home() {
  const sliderSignal = useSignal(50);
  return (
    <div>
      <SynchronizedSlider slider={sliderSignal} />
      <SynchronizedSlider slider={sliderSignal} />
      <SynchronizedSlider slider={sliderSignal} />
    </div>
  );
}
```

它们都将使用相同的值。

## 独立岛屿

我们还可以在工具文件中创建 `signal` 并导出以供跨多个地方使用。

```ts utils/cart.ts
import { signal } from "@preact/signals";

export const cart = signal<string[]>([]);
```

```tsx islands/AddToCart.tsx
import { Button } from "../components/Button.tsx";
import { cart } from "../utils/cart.ts";

interface AddToCartProps {
  product: string;
}

// 此岛屿用于将产品添加到购物车状态。
export default function AddToCart(props: AddToCartProps) {
  return (
    <Button
      onClick={() => (cart.value = [...cart.value, props.product])}
      class="w-full"
    >
      添加{cart.value.includes(props.product) ? " 另一个" : ""} "{props.product}" 到购物车
    </Button>
  );
}
```

```tsx islands/Cart.tsx
import { Button } from "../components/Button.tsx";
import { cart } from "../utils/cart.ts";
import * as icons from "../components/Icons.tsx";

// 此岛屿用于显示购物车内容并从中删除商品。
export default function Cart() {
  return (
    <h1 class="text-xl flex items-center justify-center">
      购物车
    </h1>

    <ul class="w-full bg-gray-50 mt-2 p-2 rounded-sm min-h-[6.5rem]">
      {cart.value.length === 0 && (
        <li class="text-center my-4">
          <div class="text-gray-400">
            <icons.Cart class="w-8 h-8 inline-block" />
            <div>
              你的购物车是空的。
            </div>
          </div>
        </li>
      )}
      {cart.value.map((product, index) => (
        <CartItem product={product} index={index} />
      ))}
    </ul>
  );
}

interface CartItemProps {
  product: string;
  index: number;
}

function CartItem(props: CartItemProps) {
  const remove = () => {
    const newCart = [...cart.value];
    newCart.splice(props.index, 1);
    cart.value = newCart;
  };

  return (
    <li class="flex items-center justify-between gap-1">
      <icons.Lemon class="text-gray-500" />
      <div class="flex-1">
        {props.product}
      </div>
      <Button onClick={remove} aria-label="Remove" class="border-none">
        <icons.X class="inline-block w-4 h-4" />
      </Button>
    </li>
  );
}
```

现在我们可以通过以下方式将岛屿添加到我们的站点：

```tsx routes/cart.tsx
<AddToCart product="柠檬" />
<AddToCart product="酸橙" />
<Cart />
```

结果是什么？`cart` 信号在两个 `AddToCart` 岛屿和 `Cart` 岛屿之间共享。
