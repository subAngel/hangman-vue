<template>
	<div
		v-if="show"
		class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75 glass"
	>
		<div
			class="flex w-2/5 justify-around flex-col items-center border rounded-3xl h-2/6 p-3 bg-neutral-content text-center opacity-75 ease-in duration-300"
		>
			<!-- <h3 class="font-bold text-xl">{{ title }}</h3> -->
			<slot name="title" />
			<slot name="body" />
			<!-- <label @click="closeModal()" class="btn btn-accent">Restart</label> -->
			<div class="">
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
});
// const emits = defineEmits(["restart"]);
</script>
