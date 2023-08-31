

function getComputerChoice() {
    let options = ['rock','paper','scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function singleRound (playerSelection, computerSelection) {
    if(playerSelection == "paper") {
        if(computerSelection=="rock") {
            console.log("You win! Paper beats rock!");
            return true;
        } else if(computerSelection=="paper") {
            console.log("Oopsie! Nobody wins. Try again?");
            return false;
        } else if(computerSelection=="scissors") {
            console.log("You lose! Scissors beat paper!");
            return false;
        }
    } else if(playerSelection == "rock") {
        if(computerSelection=="rock") {
            console.log("Oopsie! Nobody wins. Try again?");
            return false;
        } else if(computerSelection=="paper") {
            console.log("You lose! Paper beats rock!");
            return false;
        } else if(computerSelection=="scissors") {
            console.log("You win! Rock beats scissors!");
            return true;
        }
    } else if(playerSelection == "scissors") {
            if(computerSelection=="rock") {
                console.log("You lose! Rock beats scissors!");
                return false;
            } else if(computerSelection=="paper") {
                console.log("You win! Scissors beat paper!");
                return true;
            } else if(computerSelection=="scissors") {
                console.log("Oopsie! Nobody wins. Try again?");
                return false;
            }
    }
}


const computerChoice = getComputerChoice();

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');



rock.addEventListener('click', () => {
    console.log('The computer chose ' + computerChoice);
    const result = singleRound('rock', computerChoice);
});

paper.addEventListener('click', () => {
    console.log('The computer chose ' + computerChoice);
    const result = singleRound('paper', computerChoice);
});

scissors.addEventListener('click', () => {
    console.log('The computer chose ' + computerChoice);
    const result = singleRound('scissors', computerChoice);
});


/*function game() {
        let playerWins = 0;

    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Paper, rock or scissors?");
        let computerSelection = getComputerChoice();
        let singleGame = singleRound(playerSelection,computerSelection);
        if(singleGame==true) {
            playerWins++;
        } 
        
    }
    if(playerWins>=3) {
        console.log("YOU WON THE GAME!");
    } else {
        console.log("You lost the game.");
    }
}


game();*/