<template>
	<div class="container mx-auto flex flex-col items-center w-full">
		<h2 class="uppercase text-center self-start text-4xl mt-5">hangman Game</h2>

		<!-- * ahorcado -->
		<div>
			<span class="letter" v-for="letter in getRandomWord">
				{{ letter }}
			</span>
		</div>

		<!-- * teclas -->
		<div class="fixed bottom-0 w-full mx-auto">
			<div class="flex justify-center gap-2 my-2 mx-auto w-1/3 flex-wrap">
				<Key
					v-for="(k, i) in keys1"
					:tecla="k"
					v-bind:key="i"
					@pressed="letterInput(k, i)"
				/>
			</div>

			<div class="flex justify-center gap-1 my-2 w-auto mx-auto">
				<Key class="capitalize" tecla="Space" @pressed="letterInput('_')" />
			</div>
		</div>
	</div>

	<!-- // keyboard-->
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Key from "../components/Key.vue";

const alphabet = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const keys1 = ref(alphabet.value.split(""));

// * propiedades del juego
const words = ref(localStorage.getItem("words").split(","));
const secretWord = ref([]);
const game = ref(true);
const win = ref(false);
const lose = ref(false);
const ATTEMPTS = 5;
const mistakes = ref(0);
const hits = ref(0);

onMounted(() => {
	// reiniciar el juego
	game.value = true;
	win.value = false;
	lose.value = false;
	mistakes.value = 0;
	hits.value = 0;
	// secretWord.value = getRandomWord();
	// console.log(secretWord.value);
	console.log(getRandomWord.value);
});

const getRandomWord = computed(() => {
	return words.value[Math.floor(Math.random() * words.value.length)].split("");
});

const letterInput = (letra, index) => {
	if (game.value) {
		for (i = 0; i < getRandomWord.value.length; i++) {
			if (letter == getRandomWord[i]) {
				hits.value += 1;
			}
		}
	}
};
</script>

<style scoped>
.letter {
	margin: 0 5px;
	font-size: 23px;
	position: relative;
	text-align: center;
	font-weight: bold;
	border-bottom: 2px solid black;
}
/* .letter::after {
	content: " ";
	display: block;
	position: absolute;
	left: 0;
	width: 100%;
	height: 1px;
	text-align: center;
	border-bottom: 1px solid black;
	min-width: 12px;
} */
</style>
