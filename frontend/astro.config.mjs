// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

const { VITE_SANITY_DATASET, VITE_SANITY_PROJECT_ID } = import.meta.env;

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/productos/categoria": "/productos",
    "/blog/categoria": "/blog",
  },
  integrations: [sanity({
    projectId: VITE_SANITY_PROJECT_ID,
    dataset: VITE_SANITY_DATASET,
    useCdn: false,
  }), react()],
});