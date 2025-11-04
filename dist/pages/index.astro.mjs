/* empty css                               */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server__7ZaI1Ga.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bq3-qvLu.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Presentation Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navigation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/header", "client:component-export": "default" })} ${renderComponent($$result2, "FeatureFront", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/featureFront", "client:component-export": "default" })} ${renderComponent($$result2, "FeaturePresentation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/feature", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/footer", "client:component-export": "default" })} </main> ` })}
)
`;
}, "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/index.astro", void 0);

const $$file = "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
