import { CheckUserInputtedPigDieSideCount } from './../src/interface-logic.js';

describe('CheckUserInputtedPigDieSideCount', () => {

  test('should notify the user that a number value needs to be provided', () => {
    expect(CheckUserInputtedPigDieSideCount("")).toEqual("Please provide a valid number");
  });
});
