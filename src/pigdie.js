export function PigDie(numberOfSidesArg) {
  this.numberOfSides = numberOfSidesArg;
};

PigDie.prototype.rollDie = function() {
  var max = Math.floor(this.numberOfSides);
  return Math.floor(Math.random() * max) + 1;
};
