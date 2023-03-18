<template>
	<div class="container">
		<h2 class="uppercase text-center text-5xl mt-5">hangman</h2>
	</div>

	<!-- // keyboard-->
	<div class="w-96 mx-auto">
		<div class="flex justify-center gap-1 my-2 w-auto mx-auto">
			<Key
				v-for="(k, i) in keys1"
				:tecla="k"
				v-bind:key="i"
				@pressed="teclaPresionada(k)"
			/>
		</div>
		<div class="flex justify-center gap-1 my-2 w-auto mx-auto">
			<Key
				v-for="(k, i) in keys2"
				:tecla="k"
				v-bind:key="i"
				@pressed="teclaPresionada(k)"
			/>
		</div>
		<div class="flex justify-center gap-1 my-2 w-auto mx-auto">
			<Key
				v-for="(k, i) in keys3"
				:tecla="k"
				v-bind:key="i"
				@pressed="teclaPresionada(k)"
			/>
		</div>
		<div class="flex justify-center gap-1 my-2 w-auto mx-auto">
			<Key class="capitalize" tecla="Space" @pressed="teclaPresionada('_')" />
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Key from "../components/Key.vue";

const alphabet1 = ref("qwertyuiop");
const alphabet2 = ref("asdfghjkl");
const alphabet3 = ref("zxcvbnm");
const keys1 = ref(alphabet1.value.split(""));
const keys2 = ref(alphabet2.value.split(""));
const keys3 = ref(alphabet3.value.split(""));

const teclaPresionada = (keycap) => {
	console.log(keycap);
};
</script>
