// DOM Manipulation Elements

const menu = document.querySelector("#menu");
const humanSpace = document.querySelector("#humanSpan");
const computerSpace = document.querySelector("#computerSpan");
const humanResult = document.createElement("p");
const computerResult = document.createElement("p");

menu.addEventListener("click", (event) => {
  let target = event.target;
  playRound(getComputerChoice(), target.id);
  humanResult.textContent = `${humanScore}`;
  computerResult.textContent = `${computerScore}`;
  humanSpace.appendChild(humanResult);
  computerSpace.appendChild(computerResult);
});

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
    console.log(`human selects: ${humanChoice}`);
    console.log(`computer selects : ${computerChoice}`);
    console.log("Nobody wins!");
    return 0;
  } else if (humanChoice == "ROCK" && computerChoice == 2) {
    console.log(`human selects: ${humanChoice}`);
    console.log(`computer selects : ${computerChoice}`);
    console.log("Computer wins!");
    return computerScore++;
  } else if (humanChoice == "PAPER" && computerChoice == 1) {
    console.log(`human selects: ${humanChoice}`);
    console.log(`computer selects : ${computerChoice}`);
    console.log("Human wins!");
    return humanScore++;
  } else if (humanChoice == "ROCK" && computerChoice == 3) {
    console.log(`human selects: ${humanChoice}`);
    console.log(`computer selects : ${computerChoice}`);
    console.log("Human wins!");
    return humanScore++;
  } else if (humanChoice == "SCISSORS" && computerChoice == 1) {
    console.log(`human selects: ${humanChoice}`);
    console.log(`computer selects : ${computerChoice}`);
    console.log("Computer wins!");
    return computerScore++;
  } else if (humanChoice == "PAPER" && computerChoice == 3) {
    console.log(`human selects: ${humanChoice}`);
    console.log(`computer selects : ${computerChoice}`);
    console.log("Computer wins!");
    return computerScore++;
  } else if (humanChoice == "SCISSORS" && computerChoice == 2) {
    console.log(`human selects: ${humanChoice}`);
    console.log(`computer selects : ${computerChoice}`);
    console.log("Human wins!");
    return humanScore++;
  }
}

// function playGame(num) {
//   // for (i = 0; i < num; i++) {
//   //   let getHumanChoice = prompt("Choose your weapon: ");
//   //   let humanSelection = getHumanChoice;
//   //   let computerSelection = getComputerChoice();
//   //   playRound(computerSelection, humanSelection);
//   // }
//   if (humanScore > computerScore) {
//     console.log("Humans dominate!");
//   } else {
//     console.log("Computers are coming for us!");
//   }
// }

let computerScore = 0;
let humanScore = 0;
// playGame(5);
