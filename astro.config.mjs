import { defineConfig } from "astro/config";

import mdx from '@astrojs/mdx';
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), tailwind()],
  site: "https://atelierdp.github.io",
  base: "/",
});


