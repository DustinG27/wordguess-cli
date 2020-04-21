// create links and proper require
const Word = require("./word.js");
const inquirer = require("inquirer");
// var colors = require("colors");
let letterArray = "qwertyuiopasdfghjklzxcvbnm";
// create array for the words
let classicPunk = [
  "jfa",
  "decendents",
  "misfits",
  "adolescents",
  "joy division",
  "black flag",
  "bad religion",
  "dead kennedys",
  "beastie boys",
  "minor threat",
  "operation ivy",
];

// Pick Random index from UnitedStates array
let randomIndex = Math.floor(Math.random() * classicPunk.length);
let randomWord = classicPunk[randomIndex];
// Pass random word through Word constructor
let computerWord = new Word(randomWord);
// variables to hold user guesses and game counter
let incorrectLetters = [];
let correctLetters = [];
let guessesLeft = 8;
// variable to call for a new word if the game is selected for replay
let requireNewWord = false;


// function to select a random word from the word array
function theLogic() {
    // Generates new word for Word constructor if true
    if (requireNewWord) {
      // Selects random UnitedStates array
      var randomIndex = Math.floor(Math.random() * classicPunk.length);
      var randomWord = classicPunk[randomIndex];
  
      // Passes random word through the Word constructor
      computerWord = new Word(randomWord);
  
      requireNewWord = false;
    }
  
    // TestS if a letter guessed is correct
    var wordComplete = [];
    computerWord.objArray.forEach(completeCheck);
  
    // letters remaining to be guessed
    if (wordComplete.includes(false)) {
      inquirer
        .prompt([
          {
            type: "input",
            message: "Guess a letter between A-Z!",
            name: "userinput"
          }
        ])
        .then(function(input) {
          if (
            !letterArray.includes(input.userinput) ||
            input.userinput.length > 1
          ) {
            console.log("\nPlease try again!\n");
            theLogic();
          } else {
            if (
              incorrectLetters.includes(input.userinput) ||
              correctLetters.includes(input.userinput) ||
              input.userinput === ""
            ) {
              console.log("\nAlready Guessed or Nothing Entered\n");
              theLogic();
            } else {
              // Checks if guess is correct
              var wordCheckArray = [];
  
              computerWord.userGuess(input.userinput);
  
              // Checks if guess is correct
              computerWord.objArray.forEach(wordCheck);
              if (wordCheckArray.join("") === wordComplete.join("")) {
                console.log("\nIncorrect\n");
  
                incorrectLetters.push(input.userinput);
                guessesLeft--;
              } else {
                console.log("\nCorrect!\n");
  
                correctLetters.push(input.userinput);
              }
  
              computerWord.log();
  
              // Print guesses left
              console.log("Guesses Left: " + guessesLeft + "\n");
  
              // Print letters guessed already
              console.log(
                "Letters Guessed: " + incorrectLetters.join(" ") + "\n"
              );
  
              // Guesses left
              if (guessesLeft > 0) {
                // Call function
                theLogic();
              } else {
                console.log("Sorry, you lose!\n");
  
                restartGame();
              }
  
              function wordCheck(key) {
                wordCheckArray.push(key.guessed);
              }
            }
          }
        });
    } else {
      console.log("YOU WIN!\n");
  
      restartGame();
    }
  
    function completeCheck(key) {
      wordComplete.push(key.guessed);
    }
  }
  
  function restartGame() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Would you like to:",
          choices: ["Play Again", "Exit"],
          name: "restart"
        }
      ])
      .then(function(input) {
        if (input.restart === "Play Again") {
          requireNewWord = true;
          incorrectLetters = [];
          correctLetters = [];
          guessesLeft = 10;
          theLogic();
        } else {
          return;
        }
      });
  }
  
  theLogic();