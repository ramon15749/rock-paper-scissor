let playerScore = 0;
let computerScore = 0;

function printMatch(text){
	const content = document.querySelector('.match');
	content.textContent = text;

}

function printScore(text){
	const content = document.querySelector('.score');
	content.textContent = text;

}

function playRound(p) {
				var computerSelection = computerPlay();
				var c = computerSelection;
				var text;
				console.log("p: " + p + " c: " + c);
				if(p == "ROCK" && c == "SCISSOR" || p == "PAPER" && c == "ROCK" || p=="SCISSOR" && c == "PAPER"){
					text = p + " beats " + c;
					printMatch(text);
					return 1;
				}
				else if(p == c){
					text = p + " draws " + c;
					printMatch(text);
					return 0;
				}
				else if (p == "ROCK" || p == "PAPER"|| p== "SCISSOR"){
					text = p + " loses " + c;
					printMatch(text);
					return -1;
				}
				return "invalid";
			}
			
function computerPlay(){
				var random = Math.floor((Math.random())*3);
				var choice;
				switch(random){
					case 0:
						choice = "ROCK";
						break;
					case 1:
						choice = "SCISSOR";
						break;
					case 2:
						choice = "PAPER";
						break;

				}
				return choice;
			}
			
function game(playerSelection){
				var playerScore = 0;
				var computerScore = 0;
				for(round = 0; round < 5; round++){
					const computerSelection = computerPlay();
					console.log("player: " + playerSelection + " Computer: " + computerSelection);
					var result = playRound(playerSelection, computerSelection);
					switch(result){
						case 1:
							playerScore++
							break;
						case -1:
							computerScore++;
							break;
						case 0:
							round--;
					}
					console.log("player's score: " + playerScore + " computer's score: " + computerScore);
					
				}
				if(playerScore > computerScore){
					return "Player wins"
				}
				else{
					return "Player loses"
				}
			}

function playGame(){
	p = this.id;
	var result = playRound(p);
	switch(result){
			case 1:
				playerScore++
				break;
			case -1:
				computerScore++;
	}
	scoreLog = "player score: " + playerScore + " computer score " + computerScore;
	printScore(scoreLog);
	
	if(playerScore > 4 || computerScore > 4){
		var winner;
		if(playerScore > computerScore){
			winner = "player"
		}
		else{
			winner = "computer"
		}
		const result = document.createElement('div');
		result.textContent = winner + " wins";
		const score = document.querySelector('.score');
		score.appendChild(result);
		playerScore = 0;
		computerScore = 0;
	
	}

}

// buttons is a node list. It looks and acts much like an array.

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', playGame);
});


