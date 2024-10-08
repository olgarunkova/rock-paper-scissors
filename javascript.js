
const choices = [ "rock", "paper", "scissors"]
const playerChoiceChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const resultDisplay = document.querySelector("#resultDisplay");

let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");

let computerChoice = choices[Math.floor(Math.random() * 3)];

let playerResult = 0;
let computerResult = 0;



function playRound(playerChoice)  {

    playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;

    resultDisplay.classList.remove("greenText", "redText");

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "IT'S A TIE!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDisplay.textContent = "YOU WIN!";
        resultDisplay.classList.add("greenText");
        playerResult++;
        playerScore.textContent = `${playerResult}`;
    } else {
        resultDisplay.textContent = "COMPUTER WINS!";
        resultDisplay.classList.add("redText");
        computerResult++;
        computerScore.textContent = `${computerResult}`;
    }
}



