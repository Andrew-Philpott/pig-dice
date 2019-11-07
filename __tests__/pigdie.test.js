import { PigDie } from './..src/pigdie.js';

describe('PigDie', () => {

  test('should correctly make a pigdie', () => {
    PigDie pigdie = new PigDie(7);
    expect(pigdie.numberOfSides).toEqual(7);
  });
});
