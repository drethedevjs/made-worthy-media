<script setup lang="ts">
const tiers = [
	{
		id: "the-reverie",
		title: "The Reverie",
		subtitle: "Tier 1",
		price: "$2,800",
		features: [
			"2 rolls of Super 8 film (≈ 6 minutes of footage)",
			"Uncut silent Super 8 footage",
			"Up to 6 hours of wedding-day coverage",
			"1–2 minute highlight film edited to music of your choice",
			"Pre-wedding creative consult for tone + color direction",
			"Your original film reel",
			"Digital delivery gallery"
		]
	},
	{
		id: "the-daydream",
		title: "The Daydream",
		subtitle: "Tier 2",
		price: "$3,600",
		features: [
			"3 rolls of Super 8 film (≈ 9 minutes)",
			"Up to 8 hours of coverage",
			"Uncut silent Super 8 footage",
			"3–4 minute highlight edited to music of your choice",
			"Pre-wedding creative consult for tone + color direction",
			"Your original film reels",
			"Digital delivery"
		]
	},
	{
		id: "afterglow",
		title: "After Glow",
		subtitle: "Tier 3",
		price: "$4,400",
		features: [
			"4 rolls of Super 8 film (≈ 12 minutes)",
			"Full-day coverage (up to 10 hours)",
			"5–6 minute highlight film with sound and music",
			"USB + digital gallery delivery",
			"Priority turnaround"
		]
	}
];
</script>
<template>
	<section class="bg-brand-super-package px-5 md:px-32 py-16">
		<div class="md:mb-12">
			<h2 class="text-brand-light page-header">Super 8 Packages</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<div
				v-for="tier in tiers"
				:key="tier.id"
				class="p-10 flex flex-col"
				:class="
					tier.title === 'The Daydream'
						? 'border-y-2 lg:border-y-0 lg:border-x-2 border-brand-light'
						: ''
				"
			>
				<h3 class="text-4xl tracking-widest uppercase font-thin text-brand-light mb-1 text-center">
					{{ tier.title }}
				</h3>
				<p class="uppercase tracking-wide text-brand-light text-sm mb-4 text-center">
					{{ tier.subtitle }}
				</p>

				<ul class="space-y-2 text-brand-light mb-6 list-disc">
					<li v-for="feature in tier.features" :key="feature" class="items-start gap-2">
						{{ feature }}
					</li>
				</ul>

				<p class="text-4xl! font-semibold text-brand-light mt-auto mb-4 text-center">
					{{ tier.price }}
				</p>
			</div>
		</div>
		<ul class="uppercase mt-8 text-base md:text-2xl text-brand-light space-y-2">
			<li>Travel beyond 60 miles- custom based off of distance</li>
			<li>Additional super 8 roll: <span class="text-brand-sage font-semibold">$250</span></li>
			<li>Film with audio snippets: <span class="text-brand-sage font-semibold">$800</span></li>
		</ul>
	</section>
</template>
