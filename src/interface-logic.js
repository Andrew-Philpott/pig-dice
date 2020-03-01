import $ from "jquery";

export function CheckUserInputtedPigDieSideCount(
  userInputtedPigDieSideCountArgument
) {
  const userInputToNumber = parseInt(userInputtedPigDieSideCountArgument);
  if (userInputToNumber >= 6 && userInputToNumber <= 12) {
    return true;
  } else {
    $("#errors").html("<p>Please enter a number between 6 and 12.</p>");
    return false;
  }
}

export function resetInputs(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    $(inputArray[i]).val("");
  }
}
export function attachGameListeners() {
  const gameContainerHTML = $("#game-container");
  const formContainerHTML = $("#form-container");
  gameContainerHTML.on("click", "button#reset-game-button", function() {
    gameContainerHTML.toggle();
    let inputs = [
      $("#player-one-name-input"),
      $("#player-two-name-input"),
      $("#user-number-input")
    ];
    resetInputs(inputs);
    formContainerHTML.toggle();
  });
}

export function currentPlayerDisplay(game) {
  let currentPlayerHtml = $("#current-player");
  let currentPlayer = game.currentPlayer.getName();
  currentPlayerHtml.html(currentPlayer);
}

export function gameListener(game) {
  const gameContainerHTML = $("#game-container");
  gameContainerHTML.on("click", "#roll-pigdie-button", function() {
    game.checkDieValue(game.pigDie.rollDie());
    $("#turn-score").text(game.getTurnScore());
    currentPlayerDisplay(game);
  });

  gameContainerHTML.on("click", "#hold-button", function() {
    game.hold();
    let gameOver = game.checkPlayerScore();
    if (gameOver) {
      const formContainerHTML = $("#form-container");
      alert(game.currentPlayer.getName() + " wins!");
      gameContainerHTML.toggle();
      let inputs = [
        $("#player-one-name-input"),
        $("#player-two-name-input"),
        $("#user-number-input")
      ];
      resetInputs(inputs);
      formContainerHTML.toggle();
    }
    let playersDisplay = $("#players");
    playersDisplay.html(displayGame(game));
    $("#turn-score").text(game.turnScore);
    currentPlayerDisplay(game);
  });
}

export function displayGame(game) {
  let htmlForPlayersNamesAndScores = "";
  for (let i = 0; i < game.players.length; i++) {
    let player = game.players[i];
    htmlForPlayersNamesAndScores +=
      '<div class="player-name-score"><p><span>' +
      player.getName() +
      "</span> <span>" +
      player.getScore() +
      "</span></p></div>";
  }
  return htmlForPlayersNamesAndScores;
}
