const aiChoice = ["a", "rock", "paper", "scissors"]
let computerSelection
let playerSelection

function computerPlay() {
	// returns from starting array
	return computerSelection = aiChoice[Math.floor(Math.random() * aiChoice.length)]
}

// //Calls AI for choice
// const computerSelection = computerPlay()


//Plays one round of the game through conditional logic
function playRound(playerSelection, computerSelection) {
	if (computerSelection === playerSelection) {
		return "tie!";
	} else if (computerSelection === "rock" && playerSelection === "scissors") {
		console.log("Rock beats scissors! You lose :(");
		return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
	} else if (computerSelection === "scissors" && playerSelection === "rock") {
		console.log("Rock beats scissors! You win :D");
		return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
	} else if (computerSelection === "scissors" && playerSelection === "paper") {
		console.log("Scissors beats paper! You lose :(");
		return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
	} else if (computerSelection === "paper" && playerSelection === "scissors") {
		console.log("Scissors beats paper! You win :D");
		return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
	} else if (computerSelection === "paper" && playerSelection === "rock") {
		console.log("Paper beats rock! You lose :(");
		return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
	} else if (computerSelection === "rock" && playerSelection === "paper") {
		console.log("Paper beats rock! You win :D");
		return ("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
	} else {
		return "Something went wrong, please try again"
	}

}



// //returns variables to play the game
// playRound(playerSelection, computerSelection)
// computerPlay()

// console.log(playRound(playerSelection, computerSelection));