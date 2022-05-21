console.log("welcome to Rock, Paper, Scissors");


//returning either rock, paper or scissors through an RNG
function computerPlay(){
 const computerArray = ["rock", "paper", "scissors"] 
const computerChoice = Math.floor(Math.random() * computerArray.length);
console.log(computerChoice)
return computerArray[computerChoice]
} 



function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()){
      console.log("Its a draw!!!");
  //   }else if{

  //   }else if{

  //   }
        
  //     }
  //   }
    }
 }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
