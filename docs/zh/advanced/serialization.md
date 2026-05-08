---
description: |
  哪些类型可以作为 island props 传递，Fresh 如何在服务器和客户端之间序列化数据，以及常见的陷阱。
---

当 Fresh 在服务器上渲染页面时，[island](/docs/concepts/islands) props 必须序列化为 JSON 并发送到浏览器进行水合。Fresh 使用自定义序列化系统，支持比标准 `JSON.stringify` 更多的类型。

## 支持的类型

以下类型可以作为 island props 传递：

| 类型                                  | 备注                                                                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `string`、`number`、`boolean`        | 原始类型                                                                                                          |
| `null`、`undefined`                  |                                                                                                                  |
| `bigint`                             |                                                                                                                  |
| `NaN`、`Infinity`、`-Infinity`、`-0` | 特殊数值                                                                                                          |
| `Array`                              | 包括稀疏数组                                                                                                      |
| 纯对象                                | 具有字符串键和可序列化值的对象                                                                                    |
| `Date`                               |                                                                                                                  |
| `URL`                                |                                                                                                                  |
| `RegExp`                             | 包括标志                                                                                                          |
| `Set`                                | 值必须是可序列化的                                                                                                |
| `Map`                                | 键和值必须是可序列化的                                                                                            |
| `Uint8Array`                         | 二进制数据                                                                                                        |
| `Signal`                             | 来自 `@preact/signals`——参见 [Signals](/docs/concepts/signals)                                                   |
| `Computed Signal`                    | 只读信号                                                                                                          |
| `Temporal.*`                         | `Instant`、`ZonedDateTime`、`PlainDate`、`PlainTime`、`PlainDateTime`、`PlainYearMonth`、`PlainMonthDay`、`Duration` |
| JSX 元素                              | 传递给 islands 的服务器渲染 JSX                                                                                   |

## 不可序列化

以下类型**不能**作为 island props 传递：

- **函数和闭包**——无法传输可执行代码
- **类实例**——只支持纯对象（不支持自定义原型）
- **Symbols**——无法用 JSON 表示
- **WeakMap / WeakSet**——无法枚举
- **Streams、Promises**——无法冻结异步值进行传输

```tsx
// 错误——函数无法序列化
<MyIsland onClick={() => console.log("clicked")} />

// 错误——类实例会丢失其原型
<MyIsland data={new MyCustomClass()} />
```

## 循环引用

Fresh 自动处理循环引用。如果同一个对象或信号在 props 树中出现多次，它只序列化一次，所有引用在客户端上恢复：

```tsx
const shared = { value: 42 };
const data = { a: shared, b: shared };

// `data.a` 和 `data.b` 在客户端上会引用同一个对象
<MyIsland data={data} />;
```

## Signals 如何序列化

当在 island props 中检测到 `Signal` 时：

1. **服务器**：通过 `.peek()` 读取信号的当前值并序列化
2. **客户端**：该值被包装在新的 `signal()` 调用中，创建一个活的响应式信号

如果同一个信号对象被传递给多个 islands，它只序列化一次，所有 islands 在客户端上接收相同的信号实例——保持它们同步。

计算信号通过读取其当前值并在客户端上包装在 `computed(() => value)` 中来序列化。由于原始计算函数无法传输，客户端上的计算信号持有一个静态值。

## 常见陷阱

### 意外传递不可序列化的 props

如果你将函数或类实例作为 prop 传递给 island，在序列化过程中会出现运行时错误。保持 island props 为纯数据：

```tsx
// 不要传递回调...
<MyIsland onSave={handleSave} />

// ...传递数据并在 island 内部处理事件
<MyIsland itemId={item.id} />
```

### 过大的 props

序列化的 props 的每个字节都嵌入在 HTML 中并在客户端解析。保持 island props 小巧——传递 ID 或最小数据，如果需要则在客户端获取其余部分。
