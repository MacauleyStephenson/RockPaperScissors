alert("Welcome to rock, paper, scissors")

const playerSelection = prompt("Please choose rock (1), paper (2) or scissors (3)");

function computerPlay(){
  const aiChoice = ["rock", "paper", "scissors"]

//returns from starting array
 return RNG = aiChoice[Math.floor(Math.random() * aiChoice.length)]
}

//Calls AI for choice
const computerSelection = computerPlay()


 //Plays one round of the game through conditional logic
 function playRound(playerSelection, computerSelection) {
  if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
     console.log("It's a draw!");
     return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
  } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
     console.log("Rock beats scissors! You lose :(");
     return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
  } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
     console.log("Rock beats scissors! You win :D");
     return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
  } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
     console.log("Scissors beats paper! You lose :(");
     return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
     console.log("Scissors beats paper! You win :D");
     return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
     console.log("Paper beats rock! You lose :(");
     return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
  } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
     console.log("Paper beats rock! You win :D");
     return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
  } else {
     console.log("Something went wrong, please try again");
  }
    
  }
        


//returns variables to play the game
playRound(playerSelection, computerSelection)
computerPlay()

console.log(playRound(playerSelection, computerSelection));