// create links and proper require
const Word = require("./word.js");
const inquirer = require("inquirer");
// var colors = require("colors");

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
let finalWord = "";
let counter = 8;

// function to select a random word from the word array
function randomWord() {
  let randomIndex = Math.floor(Math.random() * classicPunk.length);
  // console.log(randomNum);
  let currentWord = classicPunk[randomIndex];
  // console.log(currentWord);

  // passes random word through the word contructor
  computerWord = new Word(currentWord);

  

  console.log(currentWord);
  console.log(computerWord);
  
  startGame();

  function startGame() {
    if (counter <= 0) {
      // console.log(computerWord.userGuess);
      counter = 8;
      startGame();
    } else {
      inquirer.prompt([
        {
          type: "input",
          message: "Select a letter between A and Z",
          name: "userInput",
        },
      ]).then(function(input){
          checkAnswer(input);
      });
    }
  }
}

function checkAnswer(input) {

}

randomWord();
