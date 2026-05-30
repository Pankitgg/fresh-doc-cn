---
description: |
  通过使用 Fresh 强大的岛屿系统，在不牺牲用户体验的情况下向你的项目添加基于 JavaScript 的交互性。
---

到目前为止，演示项目中的页面都没有包含任何客户端 JavaScript。这对于弹性和性能来说很好，但它也可能限制交互性的可能性。在大多数当前的 Web 框架中，你要么选择不向客户端发送 JavaScript，要么选择为整个页面发送一个渲染器。

这不是很灵活，尤其是考虑到大多数页面只需要一小块需要交互性的内容。例如，一个 otherwise 静态的页面可能需要一点 JavaScript 来驱动图片轮播或"立即购买"按钮。这种模型通常称为[岛屿架构][islands-architecture]。这是指一个页面在 otherwise 静态内容中有少量交互"岛屿"。

Fresh 采用了这种模型。所有页面都在服务端渲染，但你可以创建"岛屿组件"，这些组件也在客户端渲染。要做到这一点，Fresh 项目有一个特殊的 `islands/` 文件夹。这个文件夹中的每个模块封装一个岛屿组件。模块的名称应该是岛屿组件的[帕斯卡命名][pascal-case]或[短横线命名][kebab-case]。例如，计数器组件应该在文件 `islands/Counter.tsx` 中定义。立即购买按钮可以在文件 `islands/buy-now-button.tsx` 中定义。

这是一个倒计时到特定时间的岛屿组件示例。

```tsx islands/Countdown.tsx
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

// 目标日期作为字符串而不是 `Date` 传递，因为岛屿组件的属性需要是 JSON（反）序列化的。
export default function Countdown(props: { target: string }) {
  const target = new Date(props.target);
  const now = useSignal(new Date());

  // 设置一个间隔，每秒更新 `now` 日期为当前日期，只要组件挂载。
  useEffect(() => {
    const timer = setInterval(() => {
      if (now.value > target) {
        clearInterval(timer);
      }
      now.value = new Date();
    }, 1000);
    return () => clearInterval(timer);
  }, [props.target]);

  const secondsLeft = Math.floor(
    (target.getTime() - now.value.getTime()) / 1000,
  );

  // 如果目标日期已过，我们停止倒计时。
  if (secondsLeft <= 0) {
    return <span>🎉</span>;
  }

  // 否则，我们使用 `Intl.RelativeTimeFormat` 格式化剩余时间并渲染。
  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>;
}
```

要在页面组件中包含此内容，你可以正常使用该组件。Fresh 将自动在客户端使用正确的属性挂载岛屿组件：

```tsx routes/countdown.tsx
import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <p>
      重大事件将在 <Countdown target={date.toISOString()} /> 发生。
    </p>
  );
}
```

现在在客户端渲染的页面现在有一个交互式倒计时。

[islands-architecture]: https://jasonformat.com/islands-architecture
[pascal-case]: https://en.wiktionary.org/wiki/Pascal_case
[kebab-case]: https://en.wiktionary.org/wiki/kebab_case
