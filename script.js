// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toUpperCase();
  if (
    (humanChoice == "ROCK" && computerChoice == 1) ||
    (humanChoice == "PAPER" && computerChoice == 2) ||
    (humanChoice == "SCISSORS" && computerChoice == 3)
  ) {
    console.log("Nobody wins!");
    return;
  } else if (humanChoice == "ROCK" && computerChoice == 2) {
    console.log("Computer wins!");
    return computerScore++;
  } else if (humanChoice == "PAPER" && computerChoice == 1) {
    console.log("Human wins!");
    return humanScore++;
  } else if (humanChoice == "ROCK" && computerChoice == 3) {
    console.log("Human wins!");
    return humanScore++;
  } else if (humanChoice == "SCISSORS" && computerChoice == 1) {
    console.log("Computer wins!");
    return computerScore++;
  } else if (humanChoice == "PAPER" && computerChoice == 3) {
    console.log("Computer wins!");
    return computerScore++;
  } else if (humanChoice == "SCISSORS" && computerChoice == 2) {
    console.log("Human wins!");
    return humanScore++;
  }
}

function playGame(num) {
  for (i = 0; i < num; i++) {
    let getHumanChoice = prompt("Choose your weapon: ");
    let humanSelection = getHumanChoice;
    let computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
  }
  if (humanScore > computerScore) {
    console.log("Humans dominate!");
  } else {
    console.log("Computers are coming for us!");
  }
}

let computerScore = 0;
let humanScore = 0;

// playGame(5);

const menu = document.querySelector("#menu");
menu.addEventListener('click', (event) => {
  let target = event.target;
  switch(target.id) {
    case 'rock':
      console.log('human selects rock');
      break;
    case 'paper':
      console.log('human selects paper');
      break;
    case 'scissors':
      console.log('human selects scissors');
      break;
  }
});
