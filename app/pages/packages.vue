<script setup lang="ts">
const tiers = [
	{
		id: "morning-light",
		title: "Morning Light",
		price: "$750",
		description: "4 hours of iPhone coverage",
		features: [
			"15–30 second edited reel",
			"Raw footage delivered within 24–48 hours",
			"Guest interviews",
			"Pre-wedding consult"
		],
		button: { label: "Book Morning Light", variant: "subtle" as const }
	},
	{
		id: "golden-hour",
		title: "Golden Hour",
		price: "$1,000",
		description: "6 hours of iPhone coverage",
		features: [
			"1 edited reel",
			"Vertical highlight video (1 minute)",
			"Raw footage delivered within 24–48 hours",
			"Guest interviews",
			"Pre-wedding consult"
		],
		button: { label: "Book Golden Hour" }
	},
	{
		id: "sunrise-to-sunset",
		title: "Sunrise to Sunset",
		price: "$1,300",
		description: "8 hours of iPhone coverage",
		features: [
			"2 edited short-form videos (reels or TikToks)",
			"Vertical highlight film (2–3 minutes)",
			"Raw footage delivered within 24–48 hours",
			"Guest interviews",
			"Polaroid Photobook",
			"Pre-wedding consult"
		],
		highlight: true,
		button: { label: "Book Sunrise to Sunset" }
	},
	{
		id: "the-lux",
		title: "The Lux",
		price: "$2,000",
		description: "10 hours of full-day coverage",
		features: [
			"3 short-form edits tailored to your aesthetic",
			"Vertical highlight film (2–3 minutes, with music)",
			"Guest interviews",
			"Polaroid Guestbook",
			"Pre-wedding coverage: rehearsal dinner, etc. (up to 2 hours)",
			"Raw footage delivered within 24 hours",
			"Pre-wedding consult"
		],
		button: { label: "Book The Lux", color: "neutral" as const }
	}
];
</script>

<template>
	<UContainer class="mx-auto py-16">
		<div class="text-center mb-12">
			<h2 class="page-header">Packages</h2>
			<p class="text-gray-600 italic mt-2">Candidly captured. Eternally worthy.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
			<div
				v-for="tier in tiers"
				:key="tier.id"
				class="border border-amber-300 rounded-2xl p-5 shadow-md bg-amber-50 flex flex-col h-full"
				:class="tier.highlight ? 'ring-2 ring-amber-500' : ''"
			>
				<h3 class="xl:text-4xl text-2xl font-script text-amber-700 mb-2">{{ tier.title }}</h3>
				<p class="text-xl font-semibold text-amber-900 mb-4">{{ tier.price }}</p>
				<p class="text-sm text-gray-700 mb-4">{{ tier.description }}</p>

				<ul class="space-y-2 text-sm text-gray-800 mb-6">
					<li v-for="feature in tier.features" :key="feature" class="flex items-start gap-2">
						<UIcon name="i-lucide-check" class="text-amber-600 mt-0.5" />
						<span>{{ feature }}</span>
					</li>
				</ul>

				<UButton
					label="Book Now"
					class="w-full flex justify-center items-center bg-brand-ink hover:text-brand-ink mt-auto"
				/>
			</div>
		</div>
	</UContainer>
</template>
