'use strict';

function Game() {

}

Game.prototype.home = function() {
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
  createGame.innerText = "game div";
  document.body.appendChild(createGame);

  var choose = document.createElement("div");
  choose.className = "tittle";
  document.body.getElementsByClassName("game")[0].appendChild(choose);
  choose.innerText = "choose your units";

  //Div with the triangle, units remaining & countdown
  var unitsLeft = document.createElement("div");
  unitsLeft.className = "totalUnits";
  document.getElementsByClassName("game")[0].appendChild(unitsLeft);
  unitsLeft.innerText = "unitsLeft";
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
  battalions.innerText = "Play";

  //div of units inside the battalions
  // toDo  acabar esto!
  var soldiers = document.createElement("div");
  soldiers.className = "allBattalions";
  document.getElementsByClassName("allBattalions")[0].appendChild(soldiers);
  soldiers.innerText = "soldiers";
  soldiers.innerHTML = "<input type='number' min='5' max='90'>";

  var archers = document.createElement("div");
  archers.className = "allBattalions";
  document.getElementsByClassName("allBattalions")[0].appendChild(archers);
  archers.innerText = "archers";
  archers.innerHTML = "<input type='number' min='5' max='90'>";


  var cavaliers = document.createElement("div");
  cavaliers.className = "allBattalions";
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
  createGame.innerText = "game div";
  document.body.appendChild(createGame);

  // createGame should contain 4 more divs
  var enemy = document.createElement('div');

};




var myGame = new Game();
myGame.home();
