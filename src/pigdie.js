export class PigDie {
  constructor(numberOfSidesArg){
    this.numberOfSides = numberOfSidesArg;
  };
  rollDie() {
    var max = Math.floor(this.numberOfSides);
    return Math.floor(Math.random() * max) + 1;
  };
};
