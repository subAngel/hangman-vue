<template>
	<input type="checkbox" id="my-modal" class="modal-toggle" />
	<label for="my-modal" class="modal cursor-pointer">
		<label
			class="modal-box relative flex flex-col justify-center items-center"
			for=""
		>
			<h3 class="text-lg font-bold text-center">{{ msg }}</h3>
			<label
				for="my-modal"
				@click="$emit('restart')"
				class="btn btn-primary w-48 mx-auto mt-5"
			>
				Restart game
			</label>
		</label>
	</label>
</template>

<script setup>
const props = defineProps(["msg"]);
const emits = defineEmits(["restart"]);
</script>
