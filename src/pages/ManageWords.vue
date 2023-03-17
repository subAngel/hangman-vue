<template>
	<AddWord @add="addWord" />

	<div
		class="mt-7 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6 mx-auto w-8/12 items-center"
	>
		<Word
			v-for="(w, i) in words"
			:word="w"
			@delete="deleteWord(i)"
			v-bind:key="i"
		/>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import AddWord from "../components/FormAddWord.vue";
import Word from "../components/Word.vue";

const words = ref(["GUACAMOLE"]);

const deleteWord = (index) => {
	console.log(words.value[index], index);
	words.value = words.value.filter((value, i) => i != index);
	localStorage.setItem("words", JSON.stringify(words));
};

const addWord = (word) => {
	words.value.push(word);
	localStorage.setItem("words", JSON.stringify(words));
};
</script>
