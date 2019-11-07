import { PigDie } from './../src/pigdie.js';

describe('PigDie', () => {

  test('should correctly make a pigdie with its number of sides set to the value provided', () => {
    var pigdie = new PigDie(7);
    expect(pigdie.numberOfSides).toEqual(7);
  });

  test('should return a random number from 1 to the number of sides value', () => {
    var pigdie = new PigDie(7);
    expect(pigdie.rollDie()).toBeGreaterThanOrEqual(1);
    expect(pigdie.rollDie()).toBeLessThanOrEqual(7);
  });
  
});
