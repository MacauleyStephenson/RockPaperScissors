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
	if (playerSelection === computerSelection) {
		return "tie!";
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		return "Rock beats scissors! You lose :(";
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		return "Rock beats scissors! You win :D";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		return "Scissors beats paper! You lose :(";
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		return "Scissors beats paper! You win :D";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		return "Paper beats rock! You lose :(";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		return "Paper beats rock! You win :D";
	} else {
		return "Something went wrong, please try again"
	}

}

let player = 0;
let computer = 0;

// //returns variables to play the game
// playRound(playerSelection, computerSelection)
// computerPlay()

// console.log(playRound(playerSelection, computerSelection));

const btnReset = document.querySelector('.reset')

btnReset.addEventListener('click', function () {
	player = 0;
	computer = 0;
	rockBtn.disabled = false;
	paperBtn.disabled = false;
	scissorskBtn.disabled = false;
	divResultsFinal.textContent = '';
	divResultsPlayer.textContent = `: ${player}`;
	divResultsPc.textContent = `: ${computer} `;
	boxVs.style.outlineColor = '#FFFFFF';
	title.style.color = '#FFFFFF';
	resultFinal.style.color = '#FFFFFF';
})