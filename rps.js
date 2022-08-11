

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random.toLowerCase();
}

let computerWins = 0;
let playerWins = 0;
let ties = 0;





function compare(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You lose this round! Paper covers rock!");
    return computerWins += 1;
  }
  else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log("It's a tie! Play again.");
    return ties += 1;
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win this round! Scissors beats paper");
    return playerWins += 1;
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You win this round! rock beats scissors");
    return playerWins += 1;
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose this round! Scissors beat paper.");
    return computerWins += 1;
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
    return playerWins += 1;
  }
  else {
    console.log("You lose this round! Rock beats scissors.");
    return computerWins += 1;
  }
}



function game() {
  for (let i = 0; i < 5; i++) {
    var playerChoice = true;
    var playerSelection;
    function getComputerChoice() {
      const choices = ["Rock", "Paper", "Scissors"];
      const random = choices[Math.floor(Math.random() * choices.length)];
      return random.toLowerCase();
    }
    const computerSelection = getComputerChoice();
    while (playerChoice) {
      playerSelection = prompt("Please enter either rock, paper, or scissors");
      if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        playerChoice = false;
        compare(playerSelection, computerSelection);
        console.log("Computer has won", computerWins);
        console.log("Player has won:", playerWins);
      } else {
        playerChoice = true;
      }
    }
  }
  if (playerWins > computerWins) {
    console.log("Congrats you won the most rounds!");
  }
  else if (computerWins > playerWins) {
    console.log("Duhn Duhn Duhhhh, the computer won the most rounds!")
  }
  else {
    console.log("Tie all around for 5 rounds!")
  }
}

game();