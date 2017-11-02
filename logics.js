// 'use strict';

function Logics() {
  this.unitsLeft = null;
  this.soldiers = null;
  this.archers = null;
  this.cavaliers = null;
  // var unitsLeft = 100 - soldiers - archers - cavaliers;
}

Logics.prototype.init = function() {
  this.unitsLeft = 100;
  this.soldiers = 0;
  this.archers = 0;
  this.cavaliers = 0;
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

Logic.prototype.score = function() {

};

// switch ( /* don't know what expression*/ ) {
//   case 1 /*soldiers vs soldiers*/ :
//     switch () {
//       case 1 /*this.playerBattallion.number < this.aiBattallion.number*/ :
//
//         break;
//       case 2 /*this.playerBattallion.number > this.aiBattallion.number*/ :
//
//         break;
//       case 3 /*this.playerBattallion.number = this.aiBattallion.number*/ :
//
//         break;
//     }
//     break;
//   case 2 /*soldiers vs archers*/ :
//     switch () {
//       case 1 /*this.playerBattallion.number < (this.aiBattallion.number*1.5)*/ :
//
//         break;
//       case 2 /*this.playerBattallion.number > (this.aiBattallion.number*1.5)*/ :
//
//         break;
//       case 3 /*this.playerBattallion.number = (this.aiBattallion.number*1.5)*/ :
//
//         break;
//     }
//     break;
//   case 3 /*soldiers vs cavaliers*/ :
//     switch () {
//       case 1 /*(this.playerBattallion.number*1.5) < this.aiBattallion.number*/ :
//
//         break;
//       case 2 /*(this.playerBattallion.number*1.5) > this.aiBattallion.number*/ :
//
//         break;
//       case 3 /*(this.playerBattallion.number*1.5) = this.aiBattallion.number*/ :
//
//         break;
//     }
//     break;
//   case 4 /* archers vs soldiers*/ :
//     switch () {
//       case 1 /*(this.playerBattallion.number*1.5) < this.aiBattallion.number*/ :
//
//         break;
//       case 2 /*(this.playerBattallion.number*1.5) > this.aiBattallion.number*/ :
//
//         break;
//       case 3 /*(this.playerBattallion.number*1.5) = this.aiBattallion.number*/ :
//
//         break;
//     }
//     break;
//   case 5 /*archers vs archers*/ :
//     switch () {
//       case 1 /*this.playerBattallion.number < this.aiBattallion.number*/ :
//
//         break;
//       case 2 /*this.playerBattallion.number > this.aiBattallion.number*/ :
//
//         break;
//       case 3 /*this.playerBattallion.number = this.aiBattallion.number*/ :
//
//         break;
//     }
//
//     break;
//   case 6 /*archers vs cavaliers*/ :
//     switch () {
//       case 1 /*this.playerBattallion.number < (this.aiBattallion.number*1.5)*/ :
//
//         break;
//       case 2 /*this.playerBattallion.number > (this.aiBattallion.number*1.5)*/ :
//
//         break;
//       case 3 /*this.playerBattallion.number = (this.aiBattallion.number*1.5)*/ :
//
//         break;
//     }
//     break;
//   case 7 /*cavaliers vs soldiers*/ :
//     switch () {
//       case 1 /*this.playerBattallion.number < this.aiBattallion.number*/ :
//
//         break;
//       case 2 /*this.playerBattallion.number > this.aiBattallion.number*/ :
//
//         break;
//       case 3 /*this.playerBattallion.number = this.aiBattallion.number*/ :
//
//         break;
//     }
//
//     break;
//   case 8 /*cavaliers vs archers*/ :
//     switch () {
//       case 1 /*(this.playerBattallion.number*1.5) < this.aiBattallion.number*/ :
//
//         break;
//       case 2 /*(this.playerBattallion.number*1.5) > this.aiBattallion.number*/ :
//
//         break;
//       case 3 /*(this.playerBattallion.number*1.5) = this.aiBattallion.number*/ :
//
//         break;
//     }
//     break;
//   case 9 /*cavaliers vs cavaliers*/ :
//     switch () {
//       case 1 /*this.playerBattallion.number < this.aiBattallion.number*/ :
//
//         break;
//       case 2 /*this.playerBattallion.number < this.aiBattallion.number*/ :
//
//         break;
//       case 3 /*this.playerBattallion.number < this.aiBattallion.number*/ :
//
//         break;
//     }
//
//
//     break;
//
// }
