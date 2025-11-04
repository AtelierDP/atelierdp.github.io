/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server__7ZaI1Ga.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_D8CWyi8m.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Bq3-qvLu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://atelierdp.github.io");
async function getStaticPaths() {
  const blogPosts = await getCollection("posts");
  return blogPosts.map((post) => ({
    params: { slug: post.data.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  console.log("In [slug].astro, blogpost: ", post);
  const { Content } = await renderEntry(post);
  console.log("In [slug].astro, recept title: ", post.data.title);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Navigation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/components/generic/header", "client:component-export": "default" })}  <section class="py-28 px-4"> <div class="container mx-auto mb-20 text-center"> <h1 class="md:!text-5xl md:!leading-[1.2]">${post.data.title}</h1> <p class="lead">${post.data.excerpt}</p> <div>  ${renderComponent($$result2, "Content", Content, {})} </div> </div> </section> </main> ` })}`;
}, "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
