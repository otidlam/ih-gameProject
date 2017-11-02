'use strict';

function Game() {

}

Game.prototype.home = function() {
  if (document.getElementsByClassName('final')) {
    var removeGame = document.getElementsByClassName("final"); // creating a var to delete the game to recreate it with the next step

    while (removeGame[0]) {
      removeGame[0].parentNode.removeChild(removeGame[0]);
    }
  }

  var gameDiv = document.createElement("div"); //create the div containing game.
  gameDiv.className = "home";
  document.body.appendChild(gameDiv);

  var tittle = document.createElement("div");
  tittle.className = "wannaPlay";
  tittle.innerText = "Soldiers Archers Cavaliers";
  document.getElementsByClassName("home")[0].appendChild(tittle);

  var playBtn = document.createElement("btn");
  playBtn.className = "gameStart";
  playBtn.innerText = "Play Soldiers Archers Cavaliers";
  document.getElementsByClassName("home")[0].appendChild(playBtn);
  document.getElementsByClassName("gameStart")[0].addEventListener("click", Game.prototype.organization);

  var instructionsDiv = document.createElement("div");
  instructionsDiv.className = "instructions";
  instructionsDiv.innerHTML = "Instructions <br> 1) Start the home <br>2) Distribuite your troops<br>3) Try to win!<br>Tip: Soldiers are strong vs Chivalry, Chivalry is strong vs Archers and Archers are strong vs Soldiers. Being strong doesn't grant an automatically win!";
  document.getElementsByClassName("home")[0].appendChild(instructionsDiv);
};

Game.prototype.organization = function() {
  var removeGame = document.getElementsByClassName("home"); // creating a var to delete the game to recreate it with the next step

  while (removeGame[0]) {
    removeGame[0].parentNode.removeChild(removeGame[0]);
  }
  var createGame = document.createElement("div");
  createGame.className = "game";
  // createGame.innerText = "game div";
  document.body.appendChild(createGame);

  var choose = document.createElement("div");
  choose.className = "tittle";
  document.body.getElementsByClassName("game")[0].appendChild(choose);
  choose.innerText = "Choose your units";

  //Div with the triangle, units remaining & countdown
  var unitsLeft = document.createElement("div");
  unitsLeft.className = "totalUnits";
  document.getElementsByClassName("game")[0].appendChild(unitsLeft);
  // unitsLeft.innerText = "unitsLeft";

  //appendChild of unitsLeft
  var triangleImage = document.createElement("div"); // Image triangle strong A<C<S<A
  triangleImage.className = "triImage";
  document.getElementsByClassName("totalUnits")[0].appendChild(triangleImage);
  triangleImage.innerText = "triangleImage";

  var unitsRemaining = document.createElement("div"); // Shows how many units left
  unitsRemaining.className = "unitsRemain";
  document.getElementsByClassName("totalUnits")[0].appendChild(unitsRemaining);
  unitsRemaining.innerText = "unitsRemaining";
  //toDo  Hacer un countdown 1min
  var countdown = document.createElement("div"); // Shows the time remaining to distribuite
  countdown.className = "cdown";
  document.getElementsByClassName("totalUnits")[0].appendChild(countdown);
  countdown.innerText = "countdown";


  //Div with contains the batallions
  var battalions = document.createElement("div");
  battalions.className = "allBattalions";
  document.getElementsByClassName("game")[0].appendChild(battalions);
  // battalions.innerText = "Play";

  //div of units inside the battalions
  // toDo  acabar esto!
  var soldiers = document.createElement("div");
  soldiers.className = "soldier";
  document.getElementsByClassName("allBattalions")[0].appendChild(soldiers);
  soldiers.innerText = "soldiers";
  soldiers.innerHTML = "<input type='number' min='5' max='90'>";

  var archers = document.createElement("div");
  archers.className = "archer";
  document.getElementsByClassName("allBattalions")[0].appendChild(archers);
  archers.innerText = "archers";
  archers.innerHTML = "<input type='number' min='5' max='90'>";


  var cavaliers = document.createElement("div");
  cavaliers.className = "cavalier";
  document.getElementsByClassName("allBattalions")[0].appendChild(cavaliers);
  cavaliers.innerText = "cavaliers";
  cavaliers.innerHTML = "<input type='number' min='5' max='90'>";

  //Button to Battle!
  var readyBtn = document.createElement('btn');
  readyBtn.className = "ready";
  readyBtn.innerText = "Ready";
  document.getElementsByClassName("game")[0].appendChild(readyBtn);
  document.getElementsByClassName("ready")[0].addEventListener("click", Game.prototype.battle);

};

