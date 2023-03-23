<template>
	<div
		v-if="show"
		class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75 glass"
	>
		<div
			class="flex w-2/5 justify-center flex-col items-center border rounded-3xl h-2/6 p-3 bg-neutral-content text-center opacity-75"
		>
			<h3 class="font-bold text-xl">{{ msg }}</h3>
			<p class="py-4">{{ body }}</p>
			<div class="">
				<label @click="unShowModal()" class="btn btn-accent">Restart</label>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	msg: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	show: {
		type: Boolean,
		default: false,
	},
});
const emits = defineEmits(["restart"]);

const showModal = ref(false);

const closeModal = () => {
	emits("restart");
	showModal.value = false;
};
</script>
