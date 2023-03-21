<template>
	<button
		tabindex="-1"
		role="button"
		aria-disabled="true"
		class="uppercase kbd-md"
		@click="keyClick()"
		:disabled="disableKeyOnClick"
	>
		{{ tecla }}
	</button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	tecla: {
		required: true,
		type: String,
	},
});

const emit = defineEmits(["pressed"]);

const disableKeyOnClick = ref(false);

function keyClick() {
	emit("pressed", props.tecla);
	disableKeyOnClick.value = true;
}

// const disabledOnClick = ref(false);
</script>
