function getComputerChoice() {

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
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {

        let id = button.id;
        let choice = '';
        const container = document.querySelector(".games-container")

        switch(id) {
            case '1':
                choice = 'rock'
            case '2':
                choice = 'paper'
            case '3':
                choice = 'scissors'
        }

        let result = playRound(choice, getComputerChoice())
        let result_text = document.createElement('h3')
        result_text.textContent = 'Result: ' + String(result)
        container.appendChild(result_text)

    });
  });