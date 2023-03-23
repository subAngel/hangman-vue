<template>
	<div class="container mx-auto flex flex-col items-center w-full">
		<!-- <h2 class="uppercase text-center text-slate-300 text-4xl mt-5">
			hangman Game
		</h2> -->

		<!-- * stats -->

		<Stats
			v-model:ModelHits="hits"
			v-bind:model-mistakes="mistakes"
			class="my-4 fixed left-8"
		/>

		<!-- * ahorcado -->
		<div class="mt-8">
			<span class="letter" v-for="letter in wordDisplayed">
				{{ letter }}
			</span>
		</div>

		<!-- * teclas -->
		<div class="fixed bottom-0 w-full mx-auto mb-4">
			<div class="flex justify-center gap-2 my-2 mx-auto w-1/3 flex-wrap">
				<Key
					v-for="(key, index) in keys"
					:tecla="key"
					v-bind:key="index"
					v-bind:disabled="keybuttons[index]"
					@pressed="letterInput(key, index)"
				/>
			</div>
		</div>
	</div>
	<!-- * MODAL -->
	<Modal :show="modalInfo.show">
		<template v-slot:title>
			<h3 class="font-bold text-xl">{{ modalInfo.title }}</h3>
		</template>
		<template v-slot:body>
			<p class="text-center">{{ modalInfo.body }}</p>
		</template>
		<template v-slot:footer>
			<label
				@click="
					modalInfo.show = false;
					restartGame();
				"
				class="btn btn-accent"
				>Restart</label
			>
		</template>
	</Modal>

	<!-- // keyboard-->
</template>

<script setup>
import { computed, onMounted, ref, reactive } from "vue";
import Key from "../components/Key.vue";
import Stats from "../components/Stats.vue";
import Modal from "../components/Modal.vue";

const alphabet = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const keys = ref(alphabet.value.split(""));

// * propiedades del juego
const words = ref(localStorage.getItem("words").split(","));
const secretWord = ref([]);
const wordDisplayed = ref([]);
const keybuttons = ref([]);
const game = ref(true);
const win = ref(false);
const lose = ref(false);
const ATTEMPTS = 6;
const mistakes = ref(0);
const hits = ref(0);

const modalInfo = reactive({
	title: "",
	body: "",
	show: false,
});

onMounted(() => {
	// reiniciar el juego
	game.value = true;
	secretWord.value = getRandomWord.value;
	wordDisplayed.value = secretWord.value.map((letter) => "_");
	win.value = false;
	lose.value = false;
	mistakes.value = 0;
	hits.value = 0;
	keybuttons.value = [];
	console.log(secretWord.value);
	// console.log(wordDisplayed.value);
});

const getRandomWord = computed(() => {
	return words.value[Math.floor(Math.random() * words.value.length)].split("");
});

const letterInput = (key, index) => {
	if (game.value) {
		let countflag = 0;
		keybuttons.value[index] = true;
		for (let i = 0; i <= getRandomWord.value.length; i++) {
			// console.log(key, getRandomWord.value[i]);
			if (key == getRandomWord.value[i]) {
				wordDisplayed.value[i] = key;
				countflag++;
				hits.value++;
			}
		}
		if (countflag == 0) {
			mistakes.value++;
		}
		if (hits.value === getRandomWord.value.length) {
			win.value = true;
			game.value = false;
			modalInfo.title = "Congratulations!!!";
			modalInfo.body = "Do you want to play again?";
			modalInfo.show = true;
			// console.log(win.value);
		}
		if (mistakes.value === ATTEMPTS) {
			lose.value = true;
			game.value = false;
			modalInfo.title = "Oh, tonto xd";
			modalInfo.body = "The secret word was " + secretWord.value;
			modalInfo.show = true;
		}
	}
};

const restartGame = () => {
	console.log("click");
};
</script>

<style scoped>
.letter {
	margin: 0 5px;
	font-size: 32px;
	position: relative;
	text-align: center;
	font-weight: bold;
	/* border-bottom: 2px solid black; */
}
</style>
