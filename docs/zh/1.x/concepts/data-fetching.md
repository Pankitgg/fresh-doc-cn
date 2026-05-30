---
description: |
  Fresh 中的数据获取在路由处理函数内部进行。它们可以通过页面属性将路由数据传递给页面。
---

Fresh 中的服务端数据获取是通过异步处理函数完成的。这些处理函数可以调用带有要渲染数据的 `ctx.render()` 函数。然后页面组件可以通过 `props` 上的 `data` 属性检索此数据。

这是一个示例：

```tsx routes/projects/[id].tsx
interface Project {
  name: string;
  stars: number;
}

export const handler: Handlers<Project> = {
  async GET(_req, ctx) {
    const project = await db.projects.findOne({ id: ctx.params.id });
    if (!project) {
      return ctx.renderNotFound({
        message: "项目不存在",
      });
    }
    return ctx.render(project);
  },
};

export default function ProjectPage(props: PageProps<Project>) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.stars} 星</p>
    </div>
  );
}
```

`PageProps`、`Handlers`、`Handler` 和 `FreshContext` 上的类型参数可用于强制使用用于渲染数据的 TypeScript 类型。Fresh 在类型检查期间强制所有这些字段中的类型在单个页面中兼容。

## 异步路由

作为将 `GET` 处理程序与路由组合的快捷方式，你可以将路由定义为 `async`。`async` 路由（返回 promise 的路由）将使用 `Request` 和 `RouteContext`（类似于 `HandlerContext`）调用。这是使用此快捷方式重写的上述示例：

```tsx routes/projects/[id].tsx
interface Project {
  name: string;
  stars: number;
}

export default async function ProjectPage(_req, ctx: FreshContext) {
  const project: Project | null = await db.projects.findOne({
    id: ctx.params.id,
  });

  if (!project) {
    return <h1>未找到项目</h1>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.stars} 星</p>
    </div>
  );
}
```
