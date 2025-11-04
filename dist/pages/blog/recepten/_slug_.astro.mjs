/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server__7ZaI1Ga.mjs';
import { r as renderEntry, g as getCollection } from '../../../chunks/_astro_content_D8CWyi8m.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../../../chunks/_astro_assets_Cr577A3f.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_Bq3-qvLu.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://atelierdp.github.io");
async function getStaticPaths() {
  const blogPosts = await getCollection("recepten");
  return blogPosts.map((post) => ({
    params: { slug: post.data.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { recept } = Astro2.props;
  const { Content } = await renderEntry(recept);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test-post" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <article> ${renderComponent($$result2, "Image", $$Image, { "src": recept.data.cover, "alt": recept.data.title, "class": "object-cover object-center !m-0 aspect-square block", "width": 600, "height": 600 })} <h1 class="md:!text-5xl md:!leading-[1.2]">${recept.data.title}</h1> <p class="lead">${recept.data.excerpt}</p> <div> ${renderComponent($$result2, "Content", Content, {})} </div> </article> </div> ` })}`;
}, "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/blog/recepten/[slug].astro", void 0);

const $$file = "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/blog/recepten/[slug].astro";
const $$url = "/blog/recepten/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
