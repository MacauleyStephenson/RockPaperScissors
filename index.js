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
  console.log("Do you choose Rock(1), Paper(2) or Scissors(3) ?");
  let playerChoice = prompt("Do you choose Rock(1), Paper(2) or Scissors(3) ?");
  if (playerChoice.toLowerCase() === "rock" || parseInt(playerChoice()) === 1){ 
    playerChoice = 'rock'
  }else if(playerChoice.toLowerCase() === "paper" || parseInt(playerChoice()) === 2){
    playerChoice = 'paper'
  }else if(playerChoice.toLowerCase() === "scissors" || parseInt(playerChoice()) === 3){
    playerChoice = 'scissors'
} else if(playerChoice.toLowerCase() !== "rock" || "scissors" ||"paper" || parseInt(playerChoice() !== (1) || (2) || (3)))  {
alert("PLease enter your selection again")
playerSelection();
}else{
  console.log("Not sure what you're doing, try again");
}
return playerChoice();
}

//Play a round
function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()){
      console.log("Its a draw!!!");
    return("Your choice is " + playerSelection + ". " + "Computer: " + computerSelection);
    }else if(computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors" ){
      console.log("Rock beats scissors, you loose! ") 
      return("Your choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    }else if(computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock"){
      console.log("Rock beats scissors, you won!")
      return("Your choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    }else if(computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper"){
    console.log("scissors beats paper, you loose!")
    return("Your choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    }else if(computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper"){
      console.log("paper beats rock, you win!")
    return("Your choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    }else if(computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock"){
      console.log("paper beats rock, you loose!")
      return("Your choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    }else if(computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors"){
      console.log("scissors beats paper, you won!")
      return("Your choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    }
  }
 
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));


  // Takes amount of 5 rounds to be played per 1 match
  const playGame = () => {
    for (let i = 0; i < 5; i++) {
      playRound();
   }
  }