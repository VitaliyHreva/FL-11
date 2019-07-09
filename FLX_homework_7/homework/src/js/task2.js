function game () {
	if (confirm('Do you want to play a game?')) {
		startGame()
	} else {
		alert('You did not become a millionaire, but can')
	}
}


function startGame () {

	let firstPrize = 10;
	let secondPrize = 5;
	let thirdPrize = 2;
	let prize = [firstPrize, secondPrize, thirdPrize];
	let totalPrize = 0;
	let incrementLevel = 1;
	let multiplication = 1;
	let maxRange = 5;
	let attempt = 0;
	let numberToShowAttemps = 1;
	let randomNumber = null;
	let maxAttempts = 2;
	let nextLevelIncrement = 2
	let nextLevelMultiplication = 3

	this.genRandomNumber = function () {
		randomNumber = Math.floor(Math.random() * maxRange);
	}

	this.finishGame = function () {
		alert(`Thank you for a game. Your prize is: ${totalPrize}`);
	}

	this.cancelGame = function () {
		alert('You did not become a millionaire, but can');
	}

	this.congratulation = function () {
		alert(`Congratulation! Your prize is ${totalPrize}$`);
	}

	this.levelPassed = function () {
		totalPrize = totalPrize + prize[attempt]*multiplication
		incrementLevel= incrementLevel*nextLevelIncrement;
		multiplication = multiplication*nextLevelMultiplication;
		maxRange = maxRange*incrementLevel
		attempt = 0;
	}

	this.askContinue = function () {
		if (confirm(`Do you want to continue?`)) {
			this.gaming();
		} else {
			this.finishGame();
		}
	}

	this.askPlayAgain = function () {
		if (confirm('Do you want to play again?')) {
				attempt = 0;
				this.gaming();
		} else {
				this.cancelGame();
		}
	}

	this.gaming = function () {
		this.genRandomNumber();
		console.log(randomNumber)

		let userNumber = prompt(
			`Enter a number from 0 to ${maxRange}
			\n Attempts left: ${attempt+numberToShowAttemps}
			\n Total prize: ${totalPrize}
			\n Possible prize on current attempt: ${prize[attempt]*multiplication}$`
		);

		if (userNumber === null) {
 return; 
}

		if (parseInt(userNumber) === randomNumber) {
			this.levelPassed();
			this.congratulation();
			this.askContinue();
		} else {
			if (attempt >= maxAttempts) {
				this.finishGame();
				this.askPlayAgain();
			} else {
				attempt++;
				this.gaming();
			}
		}
	}

	this.gaming()
}

game()