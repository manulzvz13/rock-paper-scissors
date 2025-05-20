// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works

function getComputerChoice () {
    return Math.floor(Math.random() * 3) + 1;
}

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
        return computerScore++;
    } else if (humanChoice == 'PAPER' && computerChoice == 1) {
        console.log('Human wins!');
        return humanScore++;
    } else if (humanChoice == 'ROCK' && computerChoice == 3) {
        console.log('Human wins!');
        return humanScore++;
    } else if (humanChoice == 'SCISSORS' && computerChoice == 1) {
        console.log('Computer wins!');
        return computerScore++;
    } else if (humanChoice == 'PAPER' && computerChoice == 3) {
        console.log('Computer wins!');
        return computerScore++;
    } else if (humanChoice == 'SCISSORS' && computerChoice == 2) {
        console.log('Human wins!');
        return humanScore++;
    } 
}

function playGame(num) {
    for (i = 0; i<num; i++){
        let getHumanChoice = prompt('Choose your weapon: ');
        let humanSelection = getHumanChoice;
        let computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    }
    if (humanScore > computerScore){
        console.log('Humans dominate!');
    } else {
        console.log('Computers are coming for us!');
    }
}

let computerScore = 0;
let humanScore = 0;

playGame(5);