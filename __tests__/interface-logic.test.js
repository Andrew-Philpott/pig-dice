import { CheckUserInputtedPigDieSideCount } from './../src/interface-logic.js';

describe('CheckUserInputtedPigDieSideCount', () => {

  test('should return the number the user provided', () => {
    expect(CheckUserInputtedPigDieSideCount(7)).toEqual(7);
  });

  test('should notify the user that a number value needs to be provided', () => {
    expect(CheckUserInputtedPigDieSideCount("")).toEqual("Please provide a valid number");
  });
});
