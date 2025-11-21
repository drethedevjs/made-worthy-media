<script setup lang="ts">
import Super8Packages from "~/components/Super8Packages.vue";
const contentPackages = [
	{
		id: "golden-hour",
		title: "Golden Hour",
		price: "$850",
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

const addOns = [
	{
		price: "$150",
		service: "Additional hour of coverage"
	},
	{
		price: "$450",
		service: "Elopements and microweddings (4 hours)"
	},
	{
		price: "$425",
		service: "One Super 8 roll"
	},
	{
		price: "$125",
		service: "Polaroid book"
	},
	{
		price: "$175",
		service: "Guest interviews"
	}
];
</script>

<template>
	<Super8Packages />
	<div class="flex flex-col lg:flex-row py-10">
		<div class="w-full lg:w-1/2 p-10">
			<h2 class="text-4xl uppercase tracking-widest mb-10">Wedding Content Creation Packages</h2>

			<div v-for="cPackage in contentPackages" :key="cPackage.id" class="p-5 flex flex-col">
				<div class="justify-between flex">
					<h3 class="xl:text-xl text-lg uppercase tracking-wider text-brand-brown mb-2">
						{{ cPackage.title }}
					</h3>
					<p class="text-xl tracking-widest text-brand-brown mb-4">{{ cPackage.price }}</p>
				</div>

				<ul class="space-y-2 uppercase text-brand-brown mb-6 list-disc ml-8">
					<li
						v-for="feature in cPackage.features"
						:key="feature"
						class="items-start gap-2 tracking-widest"
					>
						{{ feature }}
					</li>
				</ul>
			</div>
		</div>
		<div class="w-full lg:w-1/2 p-10">
			<h2 class="text-4xl uppercase tracking-widest mb-10">Custom Packages and Add-Ons</h2>
			<table class="w-full uppercase tracking-widest">
				<tbody>
					<tr
						v-for="item in addOns"
						:key="item.service"
						class="border-b-2 border-dashed text-xl h-32"
					>
						<td>{{ item.price }}</td>
						<td class="pl-32">{{ item.service }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
