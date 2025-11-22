<script lang="ts" setup>
const { icon, text } = defineProps({
	icon: {
		type: String,
		default: "i-lucide-x"
	},
	text: {
		type: String,
		default: "Missing!"
	}
});
</script>
<template>
	<div class="flex flex-row gap-4 items-center">
		<UIcon :name="icon" class="size-5 lg:size-20" />
		<p class="lg:text-3xl!">{{ text }}</p>
	</div>
</template>
