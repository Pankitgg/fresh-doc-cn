---
description: |
  使用 ctx.upgrade() 或 app.ws() 向您的 Fresh 应用添加实时 WebSocket 端点。
---

Fresh 提供内置的辅助函数来将 HTTP 连接升级为 WebSockets。根据您的用例，有两种主要方法。

## 使用 `app.ws()` 快速开始

添加 WebSocket 端点的最简单方法：

```ts main.ts
import { App } from "fresh";

const app = new App()
  .ws("/ws", {
    open(socket) {
      console.log("Client connected");
    },
    message(socket, event) {
      socket.send(`Echo: ${event.data}`);
    },
    close(socket, code, reason) {
      console.log("Client disconnected", code, reason);
    },
  });
```

`app.ws(path, handlers)` 注册一个 GET 路由，自动将请求升级为 WebSocket 连接并连接您的事件处理器。

## 在路由处理器中使用 `ctx.upgrade()`

对于基于文件的路由或需要更多控制时，在 GET 处理器内部使用 `ctx.upgrade()`。

### 托管模式

传递事件处理器对象并直接接收升级 `Response`：

```ts routes/api/ws.ts
import { define } from "@/utils.ts";

export const handlers = define.handlers({
  GET(ctx) {
    return ctx.upgrade({
      open(socket) {
        console.log("Client connected");
      },
      message(socket, event) {
        socket.send(`Echo: ${event.data}`);
      },
      close(socket, code, reason) {
        console.log("Disconnected", code, reason);
      },
      error(socket, event) {
        console.error("WebSocket error", event);
      },
    });
  },
});
```

### 裸模式

不带参数调用 `ctx.upgrade()` 以获取原始 `WebSocket` 对象。当您需要将套接字存储在共享结构（如聊天室或发布/订阅注册表）中时，这很有用：

```ts routes/api/chat.ts
import { define } from "@/utils.ts";

const clients = new Set<WebSocket>();

export const handlers = define.handlers({
  GET(ctx) {
    const { socket, response } = ctx.upgrade();

    socket.onopen = () => {
      clients.add(socket);
    };
    socket.onmessage = (event) => {
      // 广播到所有连接的客户端
      for (const client of clients) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(event.data);
        }
      }
    };
    socket.onclose = () => {
      clients.delete(socket);
    };

    return response;
  },
});
```

## 升级选项

两种模式都接受一个选项对象来配置底层 WebSocket：

```ts
// 托管模式 — 先传递处理器，然后传递选项
ctx.upgrade(handlers, {
  idleTimeout: 60, // 在 60 秒内未收到 ping 则关闭（默认：120）
  protocol: "graphql-ws", // 要协商的子协议
});

// 裸模式 — 传递选项而不传递处理器以获取原始套接字
const { socket, response } = ctx.upgrade({ idleTimeout: 60 });
```

> **Fresh 如何区分这两种调用？** 当第一个参数包含至少一个函数值的处理器键（`open`、`message`、`close` 或 `error`）时，它被视为托管模式处理器。普通选项对象只有非函数字段（`idleTimeout`、`protocol`），因此它始终进入裸模式。

相同的选项可以传递给 `app.ws()`：

```ts
app.ws("/ws", handlers, { idleTimeout: 60 });
```

> `app.ws()` 始终使用托管模式。要以裸模式访问原始套接字，请改用 `app.get()` 和 `ctx.upgrade()`。

## 错误处理

如果非 WebSocket 请求命中 WebSocket 路由，`ctx.upgrade()` 会抛出 `HttpError(400)`，消息为"Expected a WebSocket upgrade request"。这由 Fresh 的错误管道自动处理，并返回 400 响应。

## 处理器参考

所有处理器回调都是可选的：

| 回调 | 参数 | 描述 |
| ---- | ---- | ---- |
| `open` | `(socket)` | 连接已建立 |
| `message` | `(socket, event)` | 收到消息（`event.data` 包含有效载荷） |
| `close` | `(socket, code, reason)` | 连接已关闭 |
| `error` | `(socket, event)` | 连接上发生错误 |

## 客户端示例

从浏览器连接：

```ts
const protocol = location.protocol === "https:" ? "wss:" : "ws:";
const ws = new WebSocket(`${protocol}//${location.host}/ws`);

ws.onopen = () => {
  ws.send("Hello from the client!");
};

ws.onmessage = (event) => {
  console.log("Received:", event.data);
};
```