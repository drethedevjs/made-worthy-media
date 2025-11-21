<script setup lang="ts">
import Super8Packages from "~/components/Super8Packages.vue";
const contentPackages = [
	{
		id: "golden-hour",
		title: "Golden Hour",
		price: "$850",
		description: "6 hours of iPhone coverage",
		features: [
			"6 hours of iPhone coverage",
			"Raw footage delivered within 24 hours",
			"Guest interviews",
			"Pre-wedding consult"
		],
		button: { label: "Book Golden Hour" }
	},
	{
		id: "sunrise-to-sunset",
		title: "Sunrise to Sunset",
		price: "$1,500",
		description: "8 hours of iPhone coverage",
		features: [
			"8 hours of iPhone coverage",
			"Edited highlight video and one additional short form video (30–90 seconds)",
			"Hundreds of raw footage delivered within 24–48 hours",
			"Guest Interviews",
			"Polaroid Photobook (includes 20 polaroids)",
			"Pre-wedding consult"
		],
		button: { label: "Book Sunrise to Sunset" }
	},
	{
		id: "the-lux",
		title: "The Lux",
		price: "$2,800",
		description: "10 hours of full-day coverage",
		features: [
			"10 hours coverage",
			"Edited highlight video and two additional edits",
			"3 short-form videos (30–90 seconds)",
			"Highlight film (2–3 minutes, with music)",
			"Guest interviews",
			"Polaroid photobook (includes 20+ polaroids)",
			"Social media takeover — story posts",
			"Raw footage delivered within 24 hours",
			"Pre-wedding consult"
		],
		button: { label: "Book The Lux", color: "neutral" as const }
	}
];
</script>

<template>
	<Super8Packages />
	<UContainer class="mx-auto py-16">
		<div class="text-center mb-12 mt-10">
			<h2 class="page-header">Wedding Content Packages</h2>
			<p class="text-gray-600 italic mt-2">Candidly captured. Eternally worthy.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
			<div
				v-for="cPackage in contentPackages"
				:key="cPackage.id"
				class="border border-amber-300 rounded-2xl p-5 shadow-md bg-amber-50 flex flex-col h-full"
			>
				<h3 class="xl:text-4xl text-2xl font-script text-amber-700 mb-2">{{ cPackage.title }}</h3>
				<p class="text-xl font-semibold text-amber-900 mb-4">{{ cPackage.price }}</p>
				<p class="text-sm text-gray-700 mb-4">{{ cPackage.description }}</p>

				<ul class="space-y-2 text-sm text-gray-800 mb-6">
					<li v-for="feature in cPackage.features" :key="feature" class="flex items-start gap-2">
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
