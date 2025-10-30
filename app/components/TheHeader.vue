<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about",
		active: route.path.startsWith("/about")
	}
]);
</script>

<template>
	<UHeader>
		<template #title>
			<!-- <NuxtImg class="max-w-40" src="/images/logo-transparent-secondary-wht.png" /> -->
			Made Worthy Media
		</template>
		<UNavigationMenu :items="items" />

		<template #body>
			<UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
		</template>

		<template #right>
			<UColorModeButton />
		</template>
	</UHeader>
</template>
