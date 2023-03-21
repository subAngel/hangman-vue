<template>
	<button
		tabindex="-1"
		role="button"
		aria-disabled="true"
		class="uppercase kbd kbd-lg md:kbd-md font-mono bg-lime-400"
		@click="keyClick()"
		:disabled="disableKeyOnClick"
		:class="[disableKeyOnClick ? 'bg-lime-100' : '']"
	>
		{{ tecla }}
	</button>
</template>

<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
	tecla: {
		required: true,
		type: String,
	},
});

const emit = defineEmits(["pressed"]);

const disableKeyOnClick = ref(false);

// * emitir un evento
function keyClick() {
	emit("pressed", props.tecla);
	disableKeyOnClick.value = true;
}

// const disabledOnClick = ref(false);
</script>
