import { CheckUserInputtedPigDieSideCount } from './../src/interface-logic.js';

describe('CheckUserInputtedPigDieSideCount', () => {

  test('should return the number the user provided', () => {
    expect(CheckUserInputtedPigDieSideCount(7)).toEqual(7);
  });
});
