let stillPlaying = true;
let computerWins = 0;
let playerWins = 0;
let ties = 0;
let playerSelection = " ";
let rounds = 0;
document.getElementById("cScore").innerHTML = "Computer Score: " + computerWins;
document.getElementById("pScore").innerHTML = "Player Score: " + playerWins;



let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.innerText.toLowerCase();
    compare(playerSelection, computerSelection);
    if (playerWins == 5 || computerWins == 5) {
      checkWinner();
    }
  });
});



function compare(playerSelection, computerSelection) {

  if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You lose this round! Paper covers rock!");
    computerWins += 1;
    return document.getElementById("cScore").innerHTML = "Computer Score: " + computerWins;
  }
  else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log("It's a tie! Play again.");
    return ties += 1;
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win this round! Scissors beats paper");
    playerWins += 1;
    return document.getElementById("pScore").innerHTML = "Player Score: " + playerWins;
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You win this round! rock beats scissors");
    playerWins += 1;
    return document.getElementById("pScore").innerHTML = "Player Score: " + playerWins;
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose this round! Scissors beat paper.");
    computerWins += 1;
    return document.getElementById("cScore").innerHTML = "Computer Score: " + computerWins;
  }
  else if (playerSelection == "scissors" && computerSelection == "scissors") {
    console.log("Its a tie! Play again!");
    return ties += 1;
  }
  else if (playerSelection == "rock" && computerSelection == "rock") {
    console.log("You tied! play Again!");
    return ties += 1;
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You win this round! Paper beats rock.");
    playerWins += 1;
    return document.getElementById("pScore").innerHTML = "Player Score: " + playerWins;

  }
  else {
    console.log("You lose this round! Rock beats scissors.");
    computerWins += 1;
    return document.getElementById("cScore").innerHTML = "Computer Score: " + computerWins;
  }
}

const computerSelection = getComputerChoice();
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random.toLowerCase();
}

function checkWinner() {
  if (playerWins > computerWins) {
    console.log("Congrats you won the most rounds!");

  }
  else if (computerWins > playerWins) {
    console.log("Duhn Duhn Duhhhh, the computer won the most rounds!");

  }
  else {
    console.log("Tie all around for 5 rounds!");

  }
}


