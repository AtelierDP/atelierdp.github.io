import { b as createAstro, c as createComponent, a as renderTemplate, g as renderSlot, i as renderHead, j as addAttribute } from './astro/server__7ZaI1Ga.mjs';
import 'clsx';
/* empty css                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://atelierdp.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, metaDescription } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Noto+Sans:300,400,500,600,700,800|PT+Mono:300,400,500,600,700" rel="stylesheet"><title>', ' by Pauwel Demeyer</title><meta name="description"', '><meta name="generator"', '><!-- Google Tag Manager --><!--\n    <script>\n      (function (w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n        var f = d.getElementsByTagName(s)[0],\n          j = d.createElement(s),\n          dl = l != "dataLayer" ? "&l=" + l : "";\n        j.async = true;\n        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n        f.parentNode.insertBefore(j, f);\n      })(window, document, "script", "dataLayer", "GTM-NKDMSK6");\n  -->', '</head> <!-- End Google Tag Manager --> <body class="overflow-x-hidden"> <!-- Google Tag Manager (noscript) --> <!--\n    <noscript>\n      <iframe\n        src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6"\n        height="0"\n        width="0"\n        style="display:none;visibility:hidden">\n      </iframe>\n    </noscript>\n  --> <!-- End Google Tag Manager (noscript) --> ', ' </body><!--\n  <script\n    src="https://kit.fontawesome.com/349ee9c857.js"\n    crossOrigin="anonymous"\n  ><\/script>\n--></html>'])), title, addAttribute(metaDescription, "content"), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/pauwel.demeyer/Git/atelierdp.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
