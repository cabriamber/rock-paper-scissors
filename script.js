let userWins = 0; 
let computerWins = 0; 

/* 
let userChoice = 'y';
//console.log(userChoice);
function getUserChoice() { //when called prompt the user to make a choice and return the result 
  let userInput = prompt("Rock, Paper, or Scissors?");
  console.log(userInput);
  let choice = userInput.toLowerCase(); 
  console.log("You chose " + choice);
  userChoice = choice; 
  return choice; 
} */

let userChoice = ''; 
console.log(userChoice);
const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () => {
  //console.log("user chose rock")
  userChoice = "rock"; 
  console.log(userChoice);
} )

const paperButton = document.getElementById("paper"); 
paperButton.addEventListener("click", () => {
  userChoice = "paper"; 
  console.log(userChoice);
})

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
  userChoice = "scissors"; 
  console.log(userChoice); 
})



function getRandom() { //returns randomly either 0, 1 or 2
  let number = Math.floor(Math.random() * 3);
  return number;  
}

let computerChoice = 'x';
//console.log(computerChoice);
const computerOptions = ["rock", "paper", "scissors"]
function getComputerChoice() {
  let randomNumber = getRandom(); 
  let choice = computerOptions[randomNumber];
  console.log("The computer chose " +choice);
  computerChoice = choice; 
  return choice; 
}
//let x = getComputerChoice();
//console.log(computerChoice)

//let computerChoice = getComputerChoice(); 
//console.log("The computer chose " +computerChoice);



function getWinner() { //determine the winner of the round and display an appropriate message
  if (computerChoice === userChoice) {
    console.log("It's a tie! Try again!")
    return "It's a tie! Try again!";
  }
  else if (computerChoice == "rock" && userChoice == "paper") {
    console.log("Paper covers rock! You win!")
    userWins = userWins +1; 
    return "Paper covers rock! You win!";
  }
  else if (computerChoice == "rock" && userChoice == "scissors") {
    console.log("Rock smashes scissors! You lose!")
    computerWins = computerWins +1; 
    return "Rock smashes scissors! You lose!"; 
  }
  else if (computerChoice == "scissors" && userChoice == "paper") {
    console.log("Scissors cut paper! You lose!")
    computerWins = computerWins +1; 
    return "Scissors cut paper! You lose!";
  }
  else if (computerChoice == "scissors" && userChoice == "rock") {
    console.log ("Rock smashes scissors! You win!")
    userWins = userWins +1; 
    return "Rock smashes scissors! You win!";
  }
  else if (computerChoice == "paper" && userChoice == "rock") {
    console.log("Paper covers rock! You lose!")
    computerWins = computerWins +1; 
    return "Paper covers rock! You lose!"; 
  }
  else if (computerChoice = "paper" && userChoice == "scissors") {
    console.log("Scissors cut paper! You win!")
    userWins = userWins +1; 
    return "Scissors cut paper! You win!";
  }

}


/*
function playRound() {
  let userChoice = getUserChoice(); 
  let computerChoice = getComputerChoice();
  let winner = getWinner(); 
  console.log(winner); 
  console.log("Computer "+ computerWins)
  console.log("You " + userWins)

}

//let outcome = getWinner();

let x = playRound();

let rounds = 0; 

function game() {
  while (rounds < 5) {
    playRound(); 
    rounds = rounds +1; 
  }
}

game(); 
*/
