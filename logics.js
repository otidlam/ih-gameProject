// 'use strict';

function Logics() {
  this.unitsLeft = null;
  this.soldiers = null;
  this.archers = null;
  this.cavaliers = null;
  this.aiSoldiers = null;
  this.aiArchers = null;
  this.aiCavaliers = null;

  this.batleResult = "";
  // var unitsLeft = 100 - soldiers - archers - cavaliers;
}

Logics.prototype.init = function() {
  this.unitsLeft = 100;
  this.soldiers = 0;
  this.archers = 0;
  this.cavaliers = 0;
  this.aiSoldiers = {
    type: 'soldier',
    number: 40
  };
  this.aiArchers = {
    type: 'archer',
    number: 30
  };
  this.aiCavaliers = {
    type: 'cavalier',
    number: 30
  };
};

Logics.prototype.distribuite = function(soldiers, archers, cavaliers) {
  this.soldiers = soldiers;
  this.archers = archers;
  this.cavaliers = cavaliers;

};


var followResults = [];
var battleResults = 0;

Logics.prototype.confrontation = function(type) {

  var playerNumber;
  switch (type) {
    case 'soldier':
      playerNumber = this.soldiers;
      break;
    case 'archer':
      playerNumber = this.archers;
      break;
    case 'cavalier':
      playerNumber = this.cavaliers;
      break;
  }


  var enemyBattallionsLeft = [this.aiSoldiers, this.aiArchers, this.aiCavaliers];

  var aiNumber = this.enemyBattallionsLeft[0].type;
  if (type !== 'archer') {
    if (type === 'soldier') {
      if ('archer' === 'archer') {
        aiNumber *= 1.5;
      } else {
        playerNumber *= 1.5;
      }
    } else if (type === 'archer') {
      if ('archer' === 'soldier') {
        playerNumber *= 1.5;
      } else {
        aiNumber *= 1.5;
      }
    } else {
      if ('archer' === 'soldier') {
        aiNumber *= 1.5;
      } else {
        playerNumber *= 1.5;
      }
    }
    if (playerNumber < aiNumber) {
      battleResults -= 1;
      // Game.getElementsByClassName('result')[0].style.backgroundColor = red;
      this.battleResult = "lose";
    } else if (playerNumber > aiNumber) {
      battleResults += 1;
      // Game.getElementsByClassName('result')[0].style.backgroundColor = green;
      this.battleResult = 'win';
    } else {
      // Game.getElementsByClassName('result')[0].style.backgroundColor = grey;
      this.battleResult = 'tie';
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
      myLogic.getElementsByClassName('result')[ix].style.backgroundColo = 'grey';
    }
  }
};
