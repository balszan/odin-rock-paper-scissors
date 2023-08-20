function getComputerChoice() {
    let options = ['rock','paper','scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function singleRound (playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == "paper") {
        if(computerSelection=="rock") {
            return "You win! Paper beats rock!";
        } else if(computerSelection=="paper") {
            return "Oopsie! Nobody wins. Try again?"
        } else if(computerSelection=="scissors") {
            return "You lose! Scissors beat paper!";
        }
    } else if(playerSelection.toLowerCase() == "rock") {
        if(computerSelection=="rock") {
            return "Oopsie! Nobody wins. Try again?";
        } else if(computerSelection=="paper") {
            return "You lose! Paper beats rock!"
        } else if(computerSelection=="scissors") {
            return "You win! Rock beats scissors!";
        }
    } else if(playerSelection.toLowerCase() == "scissors") {
            if(computerSelection=="rock") {
                return "You lose! Rock beats scissors!";
            } else if(computerSelection=="paper") {
                return "You win! Scissors beat paper!"
            } else if(computerSelection=="scissors") {
            return "Oopsie! Nobody wins. Try again?";
            }
    }
}


let playerSelection = prompt("Paper, rock or scissors?");
let computerSelection = getComputerChoice();
console.log(singleRound(playerSelection,computerSelection));