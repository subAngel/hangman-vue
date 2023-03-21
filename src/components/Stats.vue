<template>
	<div class="stats shadow-xl w-1/5 text-center flex bg-accent">
		<div class="stat w-2/4">
			<div class="stat-title font-bold">Hits</div>
			<div class="stat-value text-primary text-center">{{ ModelHits }}</div>
		</div>
		<div class="stat w-2/4">
			<div class="stat-title font-bold">Mistakes</div>
			<div class="stat-value text-error text-center">{{ modelMistakes }}</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(["modelMistakes", "ModelHits"]);
</script>
