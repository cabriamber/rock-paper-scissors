const computerOptions = ["rock", "paper", "scissors"]
// create an array representing possible computer choices 

//let userInput = prompt("Rock, Paper, or Scissors?"); // prompt the user to make their choice 
//console.log(userInput);

//let userChoice = userInput.toLowerCase(); 
//console.log("You chose " + userChoice); //coerce the user choice to all lower case 

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
console.log("The computer chose " +computerChoice);

let userWins = 0; 
let computerWins = 0; 

function getWinner() { //determine the winner of the round and display an appropriate message
  if (computerChoice === userChoice) {
    console.log("It's a tie! Try again!")
  }
  else if (computerChoice == "rock" && userChoice == "paper") {
    console.log("Paper covers rock! You win!")
    userWins = userWins +1; 
  }
  else if (computerChoice == "rock" && userChoice == "scissors") {
    console.log("Rock smashes scissors! You lose!")
    computerWins = computerWins +1; 
  }
  else if (computerChoice == "scissors" && userChoice == "paper") {
    console.log("Scissors cut paper! You lose!")
    computerWins = computerWins +1; 
  }
  else if (computerChoice == "scissors" && userChoice == "rock") {
    console.log ("Rock smashes scissors! You win!")
    userWins = userWins +1; 
  }
  else if (computerChoice == "paper" && userChoice == "rock") {
    console.log("Paper covers rock! You lose!")
    computerWins = computerWins +1; 
  }
  else if (computerChoice = "paper" && userChoice == "scissors") {
    console.log("Scissors cut paper! You win!")
    userWins = userWins +1; 
  }

}

//let outcome = getWinner(); 