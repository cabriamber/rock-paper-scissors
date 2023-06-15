let userWins = 0; 
let computerWins = 0; 

let computerChoice = 'x';
let userChoice = ''; 

const computerOptions = ["rock", "paper", "scissors"]

const buttons = document.getElementById("buttons");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper"); 
const scissorsButton = document.getElementById("scissors");

const promptBar = document.getElementById("notice"); 
const score = document.getElementById("score");

const computerScore = document.getElementById("computerScore");
const userScore = document.getElementById("userScore"); 
const outcomeMessage = document.getElementById("determineWinner");

const displayUserChoice = document.getElementById("userChoiceInfo"); 
const displayComputerChoice = document.getElementById("computerChoiceInfo"); 

const currentRoundReport = document.getElementById("currentRoundReport"); 


rockButton.addEventListener("click", () => {
  userChoice = "rock";
  displayUserChoice.textContent = `You chose ${userChoice}`; 
  console.log(userChoice);
  playRound(); 
} )

paperButton.addEventListener("click", () => {
  userChoice = "paper"; 
  displayUserChoice.textContent = `You chose ${userChoice}`;
  console.log(userChoice);
  playRound();
})


scissorsButton.addEventListener("click", () => {
  userChoice = "scissors"; 
  console.log(userChoice);
  displayUserChoice.textContent = `You chose ${userChoice}`;
  playRound();  
})



function getRandom() { //returns randomly either 0, 1 or 2
  let number = Math.floor(Math.random() * 3);
  return number;  
}

function getComputerChoice() {
  let randomNumber = getRandom(); 
  let choice = computerOptions[randomNumber];
  console.log("The computer chose " +choice);
  computerChoice = choice; 
  return choice; 
}

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

function gameFinished() {
  buttons.remove();
  promptBar.remove();
  score.textContent = "FINAL SCORE"; 
  displayUserChoice.remove(); 
  displayComputerChoice.remove(); 
  outcomeMessage.remove();

}

function computerVictory() {
  const computerVictory = document.createElement('div');
  computerVictory.textContent = "THE COMPUTER DEFEATED YOU!";
  currentRoundReport.appendChild(computerVictory); 
}

function userVictory() {
  const userVictory = document.createElement('div'); 
  userVictory.textContent = "YOU DEFEATED THE COMPUTER!";
  currentRoundReport.appendChild(userVictory); 
}

function checkForWinningScore() {
  if (computerWins === 5) {
    setTimeout(gameFinished, 1500); 
    setTimeout(computerVictory, 1500); 

  }
  else if (userWins ===5) {
    setTimeout(gameFinished, 1500); 
    setTimeout(userVictory, 1500); 

  }
}

function playRound() {
  //let userChoice = getUserChoice(); 
  let computerChoice = getComputerChoice();
  displayComputerChoice.textContent = `The computer chose ${computerChoice}`;
  let message = getWinner(); 
  outcomeMessage.textContent = `${message}`

  console.log("Computer "+ computerWins)
  console.log("You " + userWins)

  computerScore.textContent = `Computer: ${computerWins}`;
  userScore.textContent = `User: ${userWins}`; 

  checkForWinningScore();

}