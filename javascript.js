

function getComputerChoice() {
    let options = ['rock','paper','scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function singleRound (playerSelection, computerSelection) {


    if(playerSelection == "paper") {
        if(computerSelection=="rock") {
            return true;
        } else if(computerSelection=="scissors") {
            return false;
        }
    } else if(playerSelection == "rock") {
        if(computerSelection=="paper") {
            return false;
        } else if(computerSelection=="scissors") {
            return true;
        }
    } else if(playerSelection == "scissors") {
            if(computerSelection=="rock") {
                return false;
            } else if(computerSelection=="paper") {
                return true;
            } 
    }
}


    const results = document.querySelector('#results');
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const playerDisplay = document.querySelector('#playerScoreDisplay');
    const computerDisplay = document.querySelector('#computerScoreDisplay');

    let playerScore = 0;
    let computerScore = 0;

    

    
        rock.addEventListener('click', () => {
            let computerChoice = getComputerChoice();
            let result = singleRound('rock', computerChoice);
            let announcement = "";

            if(result==false) {
                announcement = "You lose!";
                computerScore++;
                computerDisplay.textContent = "Computer score: "+computerScore;

            } else if(result==true) {
                announcement = "You win!";
                playerScore++;
                playerDisplay.textContent = "Player score: "+playerScore;

            } else {
                announcement = "Nobody wins. Try again?";
            }

            results.textContent = "The computer chose " + computerChoice + ". " +announcement;
            if(playerScore>=3) {
                alert("You win!");
            } else if (computerScore>=3) {
                alert("You lose!");
            }
    
    
        });
    
        paper.addEventListener('click', () => {
            let computerChoice = getComputerChoice();
            let result = singleRound('paper', computerChoice);
            let announcement = "";

            if(result==false) {
                announcement = "You lose!";
                computerScore++;
                computerDisplay.textContent = "Computer score: "+computerScore;

            } else if(result==true) {
                announcement = "You win!";
                playerScore++;
                playerDisplay.textContent = "Player score: "+playerScore;

            } else {
                announcement = "Nobody wins. Try again?";
            }

            results.textContent = "The computer chose " + computerChoice + ". " +announcement;
            if(playerScore>=3) {
                alert("You win!");
            } else if (computerScore>=3) {
                alert("You lose!");
            }
        });
    
        scissors.addEventListener('click', () => {
            let computerChoice = getComputerChoice();
            let result = singleRound('scissors', computerChoice);
            let announcement = "";

            if(result==false) {
                announcement = "You lose!";
                computerScore++;
                computerDisplay.textContent = "Computer score: "+computerScore;

            } else if(result==true) {
                announcement = "You win!";
                playerScore++;
                playerDisplay.textContent = "Player score: "+playerScore;

            } else {
                announcement = "Nobody wins. Try again?";
            }

            results.textContent = "The computer chose " + computerChoice + ". " +announcement;
            if(playerScore>=3) {
                alert("You win!");
            } else if (computerScore>=3) {
                alert("You lose!");
            }
        });
    
   














