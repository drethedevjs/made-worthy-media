<script setup lang="ts">
const route = useRoute();
const mobileMenuOpen = ref(false);

const pages = computed(() => [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about",
		active: route.path.startsWith("/about")
	},
	{
		label: "Services",
		to: "/services",
		active: route.path.startsWith("/services")
	},
	{
		label: "Packages",
		to: "/packages",
		active: route.path.startsWith("/packages")
	}
]);

const toggleMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value);
</script>

<template>
	<header class="bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="shrink-0 font-bold text-xl text-brand-rust">
					<!-- Made Worthy Media -->
					<img src="/images/mwm-logo.png" alt="short brand logo" />
				</div>

				<nav class="hidden md:flex space-x-8">
					<NuxtLink
						v-for="page in pages"
						:key="page.to"
						:to="page.to"
						:class="[
							'px-3 py-2 text-sm font-medium italic transition-colors',
							page.active
								? 'text-brand-brown border-b-2 border-brand-brown'
								: 'text-gray-700 hover:text-brand-brown'
						]"
					>
						{{ page.label }}
					</NuxtLink>
				</nav>
				<button
					class="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
					@click="toggleMenu"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div>
			<nav class="flex md:hidden w-full absolute shadow-2xs" v-show="mobileMenuOpen">
				<ul class="flex flex-col bg-brand-rust w- absolute right-5 rounded-lg">
					<NuxtLink
						:key="page.to"
						v-for="page in pages"
						:to="page.to"
						class="block px-3 py-1 text-xl italic text-brand-light font-medium transition-colors"
						@click="toggleMenu"
					>
						<li class="w-full border-b-2 border-b-brand-sage py-5 text-right">
							{{ page.label }}
						</li>
					</NuxtLink>
				</ul>
			</nav>
		</div>
	</header>
</template>
