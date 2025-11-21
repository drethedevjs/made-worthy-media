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
	<UContainer class="mx-auto py-16">
		<div class="text-center mb-12">
			<h2 class="page-header">Super 8 Packages</h2>
			<p class="text-gray-600 italic mt-2">Analog. Honest. Nostalgic.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div
				v-for="tier in tiers"
				:key="tier.id"
				class="border border-amber-300 rounded-2xl p-8 shadow-md bg-amber-50 flex flex-col"
			>
				<h3 class="text-4xl tracking-widest uppercase font-thin text-amber-800 mb-1 text-center">
					{{ tier.title }}
				</h3>
				<p class="uppercase tracking-wide text-amber-700 text-sm mb-4 text-center">
					{{ tier.subtitle }}
				</p>

				<ul class="space-y-2 text-gray-800 mb-6">
					<li v-for="feature in tier.features" :key="feature" class="flex items-start gap-2">
						<UIcon name="i-lucide-check" class="text-amber-600 mt-0.5" />
						<span>{{ feature }}</span>
					</li>
				</ul>

				<p class="text-2xl font-semibold text-amber-900 mt-auto mb-4 text-center">
					{{ tier.price }}
				</p>

				<UButton
					label="Book Now"
					class="w-full flex justify-center bg-brand-ink hover:text-brand-ink"
				/>
			</div>
		</div>
		<ul class="uppercase mt-8 text-base md:text-2xl text-brand-rust space-y-2">
			<li>Travel beyond 60 miles- custom based off of distance</li>
			<li>Additional super 8 roll: <span class="text-brand-ink font-semibold">$250</span></li>
			<li>Film with audio snippets: <span class="text-brand-ink font-semibold">$800</span></li>
		</ul>

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
