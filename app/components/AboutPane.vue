<script setup lang="ts">
import ContactMethod from "./ContactMethod.vue";
</script>

<template>
	<section class="place-items-center bg-brand-ink">
		<div class="flex lg:flex-row w-full">
			<div class="hidden lg:w-5/12">
				<NuxtImg src="/images/adeline-deverin.jpg" />
			</div>

			<div
				class="w-full lg:w-7/12 text-brand-light uppercase text-center tracking-widest my-auto px-10 py-10 lg:py-0"
			>
				<NuxtImg
					src="/images/adeline-deverin.jpg"
					class="flex lg:hidden rounded-full drop-shadow-2xl h-60 place-self-center mb-4"
				/>

				<h2 class="text-5xl lg:text-8xl mb-5">Adeline Muff</h2>
				<h3 class="text-3xl lg:text-5xl mb-10">Super 8 Film + Wedding Content Creation</h3>

				<div class="lg:space-y-3 lg:place-items-center">
					<ContactMethod icon="i-lucide-mail" text="madeworthymedia@gmail.com" />
					<ContactMethod icon="i-lucide-instagram" text="@madeworthymedia" />
					<ContactMethod icon="i-lucide-map-pin" text="Based in Lexington, Kentucky" />
				</div>
			</div>
		</div>
	</section>
</template>
