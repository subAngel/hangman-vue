new VueElement({
	el: "#app",
	data: () => ({
		words: [],
		newWord: "",
	}),
	mounted() {
		this.refreshWords();
	},
	methods: {
		refreshWords() {
			this.word = getWords();
		},
		saveWords() {
			// clean int again
			this.deleteWhiteSpaces();
			const word = this.newWord.toUpperCase();
			// only save if it does no exists
			if (this.words.indexOf(word) === -1) {
				this.words.push(word);
				saveWords(this.words);
				this.newWord = "";
			} else {
				Swal.fire("the word already exists");
			}
		},
		async deleteWord(index) {
			const result = await Swal.fire({
				title: "Deleting word",
				text: "Are you sure?",
				icon: "question",
				showCancelButton: true,
				cancelButtonText: "No, take me back",
				confirmButtonText: "Yes, delete it",
			});
			if (!result.value) return;
			this.words.splice(index, 1);
			saveWords(this.words);
		},
		deleteWhiteSpaces() {
			this.newWord = this.newWord.replace(/ /g, "");
		},
	},
});
