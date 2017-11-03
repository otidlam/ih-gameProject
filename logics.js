// 'use strict';

function Logics() {
  this.unitsLeft = null;
  this.soldiers = null;
  this.archers = null;
  this.cavaliers = null;
  this.aiSoldiers = null;
  this.aiArchers = null;
  this.aiCavaliers = null;


  // var unitsLeft = 100 - soldiers - archers - cavaliers;
}

Logics.prototype.init = function() {
  this.unitsLeft = 100;
  this.soldiers = 0;
  this.archers = 0;
  this.cavaliers = 0;
  this.aiSoldiers = 40;
  this.aiArchers = 30;
  this.aiCavaliers = 30;
};

Logics.prototype.distribuite = function(soldiers, archers, cavaliers) {
  this.soldiers = soldiers;
  this.archers = archers;
  this.cavaliers = cavaliers;

};


var followResults = [];
var battleResults = 0;

Logics.prototype.confrontation = function(player, ai) {
  var playerNumber = player.number;
  var aiNumber = ai.number;
  if (player.type !== ai.type) {
    if (player.type === 'soldier') {
      if (ai.type === 'archer') {
        aiNumber *= 1.5;
      } else {
        playerNumber *= 1.5;
      }
    } else if (player.type === 'archer') {
      if (ai.type === 'soldier') {
        playerNumber *= 1.5;
      } else {
        aiNumber *= 1.5;
      }
    } else {
      if (ai.type === 'soldier') {
        aiNumber *= 1.5;
      } else {
        playerNumber *= 1.5;
      }
    }
    if (playerNumber < aiNumber) {
      battleResults -= 1;
      // Game.getElementsByClassName('result')[0].style.backgroundColor = red;
      followResults.push("lose");
    } else if (playerNumber > aiNumber) {
      battleResults += 1;
      // Game.getElementsByClassName('result')[0].style.backgroundColor = green;
      followResults.push('win');
    } else {
      // Game.getElementsByClassName('result')[0].style.backgroundColor = grey;
      followResults.push('tie');
    }

  }
};

Logics.prototype.score = function() {
  for (var ix = 0; ix < followResults.lenght; ix++) {
    if (followResults[ix] === 'win') {
      myLogic.getElementsByClassName('result')[ix].style.backgroundColo = 'green';
    } else if (followResults[ix] === 'lose') {
      myLogic.getElementsByClassName('result')[ix].style.backgroundColo = 'red';
    } else {
      myLogic.getElementsByClassName('result')[ix].style.backgroundColo = 'gr ey';
    }
  }
};
