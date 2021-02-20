/**
 *
 */
function playGame() {
  var numGames = prompt("How many games would you like to play?");
  var plrPick;
  var comPick;
  var i;
  var plrWins = 0;
  var comWins = 0;
  var ties = 0;
  for (i = 0; i < numGames; i++) {
    plrPick = prompt("Please choose rock, paper or scissors").toLowerCase();
    
    var rdmPick = Math.floor(Math.random() * 3);

    switch (rdmPick) {
      case 0:
        comPick = "rock";
        break;
      case 1:
        comPick = "paper";
        break;
      case 2:
        comPick = "scissors";
    }
    console.log("round " + (i + 1));
    console.log(
      "player selected " + plrPick + ", computer selected " + comPick
    );
    if (plrPick === "rock") {
      switch (rdmPick) {
        case 0:
          result = "tie";
          ties++;
          break;
        case 1:
          result = "computer wins";
          comWins++;
          break;
        case 2:
          result = "you win";
          plrWins++;
          
      }
    }
    else if (plrPick === "paper") {
      switch (rdmPick) {
        case 0:
          result = "you win";
          plrWins++;
          break;
        case 1:
          result = "tie";
          ties++;
          break;
        case 2:
          result = "computer wins";
          comWins++;
         
      }
    }
    else if (plrPick === "scissors") {
      switch (rdmPick) {
        case 0:
          result = "computer wins";
          comWins++;
          break;
        case 1:
          result = "you win";
          plrWins++;
          break;
        case 2:
          result = "tie";
          ties++;
      }
    }
      else {
          result = "invalid entry, please try again";
          i --;
      }
    
    console.log(result);
    console.log(
      "score: " +
        plrWins +
        " player wins " +
        comWins +
        " computer wins " +
        ties +
        " ties"
    );
  }
}
