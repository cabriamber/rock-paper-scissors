const computerOptions = ["rock", "paper", "scissors"]
// create an array representing possible computer choices 

let userInput = prompt("Rock, Paper, or Scissors?"); 
console.log(userInput);

let userChoice = userInput.toLowerCase(); 
console.log(userChoice);

function getRandom() { //returns randomly either 0, 1 or 2
  let number = Math.floor(Math.random() * 3);
  return number;  
}
let x = getRandom()
//console.log(x)

function getComputerChoice() {
  let randomNumber = getRandom(); 
  let choice = computerOptions[randomNumber];
  return choice; 
}
let computerChoice = getComputerChoice(); 
//console.log(computerChoice);