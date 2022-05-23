console.log("Welcome to Rock, Paper, Scissors");


//returning either rock, paper or scissors through an RNG
function computerPlay(){
const computerArray = ["rock", "paper", "scissors"] 
const computerChoice = Math.floor(Math.random() * computerArray.length);
console.log(computerChoice)
return computerArray[computerChoice];
} 

//Player input
function playerPlay(){
  console.log("Do you choose Rock(1), Paper(2) or Scissors(3)");
  let playerChoice = prompt();
}

//Play a round
function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()){
      console.log("Its a draw!!!");
    return("Your choice " + playerSelection);
    }
 }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));


  // Takes amount of max rounds to be played per 1 match
  const playGame = () => {
    for (let i = 0; i < 5; i++) {
      playRound();
   }
  }