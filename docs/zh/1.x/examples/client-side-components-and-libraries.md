---
description: |
  客户端组件和库
---

# 客户端组件和库

某些组件依赖于客户端环境、浏览器特定功能或动态用户交互，这使得它们在服务器端渲染期间不兼容或无法正常工作。

通过采用条件渲染和状态管理技术，我们可以确保优雅地处理库或数据加载，从而改善此类组件的工作流程和可用性。

让我们探索一个在 Fresh 应用程序中使用 Leaflet（一个流行的地图库）的示例。目标是确保 Leaflet 组件在客户端正确渲染，同时在服务器端优雅地处理它们。

完整代码可在页面底部获取。

## 说明

第一步是创建上下文变量以增强 Fresh 应用程序中各个组件的可用性。通过将这些变量初始化为 null 值并集成类型引用，开发人员可以简化客户端功能的使用，同时适应服务器端渲染可能不可行的场景。

> [warn]: 适当的类型可能不容易获得，因此我们可能需要定义自己的类型或根本不使用类型。

```ts context.ts
export const leafletContext = createContext<typeof Leaflet | null>(null);
```

然后，我们应该实现一个 Provider 组件，它将处理加载并将值传递给其他组件使用，除此之外，我们还需要处理服务器端的情况。

在这个示例中，对于服务器端，我们只是在组件树的位置渲染一个占位符。至于上下文值，我们使用 html 标签在 window 上注入库，并使用 onLoad 回调来设置我们状态的值，这个值将与我们的其他组件一起处理/共享。

> [warn]: 小心使用 provider，它们加载/注入脚本和 css 的方式可能会引起问题。例如，如果我们尝试再次加载 Leaflet，它会抛出错误。

```tsx context.ts
function LeafletProvider(props: { children: ComponentChildren }) {
  if (!IS_BROWSER) {
    return (
      <p>Leaflet must be loaded on the client. No children will render</p>
    );
  }
  const value = useSignal<typeof Leaflet | null>(null)
  return (
    <>
      {/* Load Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin=""
      />
      {/* Load Leaflet JS */}
      <script
        onLoad={() => value.value = window.L}
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""
      />
      {/* Provide Leaflet context to children */}
      <leafletContext.Provider value={value}>
        {props.children}
      </LeafletContext.Provider>
    </>
  );
}
```

为了利用上下文，使用上下文变量调用 useContext hook，这将使我们能够访问 Provider 中设置的值。处理上下文尚未加载值的情况也是一个好习惯，这样我们就可以在服务器端代码中平滑地集成和操作客户端数据和逻辑。

```tsx component/Map.tsx
function MapComponent() {
  const leaf = useContext(leafletContext);
  if (!leaf) return <p>Context not ready. Component placeholder</p>;
  useEffect(() => {
    const map = leaf.map("map").setView(leaf.latLng(0, 0), 2);
    leaf.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  });
  return <div id="map" class="relative w-[80vw] h-[50vh]" />;
}
```

这是一个示例 island，封装了 provider 和 component，以演示简单的用法。在实际情况下，通常最好直接将 Provider 添加到我们的页面中，然后在其中使用依赖于该 provider 的组件。

```tsx islands/MapIsland.tsx
export default function MapIsland() {
  return (
    <LeafletProvider>
      <MapComponent />
    </LeafletProvider>
  );
}
```

## 完整代码：

```tsx islands/MapIsland.tsx
import * as Leaflet from "https://esm.sh/v135/@types/leaflet@1.9.4/index.d.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useContext, useEffect } from "preact/hooks";
import { ComponentChildren, createContext } from "preact";
import { useSignal } from "@preact/signals";

// Create a context to hold Leaflet data/functions
const LeafletContext = createContext<typeof Leaflet | null>(null);

// LeafletProvider component manages Leaflet loading and context
function LeafletProvider(props: { children: ComponentChildren }) {
  if (!IS_BROWSER) {
    return <p>Leaflet must be loaded on the client. No children will render</p>;
  }
  const value = useSignal<typeof Leaflet | null>(null);
  return (
    <>
      {/* Load Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin=""
      />
      {/* Load Leaflet JS */}
      <script
        onLoad={() => value.value = window.L}
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""
      />
      {/* Provide Leaflet context to children */}
      <LeafletContext.Provider value={value}>
        {props.children}
      </LeafletContext.Provider>
    </>
  );
}

// MapComponent utilizes Leaflet context for rendering the map
function MapComponent() {
  const leaf = useContext(LeafletContext);
  if (!leaf) return <div>Component placeholder</div>;
  useEffect(() => {
    const map = leaf.map("map").setView(leaf.latLng(0, 0), 2);
    leaf.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  });
  return <div id="map" class="relative w-[80vw] h-[50vh]" />;
}

// MapIsland is the parent component integrating LeafletProvider and MapComponent
export default function MapIsland() {
  return (
    <LeafletProvider>
      <MapComponent />
    </LeafletProvider>
  );
}
```
