//fot not losinf "this"
var self = this;


// start page
function createPage() {
  var gameDiv = document.createElement('div'); //create the div containing game.
  gameDiv.className = "game";
  document.body.appendChild(gameDiv);

  var tittle = document.createElement('div');
  tittle.className = "wannaPlay";
  tittle.innerText = "Soldiers Archers Chivalry";
  document.getElementsByClassName('game')[0].appendChild(tittle);

  var playBtn = document.createElement('btn');
  playBtn.className = "gameStart";
  playBtn.innerText = "Play";
  document.getElementsByClassName('game')[0].appendChild(playBtn);

  var instructionsDiv = document.createElement('div');
  instructionsDiv.className = "instructions";
  instructionsDiv.innerText = "Instructions there!";
  document.getElementsByClassName('game')[0].appendChild(instructionsDiv);



  //   gameDiv.classList.add('game'); // adds a class to the main div.


  // gameDiv.createElement('div').classList.add('wannaPlay').addText('Do you wanna Play?');
  // document.body.appendChild(div);
  // askingPlay.addClass('wannaPlay');
  // gameDiv.appendChild(askingPlay);
  // script.appendChild(gameDiv);



  // var askingPlay = gameDiv.createElement('div');
  // askingPlay.addClass('wannaPlay');
  // var playButton = document.createElement('btn');
  // playButton.addClass('play');
  // var instructionsDiv = document.createElement('div');
  // instructionsDiv.addClass('instructions');
}

createPage();
