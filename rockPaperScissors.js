/**
 *add enums and objects
 * use map
 */
var comPick;
var numGames;
var plrWins = 0;
var comWins = 0;
var ties = 0;
var plrPick;
function playGame() {
  userChoice();
  playRound(numGames);
}
function userChoice() {
  numGames = prompt("How many games would you like to play?");
  return numGames;
}
function playRound(numGames) {
  for (var i = 1; i <= numGames; i++) {
    alert("round " + i);
    if (i>1){
      score();
    }
    
    plrPick = prompt("Please choose rock, paper or scissors").toLowerCase();
    checkPlrPick();
    computerChoice();

    alert(
      "player selected " + plrPick + ", computer selected " + comPick
    );
    switch (plrPick) {
      case "rock":
        plrRock(comPick);
        break;
      case "paper":
        plrPaper(comPick);
        break;
      case "scissors":
        plrScissors(comPick);
        break;
      }
  }
  score();
}
function checkPlrPick(){
  while(plrPick !== "rock" && plrPick !== "paper" && plrPick !== "scissors") {
    console.log();
    plrPick = prompt(`${plrPick} is an invalid entry, please try again. \nPlease choose rock, paper or scissors`).toLowerCase();
  }
  return plrPick;
}
function computerChoice() {
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
  return comPick;
}
function plrRock(comPick) {
  switch (comPick) {
    case "rock":
      tie();
      break;
    case "paper":
      cWins();
      break;
    case "scissors":
      pWins();
      break;
  }
}
function plrPaper(comPick) {
  switch (comPick) {
    case "rock":
      pWins();
      break;
    case "paper":
      tie();
      break;
    case "scissors":
      cWins();
      break;
  }
}
function plrScissors(comPick) {
  switch (comPick) {
    case "rock":
      cWins();
      break;
    case "paper":
      pWins();
      break;
    case "scissors":
      tie();
      break;
  }
}
function pWins() {
  plrWins++;
  alert("Result: Player wins");
  
}
function cWins() {
  comWins++;
  alert("Result: Computer wins");
  
}
function tie() {
  ties++;
  alert("Result: Tie");
  
}
function score() {
  alert(
    `score: ${plrWins} player wins ${comWins} computer wins ${ties} ties`
  );
}