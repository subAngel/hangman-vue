<template>
	<button class="uppercase kbd">{{ tecla }}</button>
</template>

<script setup>
const props = defineProps({
	tecla: {
		required: true,
		type: String,
	},
});
const emit = defineEmits(["pressed"]);
</script>
