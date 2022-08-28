
let computerWins = 0;
let playerWins = 0;
let rounds = 0;
let ties = 0;
document.getElementById("cScore") === "Computer Score: " + computerWins;
document.getElementById("pScore") === "Player Score:  " + playerWins;

function restartGame() {
  computerWins = 0;
  playerWins = 0;
  playerSelection = " ";
  rounds = 0;
  document.getElementById("cScore").innerHTML = "Computer Score: " + computerWins;
  document.getElementById("pScore").innerHTML = "Player Score: " + playerWins;
  document.getElementById("updateBoard").innerHTML = "Who will win?";
}


const playagainBtn = document.getElementById("pA");
const rockButton = document.getElementById("b1");
const paperButton = document.getElementById("b2");
const scButton = document.getElementById("b3");


playagainBtn.addEventListener("click", () => restartGame());
rockButton.addEventListener("click", () => possibleClick("rock"));
paperButton.addEventListener("click", () => possibleClick("paper"));
scButton.addEventListener("click", () => possibleClick("scissors"));

function possibleClick(playerSelection) {
  if (gameOver()) {
    checkWinner();
    return disableB();
  }
  const computerSelection = getComputerChoice();
  function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random.toLowerCase();
  }
  compare(playerSelection, computerSelection);
}


function compare(playerSelection, computerSelection) {

  if (playerSelection == "rock" && computerSelection == "paper") {
    document.getElementById("updateBoard").innerHTML = ("You lose this round! Paper covers rock!");
    computerWins += 1;
    return document.getElementById("cScore").innerHTML = "Computer Score: " + computerWins;
  }
  else if (playerSelection == "paper" && computerSelection == "paper") {
    document.getElementById("updateBoard").innerHTML = ("It's a tie! Play again.");
    return ties += 1;
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    document.getElementById("updateBoard").innerHTML = ("You win this round! Scissors beats paper");
    playerWins += 1;
    return document.getElementById("pScore").innerHTML = "Player Score: " + playerWins;
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    document.getElementById("updateBoard").innerHTML = ("You win this round! rock beats scissors");
    playerWins += 1;
    return document.getElementById("pScore").innerHTML = "Player Score: " + playerWins;
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    document.getElementById("updateBoard").innerHTML = ("You lose this round! Scissors beat paper.");
    computerWins += 1;
    return document.getElementById("cScore").innerHTML = "Computer Score: " + computerWins;
  }
  else if (playerSelection == "scissors" && computerSelection == "scissors") {
    document.getElementById("updateBoard").innerHTML = ("Its a tie! Play again!");
    return ties += 1;
  }
  else if (playerSelection == "rock" && computerSelection == "rock") {
    document.getElementById("updateBoard").innerHTML = ("You tied! play Again!");
    return ties += 1;
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    document.getElementById("updateBoard").innerHTML = ("You win this round! Paper beats rock.");
    playerWins += 1;
    return document.getElementById("pScore").innerHTML = "Player Score: " + playerWins;

  }
  else {
    document.getElementById("updateBoard").innerHTML = ("You lose this round! Rock beats scissors.");
    computerWins += 1;
    return document.getElementById("cScore").innerHTML = "Computer Score: " + computerWins;
  }
}

function disableB() {
  rockButton.removeEventListener("click", () => possibleClick("rock"));
  paperButton.removeEventListener("click", () => possibleClick("paper"));
  scButton.removeEventListener("click", () => possibleClick("scissors"));
}

function checkWinner() {
  if (playerWins > computerWins) {

    return console.log("Congrats you won the most rounds!");

  }
  else if (computerWins > playerWins) {

    return console.log("Duhn Duhn Duhhhh, the computer won the most rounds!");

  }
  else {

    return console.log("Tie all around for 5 rounds!");

  }
}

function gameOver() {
  return playerWins >= 5 || computerWins >= 5;
}
