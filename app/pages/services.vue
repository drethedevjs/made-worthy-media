<script setup lang="ts">
import serviceData from "@/data/services";

const services = ref(serviceData);
</script>
<template>
	<section>
		<UContainer class="mwm-container">
			<div class="text-center mb-12">
				<h2 class="page-header">Services</h2>
				<p class="text-gray-600 italic mt-2 tracking-widest">
					A <span class="font-script text-4xl text-brand-brown">snapshot</span> of the services I
					offer.
				</p>
				<p>
					Each package includes raw and unedited iPhone footage, fast delivery, BTS moments,
					pre-wedding planning call, an edited video (length depends on package you choose), and a
					full gallery via Google Drive with hundreds of clips.
				</p>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<UPageCard
					v-for="service in services"
					:key="service.id"
					:title="service.title"
					:description="service.description"
					:icon="service.icon"
					class="text-brand-light!"
				/>
			</div>
		</UContainer>
	</section>
</template>
