<template>
	<div class="stats shadow w-3/12">
		<div class="stat">
			<div class="stat-title">Hits</div>

			<div class="stat-value text-primary">{{ ModelHits }}</div>
		</div>
		<div class="stat">
			<div class="stat-title">Mistakes</div>
			<div class="stat-value text-error">{{ modelMistakes }}</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(["modelMistakes", "ModelHits"]);
</script>