Game.prototype.battle = function() {
  var removeGame = document.getElementsByClassName("game"); // creating a var to delete the game to recreate it with the next step

  while (removeGame[0]) {
    removeGame[0].parentNode.removeChild(removeGame[0]);
  }

  var createGame = document.createElement("div");
  createGame.className = "game";
  // createGame.innerText = "game div";
  document.body.appendChild(createGame);

  // createGame should contain 4 more divs
  // 1
  var enemyDiv = document.createElement('div');
  enemyDiv.className = "enemy";
  // enemyDiv.innerText = "enemyDiv!";
  document.getElementsByClassName("game")[0].appendChild(enemyDiv);
  //enemyDiv should contain 2 divs
  // 1.1
  var enemyTroops = document.createElement('div');
  enemyTroops.className = "battalions";
  // enemyTroops.innerText = "enemyTroopsContainer!";
  document.getElementsByClassName("enemy")[0].appendChild(enemyTroops);
  //enemyTroops should contain 3 divs with the Vikings troops
  //toDo
  //1.1.1 soldier
  var vSoldiers = document.createElement('div');
  vSoldiers.className = "soldier";
  vSoldiers.innerText = "IA soldier";
  document.getElementsByClassName("enemy")[0].appendChild(vSoldiers);
  //1.1.2 archer
  var vArchers = document.createElement('div');
  vArchers.className = "archer";
  vArchers.innerText = "IA archer";
  document.getElementsByClassName("enemy")[0].appendChild(vArchers);
  //1.1.3 cavalier
  var vCavaliers = document.createElement('div');
  vCavaliers.className = "cavalier";
  vCavaliers.innerText = "IA cavalier";
  document.getElementsByClassName("enemy")[0].appendChild(vCavaliers);


  //1.2
  var countDown = document.createElement('div');
  countDown.className = "cdown";
  countDown.innerText = "'CountDown'";
  document.getElementsByClassName("enemy")[0].appendChild(countDown);



  // 2
  var choose = document.createElement('div');
  choose.className = "tittle";
  choose.innerText = "Which battalions are you gonna choose?";
  document.getElementsByClassName("game")[0].appendChild(choose);
  // 3
  var troopsDiv = document.createElement('div');
  troopsDiv.className = "player";
  // troopsDiv.innerText = "funcioooooona!";
  document.getElementsByClassName("game")[0].appendChild(troopsDiv);
  //enemyTroops should contain 3 divs with the Roman troops
  //toDo CSS on allAbove
  //3.1.1 soldier
  var rSoldiers = document.createElement('div');
  rSoldiers.className = "soldier";
  rSoldiers.innerText = "playerSOldiers";
  document.getElementsByClassName("player")[0].appendChild(rSoldiers);
  //3.1.2 archer
  var rArchers = document.createElement('div');
  rArchers.className = "archer";
  rArchers.innerText = "playerArchers";
  document.getElementsByClassName("player")[0].appendChild(rArchers);
  //3.1.3 cavalier
  var rCavaliers = document.createElement('div');
  rCavaliers.className = "soldier";
  rCavaliers.innerText = "playerCavaliers";
  document.getElementsByClassName("player")[0].appendChild(rCavaliers);

  //3.2
  var goBtn = document.createElement('btn');
  goBtn.className = "enemy";
  goBtn.innerText = "Vamos!";
  document.getElementsByClassName("player")[0].appendChild(goBtn);

  // 4
  var results = document.createElement('div');
  results.className = "score";
  results.innerText = "Results container!";
  document.getElementsByClassName("game")[0].appendChild(results);
  //4.1
  var stResult = document.createElement('div');
  stResult.className = "result";
  stResult.innerText = "Results container!1";
  document.getElementsByClassName("score")[0].appendChild(stResult);
  //4.2
  var ndResult = document.createElement('div');
  ndResult.className = "result";
  ndResult.innerText = "Results container!2";
  document.getElementsByClassName("score")[0].appendChild(ndResult);
  //4.3
  var rdResult = document.createElement('div');
  rdResult.className = "result";
  rdResult.innerText = "Results container!3";
  document.getElementsByClassName("score")[0].appendChild(rdResult);




  var gameOverBtn = document.createElement('btn');
  gameOverBtn.className = "retry";
  gameOverBtn.innerText = "Wanna try again?";
  document.getElementsByClassName("game")[0].appendChild(gameOverBtn);
  document.getElementsByClassName("retry")[0].addEventListener("click", Game.prototype.gameOver);




};

Game.prototype.gameOver = function() {
  var removeGame = document.getElementsByClassName("game"); // creating a var to delete the game to recreate it with the next step

  while (removeGame[0]) {
    removeGame[0].parentNode.removeChild(removeGame[0]);
  }

  var finalDiv = document.createElement("div");
  finalDiv.className = "final";
  finalDiv.innerText = "final div";
  document.body.appendChild(finalDiv);

  var looserTeam = document.createElement('div');
  looserTeam.className = "loser";
  looserTeam.innerText = "loserTeam";
  document.getElementsByClassName("final")[0].appendChild(looserTeam);

  var winnerTeam = document.createElement('div');
  winnerTeam.className = "winner";
  winnerTeam.innerText = "winnerTeam";
  document.getElementsByClassName("final")[0].appendChild(winnerTeam);

  var retryBtn = document.createElement('btn');
  retryBtn.className = "retry";
  retryBtn.innerText = "Wanna try again?";
  document.getElementsByClassName("final")[0].appendChild(retryBtn);
  document.getElementsByClassName("retry")[0].addEventListener("click", Game.prototype.home);



};

var myGame = new Game();
myGame.home();
