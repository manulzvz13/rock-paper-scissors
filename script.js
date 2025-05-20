// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works

function getComputerChoice () {
    return Math.floor(Math.random() * 3) + 1;
}

let getHumanChoice = prompt('Choose your weapon: ');

let computerScore = 0;
let humanScore = 0;

function playRound (computerChoice, humanChoice) {
    humanChoice = humanChoice.toUpperCase();
    // Rock vs Paper = Wins Paper *
    // Rock vs Rock = Nobody wins *
    // Rock vs Scissors = Wins Rock *
    // Paper vs Paper = Nobody wins *
    // Paper vs Scissors = Wins Scissors *
    // Scissors vs Scissors = Nobody wins *
    if(humanChoice == 'ROCK' && computerChoice == 1 || humanChoice == 'PAPER' && computerChoice == 2 || humanChoice == 'SCISSORS' && computerChoice == 3) {
        console.log('Nobody wins!');
        return;
    } else if (humanChoice == 'ROCK' && computerChoice == 2) {
        console.log('Computer wins!');
        return computerChoice++;
    } else if (humanChoice == 'PAPER' && computerChoice == 1) {
        console.log('Human wins!');
        return humanChoice;
    } else if (humanChoice == 'ROCK' && computerChoice == 3) {
        console.log('Human wins!');
        return humanChoice++;
    } else if (humanChoice == 'SCISSORS' && computerChoice == 1) {
        console.log('Computer wins!');
        return computerChoice;
    } else if (humanChoice == 'PAPER' && computerChoice == 3) {
        console.log('Computer wins!');
        return computerChoice++;
    } else if (humanChoice == 'SCISSORS' && computerChoice == 2) {
        console.log('Human wins!');
        return humanChoice;
    } 
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice;

playRound(computerSelection, humanSelection);