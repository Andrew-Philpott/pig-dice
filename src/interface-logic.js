export function CheckUserInputtedPigDieSideCount(userInputtedPigDieSideCountArgument) {
  if (!Number.isInteger(userInputtedPigDieSideCountArgument)) {
    return "Please provide a valid number";
  }
};
