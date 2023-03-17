<template>
	<div class="container mx-auto">
		<h2 class="text-center text-4xl mt-3">Manage Words</h2>
		<div class="flex justify-center mt-5 items-center">
			<form class="flex flex-row items-center justify-around">
				<h2 class="text-xl w-64">Add new word:</h2>
				<input
					type="text"
					placeholder="Word"
					v-model="word"
					class="input input-bordered input-primary w-full max-w-xs mr-3"
				/>
				<button
					class="btn btn-primary"
					@click.prevent="
						addWord(word.toUpperCase().replace(' ', '_'));
						word = '';
					"
					:disabled="word === ''"
				>
					Add
				</button>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add"]);

const word = ref("");

function addWord(word) {
	// word.value();
	emit("add", word);
}
</script>
