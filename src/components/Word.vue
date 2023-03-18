<template>
	<div class="alert shadow-lg w-60 sm:w-48">
		<div>
			<i class="fa-solid fa-caret-right"></i>
			<div>
				<h3 class="font-bold">{{ word }}</h3>
			</div>
		</div>
		<div class="flex-none">
			<button
				class="btn btn-ghost btn-sm"
				@click="($event) => $emit('delete')"
			>
				<i class="fa-sharp fa-solid fa-delete-left"></i>
			</button>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	word: {
		required: true,
		type: String,
	},
});
const emit = defineEmits(["delete"]);
</script>
