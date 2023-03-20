const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	MAX_ATTEMPTS = 6,
	MASK_CHAR = "_";

new Vue({
	el: "#app",
	data: () => ({
		letters: {},
		hiddenWord: [],
		remainingAttempts: 0,
	}),
	async mounted() {
		await Swal.fire(
			"Hangman game",
			"Proudly brought to you by pradfafdaf",
			"info"
		);
		this.resetGame();
	},
	methods: {
		resetGame() {
			this.resetAttempts();
			this.setupKeys();
			this.chooseWord();
		},
		checkGameStatus() {
			if (this.playerWins()) {
				Swal.fire("You win! the word was " + this.getUnhiddenWord());
				this.resetGame();
			}
			if (this.playerLoses()) {
				Swal.fire("You lose. The word was " + this.getUnhiddenWord());
				this.resetGame();
			}
		},
		getUnhiddenWord() {
			let word = "";
			for (const letter of this.hiddenWord) {
				word += letter.letter;
			}
			return word;
		},
		playerWins() {
			for (const letter of this.hiddenWord) {
				if (letter.hidden) {
					return false;
				}
			}
			return true;
		},
		playerLoses() {
			return this.remainingAttempts <= 0;
		},
		imagePath() {
			return `imgages/frame-${MAX_ATTEMPTS - this.remainingAttempts}.png`;
		},
		resetAttempts() {
			this.remainingAttempts = MAX_ATTEMPTS;
		},
		async chooseWord() {
			// get words store in localstorage
			const words = getWords();
			if (!words.length) {
				await Swal.fire(
					"Please add some words so you can play (go ot manage words)"
				);
				window.location = "./words.html";
			}
			/// chose random
			let word = words[math.floor(Math.random() * words.length)];
			this.prepareWord(word);
		},
		prepareWord(word) {
			word = word.toUpperCase();
			const hiddenWord = [];
			for (const letter of word) {
				hiddenWord.push({
					letter,
					hidden: true,
				});
			}
			this.hiddenWord = hiddenWord;
		},
		displayWord() {
			let displayedWord = "";
			for (const letter of this.hiddenWord) {
				if (letter.hidden) {
					displayedWord += MASK_CHAR;
				} else {
					displayedWord += letter.letter;
				}
				displayedWord += " ";
			}
			return displayedWord;
		},
		setupKeys() {
			for (const letter of ALPHABET) {
				Vue.set(this.letters, letter, {
					letter,
					disabled: false, // we disable it when the user clicks on it
				});
			}
		},
		letterExistsInWord(searchedLetter) {
			for (const letter of this.hiddenWord) {
				if (letter.letter === searchedLetter) {
					return true;
				}
			}
			return false;
		},
		discoverletter(letter) {
			for (const index in this.hiddenWord) {
				if (this.hiddenWord[index].letter === letter) {
					this.hiddenWord[index].hidden = false;
				}
			}
		},
		attemptWithLetter(letter) {
			Vue.set(this.letters[letter], "disabled", true);
			if (!this.letterExistsInWord(letter)) {
				this.remainingAttempts -= 1;
			} else {
				this.discoverLetter(letter);
			}
			this.checkGameStatus();
		},
	},
});
