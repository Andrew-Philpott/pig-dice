export function Game(playerOne, playerTwo, pigDie) {
  this.players = [playerOne, playerTwo];
  this.turnScore = 0;
  this.currentPlayer = this.players[0];
  this.pigDie = pigDie;
};

Game.prototype.checkDieValue = function(valueOfPigDie) {
  if (valueOfPigDie !== 1) {
    this.turnScore += valueOfPigDie;
  };
};

Game.prototype.changeCurrentPlayer = function() {
  var currentPlayer = this.currentPlayer;
  if ((this.players.indexOf(currentPlayer) + 1) === this.players.length) {
    this.currentPlayer = this.players[0];
  } else {
    this.currentPlayer = (this.players[this.players.indexOf(currentPlayer) + 1]);
  }
};

Game.prototype.checkPlayerScore = function() {
  if (this.currentPlayer.score >= 100) {
    return true;
  }
  return false;
};

Game.prototype.hold = function() {
  this.currentPlayer.score += this.turnScore;
};

Game.prototype.resetTurnScore = function() {
};
