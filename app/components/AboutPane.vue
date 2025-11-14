<script setup lang="ts"></script>

<template>
	<section class="py-20 place-items-center">
		<NuxtImg
			class="rounded-full h-52 shadow-lg hover:scale-95 hover:rotate-1 transition-transform"
			src="/images/adeline-deverin.jpg"
		/>

		<h2 class="mt-5 text-3xl font-bold text-brand-rust">About Me</h2>

		<div class="text-justify px-8 pt-4 grid gap-4">
			<p>
				Welcome to a world where your love story unfolds through the timeless beauty of Super 8
				film. I'm Adeleine, a passionate wedding videographer specializing in capturing your most
				precious day in the warm, nostalgic aesthetic of analog film. While digital cameras capture
				moments, Super 8 film preserves the soul of your wedding—the organic grain, the soft color
				palette, and that dreamy, cinematic quality that transforms your special day into a living
				memory.
			</p>
			<p>
				Every frame tells the story of your love with an authenticity that digital simply cannot
				replicate. Let me document your wedding day in a way that will transport you back to those
				magical moments every time you watch it, creating a treasured keepsake that will be passed
				down through generations.
			</p>
			<NuxtLink to="/about" class="place-self-center">
				<button class="italic hover:underline font-semibold">Learn More</button>
			</NuxtLink>
		</div>
	</section>
</template>
