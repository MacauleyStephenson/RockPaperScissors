console.log("welcome to Rock, Paper, Scissors");


//returning either rock, paper or scissors through an RNG
function computerPlay(){
 const computerArray = ["rock", "paper", "scissors"] 
const computerChoice = Math.floor(Math.random() * computerArray.length);
console.log(computerChoice)
return computerArray[computerChoice];
} 

function playerPlay(){
  console.log("Do you choose ")
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()){
      console.log("Its a draw!!!");
    return("Your choice " + playerSelection);
    }
 }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
