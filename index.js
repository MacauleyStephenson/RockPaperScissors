alert("Welcome to rock, paper, scissors")

const playerSelection = prompt("Choose your hand ");
console.log("You have chosen " + playerSelection)

function computerPlay(){
  const aiChoice = ["rock", "paper", "scissors"]

//returns from starting array
 return RNG = Math.floor(Math.random() * aiChoice.length)
}

//Calls AI for choice
const computerSelection = computerPlay()
console.log("Ai has chosen " + computerPlay())


 //Plays one round of the game
 function playRound(playerSelection, computerSelection){
   if(playerSelection === computerSelection){
    return "Tie!";
   }else if(playerSelection === "paper"){
     if(computerSelection === "rock"){
       return "You win"
     }else{
       return "You loose"
     }
     }else if(playerSelection === "rock"){
       if(computerSelection === "scissors"){
         return "You win"
       }else{
         return "You loose"
       }
        }else if (playerSelection === "scissors"){
            if (computerSelection === "paper"){
                return "Win";
            } else {
                return "Loss";
            }
        } 
    }

        


//returns variables to play the game
playRound(playerSelection, computerSelection)
computerPlay()

console.log(playRound(playerSelection, computerSelection));