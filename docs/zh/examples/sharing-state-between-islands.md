---
description: |
  When you need to have state shared between islands, this page provides a few recipes.
---

## 多个具有独立状态的兄弟岛屿

假设我们有一个这样的 `Counter.tsx`：

```tsx islands/Counter.tsx
import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

// This island is used to display a counter and increment/decrement it. The
// state for the counter is stored locally in this island.
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

注意 `useSignal` 是放在 `Counter` 组件内部的。然后如果我们像这样实例化一些计数器……

```tsx routes/index.tsx
<Counter start={3} />
<Counter start={4} />
```

它们会各自维护独立的状态。这里还没有太多共享状态。

## 多个具有共享状态的兄弟岛屿

但我们可以通过查看像这样的 `SynchronizedSlider.tsx` 来改变这种情况：

```tsx islands/SynchronizedSlider.tsx
import { Signal } from "@preact/signals";

interface SliderProps {
  slider: Signal<number>;
}

// This island displays a slider with a value equal to the `slider` signal's
// value. When the slider is moved, the `slider` signal is updated.
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

现在如果我们像下面这样做……

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

它们都会使用相同的值。

## 跨独立岛屿共享状态

当岛屿不是作为兄弟组件渲染时（例如，一个在侧边栏，一个在主内容区），你可以通过在父组件中创建一个 signal 并将其作为 prop 传递给每个岛屿来共享状态。

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

然后从路由中将它们连接起来，把同一个 signal 传递给两者：

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

`cart` signal 是在每次渲染时创建的（不是在模块级别），因此每个请求都有自己独立的购物车。Fresh 会[序列化](/docs/advanced/serialization)这个 signal 并将其传递给两个岛屿，使它们在客户端保持同步。

> [!CAUTION]
> 避免在模块级别创建 signal（例如在工具文件中写 `export const cart = signal([])`）。模块级别的状态在服务器上会在所有请求之间共享，这意味着不同用户会看到相同的购物车。请始终在组件或处理器内部创建 signal。
