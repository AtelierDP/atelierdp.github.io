/* empty css                               */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server__7ZaI1Ga.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bq3-qvLu.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Error Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Content404", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/404/content", "client:component-export": "default" })} </main> ` })}`;
}, "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/404.astro", void 0);

const $$file = "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
