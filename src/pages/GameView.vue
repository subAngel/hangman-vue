<template>
	<Game :key="componentKey" @restart-game="forceRerender" />
</template>

<script setup>
import { ref } from "vue";
import Game from "./Game.vue";
const componentKey = ref(0);
// const emit = defineEmits([""]);

const forceRerender = () => {
	componentKey.value += 1;
};
</script>
