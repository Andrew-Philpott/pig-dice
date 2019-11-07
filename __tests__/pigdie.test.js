import { PigDie } from './..src/pigdie.js';

describe('PigDie', () => {

  test('should correctly make a pigdie with its number of sides set to the value provided', () => {
    var pigdie = new PigDie(7);
    expect(pigdie.numberOfSides).toEqual(7);
  });
});
