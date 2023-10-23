/* 

1 - create random computer choice.
2 - compare player choice with computer choice.
3 - show result in the dom.
4 - create option to clear the game to start over

*/

// Create random computer choice

// random choice option 1


/*
const computerChoice = () => {
	const randomComputerChoice = Math.floor(Math.random() * 3);

	let result = "";

	if (randomComputerChoice === 0) {
		result = "✊";
	} else if (randomComputerChoice === 1) {
		result = "🖐️";
	} else if (randomComputerChoice === 2) {
		result = "✌️";
	}

	return result;
};

*/

// random choice option 2

let rpsMoves = ['✌', '✊', '🖐️'];

function computerChoice () {

	const randomComputerChoice = Math.floor(Math.random() * 3);

	return rpsMoves[randomComputerChoice]
}


let score = {
	wins: 0,
	losses: 0,
	ties: 0,
};

// Create option to clear the game to start over

function clearScore() {
	score.wins = 0;
	score.losses = 0;
	score.ties = 0;
	localStorage.removeItem("score");

	document.querySelector(".js-result").innerText = '';

	document.querySelector(".js-compare-plays").innerText = '';

	document.querySelector(".js-score")
    .innerText = `SCORE: Wins: ${score.wins}. Losses ${score.losses}. Ties: ${score.ties}`;
}

score = JSON.parse(localStorage.getItem("score"));

if (!score) {
	score = {
		wins: 0,
		losses: 0,
		ties: 0,
	};
}

// Compare player choice and computer choice

const playerChoice = (playerChoice) => {
	
	const computer = computerChoice();

	let finalResult = "";

	if (playerChoice === computer) {
		finalResult = "Draw!";
		score.ties += 1;
	} else if (playerChoice === "✊" && computer === "🖐️") {
		finalResult = "You Lost!";
		score.losses += 1;
	} else if (playerChoice === "🖐️" && computer === "✌️") {
		finalResult = "You Lost!";
		score.losses += 1;
	} else if (playerChoice === "✌️" && computer === "✊") {
		finalResult = "You Lost!";
		score.losses += 1;
	} else {
		finalResult = "You Win!";
		score.wins += 1;
	}

	// Show result in the DOM

	document.querySelector(".js-result").innerText = finalResult;

	document.querySelector(".js-compare-plays")
		.innerText = `You ${playerChoice} - ${computer} Computer`;

	document.querySelector(
		".js-score"
	).innerText = `SCORE: Wins: ${score.wins}. Losses ${score.losses}. Ties: ${score.ties}`;

	localStorage.setItem("score", JSON.stringify(score));

	return finalResult;

};


if (score.wins > 0 || score.losses > 0 || score.ties > 0) {
	document.querySelector(".js-score")
		.innerText = `SCORE: Wins: ${score.wins}. Losses ${score.losses}. Ties: ${score.ties}`;
		
	} else {
		document.querySelector(".js-score").innerText = '';
}

// DARK MODE

const body = document.querySelector('body');
const darkModeButton = document.querySelector('.js-dark-mode-button');


function darkModeOn () {
	if (body.classList.contains('toggleOff')) {
		body.classList.add('toggleOn');
		body.classList.remove('toggleOff')
		darkModeButton.innerText = '☀️'
	} else {
		body.classList.add('toggleOff');
		body.classList.remove('toggleOn');
		darkModeButton.innerText = '🌙'
	}
}





