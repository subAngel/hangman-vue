<template>
	<AddWord @add="addWord" />

	<div>
		<div
			v-if="words.length === 0"
			class="text-center text-3xl my-28 h-full text-gray-400"
		>
			There are no words
		</div>
		<div
			v-else
			class="mt-7 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6 mx-auto w-8/12 items-center"
		>
			<Word
				v-for="(w, i) in words"
				:word="w"
				@delete="deleteWord(i)"
				v-bind:key="i"
			/>
		</div>
	</div>
</template>

<script setup>
import { onMounted, onBeforeMount, ref } from "vue";
import AddWord from "../components/FormAddWord.vue";
import Word from "../components/Word.vue";

const words = ref(
	localStorage.getItem("words") ? localStorage.getItem("words").split(",") : []
);
const isWordsEmpty = ref(false);

onBeforeMount(() => {
	var array = localStorage.getItem("words");
	words.value = array ? array.split(",") : [];
});

const deleteWord = (index) => {
	console.log(words.value[index], index);
	words.value = words.value.filter((value, i) => i != index);
	localStorage.setItem("words", words.value);
};

const addWord = (word) => {
	words.value.push(word);
	localStorage.setItem("words", words.value);
	isWordsEmpty.value = false;
};
</script>
