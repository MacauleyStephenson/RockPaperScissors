const aiChoice = ["a", "rock", "paper", "scissors"];
let computerSelection;
let playerSelection;

function computerPlay() {
	// returns from starting array
	return computerSelection = aiChoice[Math.floor(Math.random() * aiChoice.length)]
}

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

// loops ui colouration for game logic
function nashe(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		boxVs.style.outlineColor = '#D096FF';
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		player++;
		boxVs.style.outlineColor = '#0CA445';
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		player++;
		boxVs.style.outlineColor = '#D096FF';
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		player++;
		boxVs.style.outlineColor = '#D096FF';
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		computer++;
		boxVs.style.outlineColor = '#D096FF';
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		computer++;
		boxVs.style.outlineColor = '#D096FF';
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		computer++;
		boxVs.style.outlineColor = '#D096FF';
	} else {

	}

}


divResultsPlayer = document.querySelector('.ptsPlayer');
divResultsPc = document.querySelector('.ptsPc');




const elections = document.querySelector('button');

elections.forEach(obj => obj.addEventListener('click', function () {
	playerSelection = this.value;
	computerPlay();
	playRound(playerSelection, computerSelection);
	nashe(playerSelection, computerSelection);

	divResultsPlayer.textContent = `: ${player}`;
	divResultsPc.textContent = `: ${computer} `;
	resultGames();
}));


const rockSvgVs = document.querySelector('.rockSvgVs');
const paperSvgVs = document.querySelector('.paperSvgVs');
const scissorsSvgVs = document.querySelector('.scissorsSvgVs');

const rockSvgContainerUsr = document.querySelector('.rockSvgContainerUsr');
const paperSvgContainerUsr = document.querySelector('.paperSvgContainerUsr');
const scissorsSvgContainerUsr = document.querySelector('.scissorsSvgContainerUsr');


const rockSvgContainerPc = document.querySelector('.rockSvgContainerPc');
const paperSvgContainerPc = document.querySelector('.paperSvgContainerPc');
const scissorsSvgContainerPc = document.querySelector('.scissorsSvgContainerPc');

const rockSvgPcVs = document.querySelector('.rockSvgPcVs');
const paperSvgPcVs = document.querySelector('.paperSvgPcVs');
const scissorsSvgPcVs = document.querySelector('.scissorsSvgPcVs');

