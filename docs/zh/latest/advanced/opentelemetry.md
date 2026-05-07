---
description: |
  Fresh 内置了 OpenTelemetry 工具，用于跟踪通过中间件、处理器和渲染的请求。
---

Fresh 使用 [OpenTelemetry](https://opentelemetry.io/) 跨度自动检测关键操作，让您能够了解请求如何在应用中流动。无需更改代码——只需配置导出器即可。

## 检测内容

Fresh 为以下操作创建跨度：

- **[中间件](/docs/concepts/middleware) 执行** - 链中的每个中间件
- **路由处理器执行** - 处理器函数调用
- **渲染** - 服务器端页面渲染，包括异步组件
- **[静态文件](/docs/concepts/static-files) 服务** - 文件查找、缓存和响应
- **延迟路由加载** - 首次访问时动态导入路由模块

所有跨度都在 `fresh` 追踪器下创建（使用当前 Fresh 版本命名）。每个请求的根跨度包含 `http.route` 和匹配的路由模式（例如 `GET /blog/:slug`），便于按路由分组追踪。

## 启用追踪

Fresh 使用 `@opentelemetry/api` 包（供应商中立的 API）。跨度会自动创建——您只需要提供 OpenTelemetry SDK 和导出器来收集它们。

如果未配置导出器，跨度将被静默丢弃，不会产生性能开销。

### 使用 Deno 的内置 OpenTelemetry

Deno 具有
[内置的 OpenTelemetry 支持](https://docs.deno.com/runtime/fundamentals/open_telemetry/)。使用 `OTEL_DENO` 环境变量启用它：

```sh Terminal
OTEL_DENO=true deno task start
```

这会将追踪导出到 OTLP 兼容的收集器。配置端点：

```sh Terminal
OTEL_DENO=true \
OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317 \
deno task start
```

### 使用 Deno Deploy

[Deno Deploy](/docs/deployment/deno-deploy) 在使用 Fresh 预设时自动收集 Fresh 追踪——无需配置。追踪显示在 Deno Deploy 仪表板中。

### 使用自定义导出器

您可以使用任何 OpenTelemetry 兼容的后端（Jaeger、Zipkin、Honeycomb、Grafana Tempo、Datadog 等）。安装 SDK 并在入口点配置导出器：

```ts main.ts
import { NodeSDK } from "@opentelemetry/sdk-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: "https://your-collector.example.com/v1/traces",
  }),
});
sdk.start();
```

## 跨度属性

Fresh 在跨度上设置以下属性：

| 属性 | 跨度类型 | 描述 |
| ---- | -------- | ---- |
| `http.route` | 根 | 匹配的路由模式（例如 `/blog/:slug`） |
| `fresh.span_type` | 各种 | 内部跨度分类（`render` 等） |
| `fresh.cache` | 静态文件 | 缓存状态（`immutable`、`not_modified`、`no_cache`、`invalid_bust_key`） |
| `fresh.cache_key` | 静态文件 | 资源的缓存破坏键 |

处理器或渲染中的错误通过 `span.recordException()` 记录在跨度上，跨度状态设置为 `ERROR`。

## 本地开发

### 控制台导出器

查看追踪的最快方式是将其打印到控制台。Deno (2.7+) 开箱即用支持此功能——无需额外依赖或服务：

```sh Terminal
OTEL_DENO=true \
OTEL_TRACES_EXPORTER=console \
deno task start
```

每个请求将其跨度直接打印到 stderr，显示中间件、处理器和渲染时间的完整细分。

### Jaeger

对于可视化追踪浏览器，使用 Docker 在本地运行 [Jaeger](https://www.jaegertracing.io/)：

```sh Terminal
docker run -d --name jaeger \
  -p 16686:16686 \
  -p 4317:4317 \
  jaegertracing/all-in-one:latest
```

然后启动您的 Fresh 应用，指向 Jaeger 收集器：

```sh Terminal
OTEL_DENO=true \
OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317 \
deno task start
```

打开 `http://localhost:16686` 浏览追踪。您将看到每个请求分解为其中间件、处理器和渲染跨度。

## 客户端追踪关联

当 OpenTelemetry 导出器处于活动状态时，Fresh 会自动将
[W3C Trace Context](https://www.w3.org/TR/trace-context/) `<meta>` 标签注入到每个渲染页面的 `<head>` 中：

```html
<head>
  <meta
    name="traceparent"
    content="00-ab42124a3c573678d4d8b21ba52df3bf-d21f7bc17caa5aba-01"
  >
  <!-- ... -->
</head>
```

这允许客户端 OpenTelemetry 工具（例如
[`@opentelemetry/instrumentation-document-load`](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/c9d62be989802534c01373e8ab41e13747d7ee3e/packages/instrumentation-document-load)）将浏览器性能追踪链接回渲染页面的服务器端跨度，使您能够从服务器渲染到页面加载获得端到端可见性。