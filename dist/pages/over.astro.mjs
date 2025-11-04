/* empty css                               */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, g as renderSlot, _ as __astro_tag_component__, h as createVNode, F as Fragment } from '../chunks/astro/server__7ZaI1Ga.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bq3-qvLu.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://atelierdp.github.io");
const $$DefaultLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const { title, metaDescription } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/header", "client:component-export": "default" })} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/footer", "client:component-export": "default" })} </main> ` })}`;
}, "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/layouts/DefaultLayout.astro", void 0);

const frontmatter = {
  "title": "Over Atelier DP",
  "description": "Wat informatie over Atelier DP"};
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "welcome",
      children: "Welcome"
    }), "\n", createVNode(_components.p, {
      children: "We believe in collaboration and technology."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/content/pages/over.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const features = [{"icon":"<EyeIcon className=\"h-6 w-6\" strokeWidth={2} />","title":"Check our team","description":"For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one"},{"icon":"<ChatBubbleOvalLeftEllipsisIcon className=\"h-6 w-6\" strokeWidth={2} />","title":"Support 24/7","description":"As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others."}];
const OverData = {
  features,
};

const $$Over = createComponent(($$result, $$props, $$slots) => {
  console.log("Overdata in Over.astro:", OverData);
  const { title, description } = frontmatter;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": title, "metaDescription": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "OverContent.Content", Content, {})} ${renderComponent($$result2, "Features", null, { "features": OverData.features, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/features", "client:component-export": "default" })} ` })}`;
}, "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/over.astro", void 0);

const $$file = "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/over.astro";
const $$url = "/over";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Over,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
