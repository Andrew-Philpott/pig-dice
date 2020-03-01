export class Game {
  constructor(players, pigDie) {
    this.players = players;
    this.turnScore = 0;
    this.currentPlayer = this.players[0];
    this.pigDie = pigDie;
  }
  getTurnScore() {
    return this.turnScore;
  }

  checkDieValue(valueOfPigDie) {
    if (valueOfPigDie !== 1) {
      this.turnScore += valueOfPigDie;
    } else {
      this.turnScore = 0;
      this.changeCurrentPlayer();
    }
  }

  changeCurrentPlayer() {
    let currentPlayer = this.currentPlayer;
    if (this.players.indexOf(currentPlayer) + 1 === this.players.length) {
      this.currentPlayer = this.players[0];
    } else {
      this.currentPlayer = this.players[
        this.players.indexOf(currentPlayer) + 1
      ];
    }
  }

  hold() {
    this.currentPlayer.score += this.turnScore;
  }

  checkPlayerScore() {
    if (this.currentPlayer.score >= 100) {
      return true;
    }
    this.turnScore = 0;
    this.changeCurrentPlayer();
    return false;
  }
}
