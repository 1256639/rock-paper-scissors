let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){

    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");
    const winnerDiv = document.getElementById("winner");
    
    if (humanChoice === computerChoice){
        resultDiv.textContent = "It's a tie"
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    } else {
        computerScore++;
        resultDiv.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }

    scoreDiv.textContent = "Score: You " + humanScore + " - Computer " + computerScore;  

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore){
            winnerDiv.textContent = "You are the winner.";
        } else {
            winnerDiv.textContent = "The computer is the winner.";
        }
    }
}

document.getElementById("rock").addEventListener("click", function(){
    playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", function(){
    playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
});