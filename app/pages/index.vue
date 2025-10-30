<script lang="ts" setup>
import PageHero from "@/components/PageHero.vue";

const mwmAttrs = ref([
	{
		title: "Heartfelt",
		description:
			"It's the way your mom places your veil in your hair. The teary smile your future husband gives when they think no one's watching. These are the moments that I watch and capture. At Made Worthy Media, I don't just film your wedding day. I witness it, feel it, and preserve the pieces of your story that matter most.",
		icon: "i-lucide-hand-heart"
	},
	{
		title: "Authentic",
		description:
			"I'm not here to stage your day. I'm here to capture it as it really happened. The messy, beautiful, joy-filled moments. The real smiles, the shaky hands, the in-between giggles. That's what makes your wedding feel like you.",
		icon: "i-lucide-fingerprint"
	},
	{
		title: "Sentimental",
		description:
			"After the day ends and the dress is tucked away, you'll want to remember the little things. The way you laughed during toasts. How your flower girl twirled in her dress. I'm here to help those memories live on, not just as content, but as keepsakes you'll cherish.",
		icon: "i-lucide-message-circle-heart",
		to: "/docs/getting-started/integrations/color-mode"
	}
]);
</script>

<template>
	<section>
		<PageHero class="border-y-2" />
		<UContainer>
			<AboutPane />

			<USeparator icon="i-lucide-camera" class="font-bold text-5xl" color="primary" />

			<UPageSection
				title="Words to Describe Made Worthy Media"
				description="These three words capture the heart of my approach—what Made Worthy Media stands for, and how I preserve your wedding memories through video."
				:features="mwmAttrs"
				class="text-brand-light!"
			/>
		</UContainer>
	</section>
</template>
