<script setup lang="ts">
const steps = ref([
	{
		title: "Submit an Inquiry Form",
		description:
			"Fill out the contact form with your date, venue, and what you're looking for. I'll get back to you within 24-48 hours with availability and next steps.",
		icon: "i-lucide-scroll-text"
	},
	{
		title: "Let's Chat!",
		description:
			"We'll schedule a quick discovery call, local meetup, or text exchange (whatever fits your vibe the most!) to talk through your vision, what coverage you need, add-ons you might be interested in and what package might be the best fit. If you're not sure yet, no worries. That's what I'm here for.",
		icon: "i-lucide-message-circle"
	},
	{
		title: "Secure Your Date",
		description:
			"Once you're ready, I'll send over a custom proposal with your package, contract, and invoice. A 25% non-refundable retainer is required to lock in your date. The remaining balance is due 2 weeks before your wedding. *6% sales tax will be added to the total prices.*",
		icon: "i-lucide-calendar-check"
	},
	{
		title: "Wedding Planning Call",
		description:
			"We'll schedule your content planning call that will last about 45 min-1 hour about a month out to review your timeline, content style, and any specific moments you want captured. You can share your Pinterest Boards and any other inspo you'd like for me to have!",
		icon: "i-lucide-phone-call"
	},
	{
		title: "Wedding Day Coverage",
		description:
			"I'll arrive ready to document your day with intention, creativity, and a calm presence. You'll get to be fully present while I handle the behind-the-scenes magic.",
		icon: "i-lucide-camera"
	},
	{
		title: "Delivery and Keepsakes",
		description:
			"Expect all content within 24-72 hours depending on your package. I'll also deliver your raw iPhone footage via Google Drive.",
		icon: "i-lucide-gift"
	}
]);
</script>

<template>
	<h2 class="text-4xl text-center mb-5">My Process</h2>

	<UTimeline :items="steps" />

	<NuxtLink to="/contact">
		<button
			class="w-full bg-brand-ink rounded-md text-brand-light py-3 hover:bg-brand-light hover:text-brand-ink ring-1 ring-brand-ink transition-colors"
		>
			Contact Me
		</button>
	</NuxtLink>
</template>