elections.forEach(obj => obj.addEventListener('click', function () {

	switch (this.value) {
		case 'rock':
			rockSvgVs.classList.add('noGhost');
			rockSvgVs.style.animation = 'transitionNoGhost .5s ease 1';
			rockSvgContainerUsr.style.opacity = '0%';
			rockSvgContainerUsr.style.animation = 'transitionGhost .5s ease 1';
			paperBtn.disabled = true;
			scissorsBtn.disabled = true;
			rockBtn.disabled = true;

			setTimeout(function () {
				rockSvgVs.classList.remove('noGhost');
				rockSvgVs.style.animation = 'transitionGhost .5s ease 1';
				rockSvgContainerUsr.style.animation = 'transitionNoGhost .5s ease 1';
				rockSvgContainerUsr.style.opacity = '100%';
				paperBtn.disabled = false;
				scissorsBtn.disabled = false;
				rockBtn.disabled = false;
			}, 1500);
			break;
		case 'scissors':
			scissorsSvgVs.classList.add('noGhost');
			scissorsSvgVs.style.animation = 'transitionNoGhost .5s ease 1';
			scissorsSvgContainerUsr.style.opacity = '0%';
			scissorsSvgContainerUsr.style.animation = 'transitionGhost .5s ease 1';
			rockBtn.disabled = true;
			paperBtn.disabled = true;
			scissorsBtn.disabled = true;

			setTimeout(function () {
				scissorsSvgVs.style.animation = 'transitionGhost .5s ease 1';
				scissorsSvgVs.classList.remove('noGhost');
				scissorsSvgContainerUsr.style.animation = 'transitionNoGhost .5s ease 1';
				scissorsSvgContainerUsr.style.opacity = '100%';
				rockBtn.disabled = false;
				paperBtn.disabled = false;
				scissorsBtn.disabled = false;

			}, 1500);
			break;
		case 'paper':
			paperSvgVs.classList.add('noGhost');
			paperSvgVs.style.animation = 'transitionNoGhost .5s ease 1';
			paperSvgContainerUsr.style.opacity = '0%';
			paperSvgContainerUsr.style.animation = 'transitionGhost .5s ease 1';
			rockBtn.disabled = true;
			scissorsBtn.disabled = true;
			paperBtn.disabled = true;
			setTimeout(function () {
				paperSvgVs.style.animation = 'transitionGhost .5s ease 1';
				paperSvgVs.classList.remove('noGhost');

				paperSvgContainerUsr.style.animation = 'transitionNoGhost .5s ease 1';
				paperSvgContainerUsr.style.opacity = '100%';
				rockBtn.disabled = false;
				scissorsBtn.disabled = false;
				paperBtn.disabled = false;
			}, 1500);
			break;
		default:
	}

	switch (computerSelection) {
		case 'rock':
			rockSvgPcVs.classList.add('noGhost');
			rockSvgPcVs.style.animation = 'transitionNoGhost .5s ease 1';
			rockSvgContainerPc.style.animation = 'transitionGhost .5s ease 1';
			rockSvgContainerPc.style.opacity = '0%';


			setTimeout(function () {
				rockSvgPcVs.style.animation = 'transitionGhost .5s ease 1';
				rockSvgPcVs.classList.remove('noGhost');

				rockSvgContainerPc.style.animation = 'transitionNoGhost .5s ease 1';
				rockSvgContainerPc.style.opacity = '100%';
			}, 1500);
			break;
		case 'scissors':
			scissorsSvgPcVs.classList.add('noGhost');
			scissorsSvgPcVs.style.animation = 'transitionNoGhost .5s ease 1';
			scissorsSvgContainerPc.style.animation = 'transitionGhost .5s ease 1';
			scissorsSvgContainerPc.style.opacity = '0%';

			setTimeout(function () {
				scissorsSvgPcVs.style.animation = 'transitionGhost .5s ease 1';
				scissorsSvgPcVs.classList.remove('noGhost');

				scissorsSvgContainerPc.style.animation = 'transitionNoGhost .5s ease 1';
				scissorsSvgContainerPc.style.opacity = '100%';
			}, 1500);
			break;
		case 'paper':
			paperSvgPcVs.classList.add('noGhost');
			paperSvgPcVs.style.animation = 'transitionNoGhost .5s ease 1';
			paperSvgContainerPc.style.animation = 'transitionGhost .5s ease 1';
			paperSvgContainerPc.style.opacity = '0%';

			setTimeout(function () {
				paperSvgPcVs.style.animation = 'transitionGhost .5s ease 1';
				paperSvgPcVs.classList.remove('noGhost');

				paperSvgContainerPc.style.animation = 'transitionNoGhost .5s ease 1';
				paperSvgContainerPc.style.opacity = '100%';
			}, 1500);
			break;
		default:
	}
}))

function resultGames() {
	for (i = 0; i <= 5; i++) {

		if (player < 5 && computer < 5) break;

		if (player > computer) {
			divResultsFinal.textContent = 'You Win!';
			divResultsFinal.style.animation = "colorWin 0.7s ease-in-out 1";
			boxVs.style.outlineColor = '#0CA445';
			title.style.color = '#0CA445';
			resultFinal.style.color = '#0CA445';

		} else if (computer > player) {
			divResultsFinal.textContent = 'You Loose!';
			divResultsFinal.style.animation = "colorWin 0.7s ease-in-out 1";
			boxVs.style.outlineColor = '#D096FF';
			title.style.color = '#D096FF';
			resultFinal.style.color = '#D096FF';
		}


		rockBtn.disabled = true;
		paperkBtn.disabled = true;
		scissorsBtn.disabled = true;
	};
}


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
});
