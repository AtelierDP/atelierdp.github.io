/* empty css                               */
import { c as createComponent, m as maybeRenderHead, a as renderTemplate } from '../chunks/astro/server__7ZaI1Ga.mjs';
import 'clsx';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Bio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-dj7dmf6w> <img src="/assets/profile-pic.webp" alt="Headshot of Maxi Ferreira" data-astro-cid-dj7dmf6w> <p data-astro-cid-dj7dmf6w>
Hi, I'm <strong data-astro-cid-dj7dmf6w>Maxi</strong>. I'm a software engineer and data scientist based in Los Angeles.
    You can follow me on <a href="https://www.twitter.com/Charca" target="_blank" data-astro-cid-dj7dmf6w>Twitter</a>,
    see some of my work on <a href="https://www.github.com/Charca" target="_blank" data-astro-cid-dj7dmf6w>GitHub</a>,
    or read more about me on <a href="https://www.maxiferreira.com" target="_blank" data-astro-cid-dj7dmf6w>my website</a>.
</p> </div> `;
}, "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/bio.astro", void 0);

const $$file = "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/pages/bio.astro";
const $$url = "/bio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
