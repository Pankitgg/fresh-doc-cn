import{_ as n,o as a,c as e,ae as p}from"./chunks/framework.Co1PSFSm.js";const u=JSON.parse('{"title":"","description":"Change the source directory to effectively manage your project.\\n","frontmatter":{"description":"Change the source directory to effectively manage your project.\\n"},"headers":[],"relativePath":"en/latest/1.x/examples/changing-the-src-dir.md","filePath":"en/latest/1.x/examples/changing-the-src-dir.md"}'),t={name:"en/latest/1.x/examples/changing-the-src-dir.md"};function i(l,s,o,c,r,d){return a(),e("div",null,[...s[0]||(s[0]=[p(`<p>When you initialize a project with <code>deno run -A -r https://fresh.deno.dev</code>, you&#39;ll end up with a project like the following:</p><div class="language-txt-files vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt-files</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;project root&gt;</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── components</span></span>
<span class="line"><span>│   └── Button.tsx</span></span>
<span class="line"><span>├── deno.json</span></span>
<span class="line"><span>├── dev.ts</span></span>
<span class="line"><span>├── fresh.gen.ts</span></span>
<span class="line"><span>├── islands</span></span>
<span class="line"><span>│   └── Counter.tsx</span></span>
<span class="line"><span>├── main.ts</span></span>
<span class="line"><span>├── routes</span></span>
<span class="line"><span>│   ├── greet</span></span>
<span class="line"><span>│   │   ├── [name].tsx</span></span>
<span class="line"><span>│   ├── api</span></span>
<span class="line"><span>│   │   └── joke.ts</span></span>
<span class="line"><span>│   ├── _404.tsx</span></span>
<span class="line"><span>│   └── index.tsx</span></span>
<span class="line"><span>└── static</span></span>
<span class="line"><span>    ├── favicon.ico</span></span>
<span class="line"><span>    └── logo.svg</span></span></code></pre></div><h2 id="using-a-src-directory" tabindex="-1">Using a <code>src</code> directory <a class="header-anchor" href="#using-a-src-directory" aria-label="Permalink to &quot;Using a \`src\` directory&quot;">​</a></h2><p>If you&#39;d like your code to live in an <code>src</code> directory (or any other directory of your choosing), then you&#39;ll need to do the following things:</p><ol><li>Move all your files, except <code>deno.json</code> and <code>README.md</code>, to the <code>src</code> directory.</li><li>Modify the <code>start</code> task in <code>deno.json</code> to point to the new directory.</li></ol><p>Here&#39;s what the diff of <code>deno.json</code> looks like:</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &quot;lock&quot;: false,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &quot;tasks&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">-    &quot;start&quot;: &quot;deno run -A --watch=static/,routes/ dev.ts&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+    &quot;start&quot;: &quot;deno run -A --watch=src/static/,src/routes/ src/dev.ts&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &quot;imports&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &quot;$fresh/&quot;: &quot;file:///Users/reed/code/fresh/&quot;,</span></span></code></pre></div><p>The resulting file structure looks like this:</p><div class="language-txt-files vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt-files</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;project root&gt;</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── deno.json</span></span>
<span class="line"><span>└── src</span></span>
<span class="line"><span>    ├── components</span></span>
<span class="line"><span>    │   └── Button.tsx</span></span>
<span class="line"><span>    ├── dev.ts</span></span>
<span class="line"><span>    ├── fresh.gen.ts</span></span>
<span class="line"><span>    ├── islands</span></span>
<span class="line"><span>    │   └── Counter.tsx</span></span>
<span class="line"><span>    ├── main.ts</span></span>
<span class="line"><span>    ├── routes</span></span>
<span class="line"><span>    │   ├── greet</span></span>
<span class="line"><span>    │   │   ├── [name].tsx</span></span>
<span class="line"><span>    │   ├── api</span></span>
<span class="line"><span>    │   │   └── joke.ts</span></span>
<span class="line"><span>    │   ├── _404.tsx</span></span>
<span class="line"><span>    │   └── index.tsx</span></span>
<span class="line"><span>    └── static</span></span>
<span class="line"><span>        ├── favicon.ico</span></span>
<span class="line"><span>        └── logo.svg</span></span></code></pre></div><p>Success! Your code now lives elsewhere.</p>`,10)])])}const g=n(t,[["render",i]]);export{u as __pageData,g as default};
