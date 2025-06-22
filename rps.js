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

function getHumanChoice(){
    while (true){
        const choice = prompt("rock, paper or scissors:").toLowerCase();
    
        if (choice === "rock" || choice === "paper" || choice === "scissors"){
            return choice;
        } else {
            alert("Invalid input. Enter rock, paper or scissors")
        }
    }  
}

function playRound(humanChoice, computerChoice){
    
    if (humanChoice === computerChoice){
        console.log("It's a tie.");
        return;
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        console.log("Score: You " + humanScore + " - Computer " + computerScore);
    }

    if (humanScore > computerScore){
        console.log("You are the winner");
    } else if (computerScore > humanScore){
        console.log("The computer is the winner");
    } else {
        console.log("It's a tie");
    }
}

playGame();