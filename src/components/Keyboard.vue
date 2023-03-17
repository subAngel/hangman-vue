<template>
	<div class="flex justify-center gap-1 my-2 w-auto mx-auto">
		<Key v-for="(k, i) in keys1" :tecla="k" v-bind:key="i" />
	</div>
	<div class="flex justify-center gap-1 my-2 w-auto mx-auto">
		<Key v-for="(k, i) in keys2" :tecla="k" v-bind:key="i" />
	</div>
	<div class="flex justify-center gap-1 my-2 w-auto mx-auto">
		<Key v-for="(k, i) in keys3" :tecla="k" v-bind:key="i" />
	</div>
	<div class="flex justify-center gap-1 my-2 w-auto mx-auto">
		<Key class="capitalize" tecla="Space" />
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Key from "./Key.vue";

const alphabet1 = ref("qwertyuiop");
const alphabet2 = ref("asdfghjkl");
const alphabet3 = ref("zxcvbnm");
const keys1 = ref(alphabet1.value.split(""));
const keys2 = ref(alphabet2.value.split(""));
const keys3 = ref(alphabet3.value.split(""));
</script>
