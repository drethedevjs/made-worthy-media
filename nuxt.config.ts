import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"@nuxt/eslint",
		"@nuxt/ui",
		"nuxt-og-image",
		"@nuxtjs/sitemap",
		"nuxt-seo-utils",
		"@nuxt/image",
		"@nuxt/fonts"
	],
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()]
	},
	site: {
		// og Image config
		url: "https://example.com",
		name: "Made Worthy Media"
	},
	app: {
		head: {
			title: "Made Worthy Media", // default fallback title
			htmlAttrs: {
				lang: "en"
			}
		}
	},
	image: {
		quality: 80,
		format: ["webp"]
	}
});
