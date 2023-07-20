function numToChoice(choiceNum) {
    let choice = "";
    switch(choiceNum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function choiceToNum(choice) {
    let choiceNum = 0;
    switch(choice) {
        case "rock":
            choice = 0;
            break;
        case "paper":
            choice = 1;
            break;
        case "scissors":
            choice = 2;
            break;
    }
    return choiceNum;
}

function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    return choiceNum;
}

function getPlayerChoice() {
    let choice = prompt("rock, paper, or scissors");
    let choiceNum = choiceToNum(choice);
    return choiceNum;
}

function playRound(playerSelection, computerSelection) {
    result = "";

    switch(playerSelection){
        case 0:
            switch(computerSelection){
                case 0:
                    result = "draw";
                    break;
                case 1:
                    result = "lose";
                    break;
                case 2:
                    result = "win";
                    break;
            }
            break;
        case 1:
            switch(computerSelection){
                case 0:
                    result = "win";
                    break;
                case 1:
                    result = "draw";
                    break;
                case 2:
                    result = "lose";
                    break;
            }
            break;
        case 2:
            switch(computerSelection){
                case 0:
                    result = "lose";
                    break;
                case 1:
                    result = "win";
                    break;
                case 2:
                    result = "draw";
                    break;
            }
            break;
    }

    return result;
}

let playerChoice = 0;
let computerChoice = 0;
let playerScore = 0;
let computerScore = 0;

for(let i = 0; i < 5; i++) {
    console.log("Round: " + i);
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log("player uses " + numToChoice(playerChoice));
    console.log("computer uses " + numToChoice(computerChoice));
    let result = playRound(playerChoice, computerChoice);
    switch(result) {
        case "win":
            playerScore++;
            console.log("Player wins this round");
            break;
        case "lose":
            computerScore++;
            console.log("Computer wins this round");
            break;
        case "draw":
            console.log("Draw");
            break;
    }
}

if(playerScore > computerScore) {
    console.log("Player has won");
}else if(playerScore < computerScore){
    console.log("Computer has won");
}else if(playerScore == computerScore){
    console.log("Game ends in a draw");
}