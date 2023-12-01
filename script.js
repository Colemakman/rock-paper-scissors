
function getComputerChoice() {

    let choice;
    let num = Math.floor(Math.random()* 3) + 1
    switch(num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection)  {

    console.log(computerSelection)

    lossMessage = "You lose"
    winMessage = "You win"

    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return "Draw"
    }
    
    switch(playerSelection) {
        case "rock": {
            switch(computerSelection) {
                case "paper":
                    return lossMessage
                case "scissors":
                    return winMessage
            }
        }
        case "paper": {
            switch(computerSelection) {
                case "rock":
                    return winMessage
                case "scissors":
                    return lossMessage
            }
        }
        case "scissors": {
            switch(computerSelection) {
                case "rock":
                    return lossMessage
                case "paper":
                    return winMessage
            }
        }
    }
}

function game() {
    for (let i=0; i<5; i++) {
        console.log(playRound(prompt("Your Choice:"), getComputerChoice()));
    }
}