export function Game(playerOne, playerTwo) {
  this.players = [playerOne, playerTwo];
  this.turnScore = 0;
  this.currentPlayer = this.players[0];
};

Game.prototype.checkDieValue = function(valueOfPigDie) {
  if (valueOfPigDie !== 1) {
    this.turnScore += valueOfPigDie;
  };
};

Game.prototype.changeCurrentPlayer = function() {
};
