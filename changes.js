		var playerTurn;
		var computerTurn;
		var playerScore = 0;
		var computerScore = 0;
		var playing = true;
		var dispGameStatus = document.getElementById("gameStatus");
		var prompt = document.getElementById("prompt");
		
		console.log("rpsGame imported successfully");

		function run(){
				while(playing){
					console.log("#DEBUG: Get throws");
					var again = prompt("Would you like to play again?(Y/N)").toLowerCase();
					if(again == "n"){
						//alert("Thanks for playing!");
						playing = false;
					}
				}
				dispGameStatus.innerHTML = "You have choosen to end gameplay";
		}
		
			function getThrows(throw){
				//Get Player throw
				
				console.log("#DEBUG: "+ throw);
				if(throw != "p" && throw != "s" && throw != "r"){
					console.log("Something went wrong when getting the player's throw!");
				}
				console.log("#DEBUG: Player throw is " + throw + ". Get Computer Throw");
				//Get Computer throw
				var computerTurn = Math.floor((3*Math.random()+1));
				if(computerTurn == 1){
					computerTurn = "rock";
				} else if(computerTurn == 2){
					computerTurn = "paper";
				} else if(computerTurn == 3){
					computerTurn = "scissors";
				} else {
					//alert("A number other than 1, 2 or 3 has been generated. Press OK to reload game");
					console.log("A number other than 1, 2 or 3 has been generated, meaning that the statment var computerTurn = Math.floor((3*Math.random()+1)) must be wrong.");
					location.reload();
				}
				console.log("#DEBUG: Computer Throw is " + computerTurn + ". Shoot.");
				document.getElementById("computersThrowTextBox").innerHTML = computerTurn;
				shoot(throw, computerTurn);
			}
			
			function shoot(throw, computerThrow){
				if(throw == "r"){
					if(computerThrow == "paper"){
						getWinner("computer", 0, 1);
					} else if(computerThrow == "scissors"){
						getWinner("player",1,0);
					} else {
						getWinner("tie",0,0);
					}
				} else if(throw == "p"){
					if(computerThrow == "scissors"){
						getWinner("computer", 0, 1);
					} else if(computerThrow == "rock"){
						getWinner("player", 1, 0);
					} else {
						getWinner("tie", 0, 0);
					}
				} else if(throw == "s"){
					if(computerThrow == "rock"){
						getWinner("computer", 0, 1);
					} else if(computerThrow == "paper"){
						getWinner("player", 1, 0);
					} else {
						getWinner("tie", 0, 0);
					}
				}
			}
			
			function getWinner(winner, player, comp){
				if(winner == "player"){
					playerScore += player;
					console.log("Player wins!");
					document.getElementById("outcome").innerHTML = "You win :)";
					getScore(playerScore, computerScore);
				} else if(winner == "computer"){
					computerScore += comp;
					console.log("Computer wins!");
					getScore(playerScore, computerScore);
					document.getElementById("outcome").innerHTML = "Computer wins :(";
				} else if(winner == "tie"){
					console.log("It is a tie!");
					getScore(playerScore, computerScore);
					document.getElementById("outcome").innerHTML = "It's a tie :|";
				} else {
					console.log("#DEBUG: something wrong is going on");
					alert("Oops something went wrong :/");
					location.reload();
				}
			}
			
			function getScore(player, comp){
				console.log("Player: " + player + " Computer: " + comp);
			}
