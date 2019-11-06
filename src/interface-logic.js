export function CheckUserInputtedPigDieSideCount(userInputtedPigDieSideCountArgument) {
  if (!Number.isInteger(userInputtedPigDieSideCountArgument)) {
    return "Please provide a valid number";
  } else if ((userInputtedPigDieSideCountArgument >= 6) && (userInputtedPigDieSideCountArgument <= 12)) {
    return userInputtedPigDieSideCountArgument;
  } else {
    return "Please provide a value between 6 and 12";
  }
};
