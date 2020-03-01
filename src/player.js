export class Player {
  constructor(nameArgument){
    this.name = nameArgument;
    this.score = 0;
  }

  getName() {
    return this.name;
  }

  getScore() {
    return this.score;
  }

  increaseScore(increaseScoreByArg) {
    this.score += (this.score + increaseScoreByArg);
  }
}
