/* empty css                               */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server__7ZaI1Ga.mjs';
import { g as getCollection } from '../chunks/_astro_content_D8CWyi8m.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bq3-qvLu.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Blog";
  let allPosts = await getCollection("posts");
  allPosts = allPosts.sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());
  console.log("allPosts: ", allPosts.map((r) => r.data.title));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navigation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/header", "client:component-export": "default" })} ${renderComponent($$result2, "BlogSection", null, { "client:only": "react", "posts": allPosts, "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/blogSection", "client:component-export": "default" })}  </main> ` })}`;
}, "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
