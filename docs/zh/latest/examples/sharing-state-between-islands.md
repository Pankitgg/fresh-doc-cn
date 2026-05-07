---
description: |
  当您需要在 islands 之间共享状态时，本页提供了一些方案。
---

## 具有独立状态的多个兄弟 Islands

假设我们有这样的 `Counter.tsx`：

```tsx islands/Counter.tsx
import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

// 这个 island 用于显示计数器并增减它。计数器的状态存储在这个 island 本地。
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

请注意 `useSignal` 是在 `Counter` 组件内部的。然后如果我们像这样实例化一些计数器...

```tsx routes/index.tsx
<Counter start={3} />
<Counter start={4} />
```

它们将各自跟踪自己的独立状态。目前还没有太多共享。

## 具有共享状态的多个兄弟 Islands

但是我们可以通过查看这样的 `SynchronizedSlider.tsx` 来改变情况：

```tsx islands/SynchronizedSlider.tsx
import { Signal } from "@preact/signals";

interface SliderProps {
  slider: Signal<number>;
}

// 这个 island 显示一个滑块，其值等于 `slider` 信号的值。当滑块移动时，`slider` 信号会更新。
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

## 在独立 Islands 之间共享状态

当 islands 不是作为兄弟渲染时（例如一个在侧边栏，一个在主内容中），您可以通过在父组件中创建一个信号并将其作为属性传递给每个 island 来共享状态。

```tsx islands/AddToCart.tsx
import { type Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface AddToCartProps {
  cart: Signal<string[]>;
  product: string;
}

export default function AddToCart(props: AddToCartProps) {
  const { cart, product } = props;
  return (
    <Button
      onClick={() => (cart.value = [...cart.value, product])}
      class="w-full"
    >
      Add{cart.value.includes(product) ? " another" : ""} "{product}" to cart
    </Button>
  );
}
```

```tsx islands/Cart.tsx
import { type Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import * as icons from "../components/Icons.tsx";

interface CartProps {
  cart: Signal<string[]>;
}

export default function Cart(props: CartProps) {
  const { cart } = props;
  return (
    <div>
      <h1 class="text-xl flex items-center justify-center">Cart</h1>
      <ul class="w-full bg-gray-50 mt-2 p-2 rounded-sm min-h-[6.5rem]">
        {cart.value.length === 0 && (
          <li class="text-center my-4">
            <div class="text-gray-400">
              <icons.Cart class="w-8 h-8 inline-block" />
              <div>Your cart is empty.</div>
            </div>
          </li>
        )}
        {cart.value.map((product, index) => (
          <CartItem cart={cart} product={product} index={index} />
        ))}
      </ul>
    </div>
  );
}

interface CartItemProps {
  cart: Signal<string[]>;
  product: string;
  index: number;
}

function CartItem(props: CartItemProps) {
  const remove = () => {
    const newCart = [...props.cart.value];
    newCart.splice(props.index, 1);
    props.cart.value = newCart;
  };

  return (
    <li class="flex items-center justify-between gap-1">
      <icons.Lemon class="text-gray-500" />
      <div class="flex-1">{props.product}</div>
      <Button onClick={remove} aria-label="Remove" class="border-none">
        <icons.X class="inline-block w-4 h-4" />
      </Button>
    </li>
  );
}
```

然后从一个路由将它们连接在一起，将相同的信号传递给两者：

```tsx routes/cart.tsx
import { useSignal } from "@preact/signals";
import AddToCart from "../islands/AddToCart.tsx";
import Cart from "../islands/Cart.tsx";
import { define } from "../utils.ts";

export default define.page(function CartPage() {
  const cart = useSignal<string[]>([]);
  return (
    <div>
      <AddToCart cart={cart} product="Lemon" />
      <AddToCart cart={cart} product="Lime" />
      <Cart cart={cart} />
    </div>
  );
});
```

`cart` 信号是每次渲染时创建的（不是在模块级别），因此每个请求都有自己独立的购物车。Fresh
[序列化](/docs/advanced/serialization) 该信号并将其传递给两个 islands，使它们在客户端保持同步。

> [!CAUTION]
> 避免在模块级别创建信号（例如在实用工具文件中 `export const cart = signal([])`）。模块级别的状态在服务器上的所有请求之间共享，这意味着不同的用户会看到相同的购物车。始终在组件或处理器内部创建信号。