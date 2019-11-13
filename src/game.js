export class Game {
  constructor(players, pigDie){
    this.players = players;
    this.turnScore = 0;
    this.currentPlayer = this.players[0];
    this.pigDie = pigDie;
  };

  checkDieValue(valueOfPigDie) {
    if (valueOfPigDie !== 1) {
      this.turnScore += valueOfPigDie;
    } else {
      this.resetTurnScore();
      this.changeCurrentPlayer();
    }
  };

  changeCurrentPlayer() {
    var currentPlayer = this.currentPlayer;
    if ((this.players.indexOf(currentPlayer) + 1) === this.players.length) {
      this.currentPlayer = this.players[0];
    } else {
      this.currentPlayer = (this.players[this.players.indexOf(currentPlayer) + 1]);
    }
  };

  checkPlayerScore() {
    if (this.currentPlayer.score >= 100) {
      this.endGame(this);
      return true;
    }
    this.resetTurnScore();
    this.changeCurrentPlayer();
    return false;
  };

  hold() {
    this.currentPlayer.score += this.turnScore;
    this.checkPlayerScore();
  };

  resetTurnScore() {
    this.turnScore = 0;
  }

  endGame() {
    return null;
  };
};
