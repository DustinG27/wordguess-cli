// letter constructure function to be used by word.js
class Letter {
  constructor(char) {
    // create value to store character
    this.letter = char;
    // create value to store if letter was guessed
    this.guessed = false;
  }
  //create function to return true if guess is correct
  guessLetter(input) {
    if (input === this.letter) {
      this.guessed = true;
    }
  }
  // create function to return letter and black underline if false
  getLetter() {
    if (this.guessed) {
      return this.letter;
    } else {
      return "_";
    }
  }
  revealLetter() {
      return this.letter;
  }
}

// exporting to be used by word.js
module.exports = Letter;
