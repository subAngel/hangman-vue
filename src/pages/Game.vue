<template>
	<div class="container mx-auto flex flex-col items-center w-full">
		<h2 class="uppercase text-center text-4xl mt-5">hangman Game</h2>

		<!-- * ahorcado -->
		<div>
			{{ secretWord }}
		</div>

		<!-- * teclas -->
		<div class="fixed bottom-0 w-full mx-auto">
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
				<Key
					class="capitalize"
					tecla="Space"
					@pressed="teclaPresionada('_')"
				/>
			</div>
		</div>
	</div>

	<!-- // keyboard-->
</template>

<script setup>
import { onMounted, ref } from "vue";
import Key from "../components/Key.vue";

const alphabet1 = ref("QWERTYUIOP");
const alphabet2 = ref("ASDFGHJKL");
const alphabet3 = ref("ZXCVBNM");
const keys1 = ref(alphabet1.value.split(""));
const keys2 = ref(alphabet2.value.split(""));
const keys3 = ref(alphabet3.value.split(""));

const words = ref(localStorage.getItem("words").split(","));
const secretWord = ref("");

const teclaPresionada = (keycap) => {
	console.log(keycap);
};

onMounted(() => {
	secretWord.value = getRandomWord();
});

const getRandomWord = () => {
	return words.value[Math.floor(Math.random() * words.value.length)];
};
</script>
