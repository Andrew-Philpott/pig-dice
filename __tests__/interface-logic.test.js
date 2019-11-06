import { CheckUserInputtedPigDieSideCount } from './../src/interface-logic.js';

describe('CheckUserInputtedPigDieSideCount', () => {

  test('should notify the user that a number value needs to be provided', () => {
    expect(CheckUserInputtedPigDieSideCount("")).toEqual("Please provide a valid number");
  });

  test('should return the number if it is between 6 and 12', () => {
    expect(CheckUserInputtedPigDieSideCount(7)).toEqual(7);
  });

  test('should notify the user that the number value needs to be between 6 and 12', () => {
    expect(CheckUserInputtedPigDieSideCount(20)).toEqual("Please provide a value between 6 and 12");
  });
});
