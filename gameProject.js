"use strict";

// start page
function createPage() {

  var gameDiv = document.createElement("div"); //create the div containing game.
  gameDiv.className = "game";
  document.body.appendChild(gameDiv);

  var tittle = document.createElement("div");
  tittle.className = "wannaPlay";
  tittle.innerText = "Soldiers Archers Chivalry";
  document.getElementsByClassName("game")[0].appendChild(tittle);

  var playBtn = document.createElement("btn");
  playBtn.className = "gameStart";
  playBtn.innerText = "Play Soldiers Archers Chivalry";
  document.getElementsByClassName("game")[0].appendChild(playBtn);
  document.getElementsByClassName("gameStart")[0].addEventListener("click", organization);

  var instructionsDiv = document.createElement("div");
  instructionsDiv.className = "instructions";
  instructionsDiv.innerHTML = "Instructions <br> 1) Start the game <br>2) Distribuite your troops<br>3) Try to win!<br>Tip: Soldiers are strong vs Chivalry, Chivalry is strong vs Archers and Archers are strong vs Soldiers. Being strong doesn't grant an automatically win!";
  document.getElementsByClassName("game")[0].appendChild(instructionsDiv);
}

// organization state
function organization() {
  var removeGame = document.getElementsByClassName("game"); // creating a var to delete the game to recreate it with the next step

  while (removeGame[0]) {
    removeGame[0].parentNode.removeChild(removeGame[0]);
  }


  // document.getElementsByClassName("game").remove();
  var createGame = document.createElement("div");
  createGame.className = "game";
  document.body.appendChild(createGame);


  var choose = document.createElement("div");
  choose.className = "tittle";
  document.body.appendChild(choose);
  choose.innerText = "choose your units";


  var unitsLeft = document.createElement("div");
  unitsLeft.className = "totalUnits";
  document.body.appendChild(unitsLeft);
  unitsLeft.innerText = "unitsLeft";

  //toDo darles propiedades

  var triangleImage = document.createElement("div");
  triangleImage.className = "triImage";
  document.getElementsByClassName("unitsLeft")[0].appendChild(triangleImage);
  triangleImage.innerText = "triangleImage";

  var unitsRemaining = document.createElement("div");
  unitsRemaining.className = "unitsRemain";
  document.unitsLeft.appendChild(unitsRemaining);
  unitsRemaining.innerText = "unitsRemaining";
  //toDo  Hacer un countdown 1min
  var countdown = document.createElement("div");
  countdown.className = "cdown";
  document.unitsLeft.appendChild(countdown);
  countdown.innerText = "countdown";









  var battalions = document.createElement("div");
  battalions.className = "allBattalions";
  document.body.appendChild(battalions);
  battalions.innerText = "Play";

  //div of units inside the battalions
  // toDo  acabar esto!
  var soldiers = document.createElement("div");
  battalions.className = "allBattalions";
  document.battalions.appendChild(soldiers);
  soldiers.innerText = "soldiers";
  soldiers.innerHTML = "<input type=number>";

  var archers = document.createElement("div");
  battalions.className = "allBattalions";
  document.battalions.appendChild(archers);
  archers.innerText = "archers";
  archers.innerHTML = "<input type=number>";


  var cavaliers = document.createElement("div");
  battalions.className = "allBattalions";
  document.battalions.appendChild(cavaliers);
  cavaliers.innerText = "cavaliers";
  cavaliers.innerHTML = "<input type=number>";


  // var ready = document.createElement("btn");
  // ready.className = "game";
  // document.body.appendChild(ready);
  // // playBtn.innerText = document.getElementsByClassName("game")[0].remove;

}


createPage();
