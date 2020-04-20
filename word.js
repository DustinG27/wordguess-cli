// connecting letter.js to create the word
var Letter = require("./letter.js");

// create contructor function for a new word with an object array
class Word {
  constructor(answer) {
    // create object array to hold the letter
    this.answer = [];
    // create for loop to create a letter variable and push to object array
    for (let i = 0; i < this.answer.length; i++) {
      let letter = new Letter(answer[i]);
      this.answer.push(letter);
    }

    // create function to display data in terminal
    this.log = function () {
      let answerLog = "";
      for (let i = 0; i < this.answer.length; i++) {
        answerLog += this.answer[i].getLetter();
      }
      console.log(answerLog + "\n---------------------------\n");
    };

    this.userGuess = function (input) {
      for (let i = 0; i < this.answer.length; i++) {
        this.answer[i].guessLetter(input);
      }
    };

    this.revealWord = function() {
      let toString = "";
      for (let i = 0; i < this.answer.length; i++) {
        toString += this.answer[i].revealLetter();
      }
      return toString;
    }
  }
}

module.exports = Word;
