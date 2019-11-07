export function Game(playerOne, playerTwo) {
  this.players = [playerOne, playerTwo];
  this.turnScore = 0;
};

Game.prototype.checkDieValue = function(valueOfPigDie) {
  if (valueOfPigDie !== 1) {
    this.turnScore += valueOfPigDie;
  };
};
