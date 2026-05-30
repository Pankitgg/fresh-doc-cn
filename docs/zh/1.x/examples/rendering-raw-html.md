---
description: |
  如何在 Fresh 中渲染原始 HTML。
---

Fresh 中的文本内容总是被转义，无论是服务端渲染还是在岛屿中渲染。虽然这通常是期望的行为，但它可能在某些情况下造成问题。

## 警告

简而言之是使用 Preact 的 `dangerouslySetInnerHTML`。正如名称所示，不应该轻易使用它。

设置任意 HTML 可能是危险的。确保你信任来源。将用户提供的 HTML 渲染到 DOM 会使你的站点容易受到跨站脚本攻击。必须先清理标记，或者更好的是，使用你信任的内容。

## 示例：渲染 JSON-LD

假设我们需要向页面添加一些微数据标记。以下将导致**转义字符，并且不会工作**：

```tsx components/json-ld.tsx
const json = `
{
  "@context": "http://schema.org",
  "@type": "PostalAddress",
  "streetAddress": "8888 University Drive",
  "addressLocality": "Burnaby",
  "addressRegion": "British Columbia"
}
`;

export default function JsonLd() {
  return <script type="application/ld+json">{json}</script>;
}
```

相反，我们可以使用 `dangerouslySetInnerHTML`：

```tsx components/json-ld.tsx
export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
```

## 另一个示例：代码高亮

语法高亮器将字符串解析为 HTML 标签，允许它们使用 CSS 单独样式化。我们可以构建一个简单的 Preact 语法高亮器，如下所示：

```tsx components/code.tsx
import Prism from "https://esm.sh/prismjs@1.29.0";

interface Props {
  code: string;
  lang: string;
}

export default function Code({ code, lang }: Props) {
  const parsed = Prism.highlight(code, Prism.languages[lang], lang);

  return (
    <pre data-lang={lang} className={`language-${lang}`}>
      <code
        dangerouslySetInnerHTML={{
          __html: parsed,
        }}
      />
    </pre>
  );
}
```

当然，我们还必须添加一些 CSS 来使其看起来美观。
