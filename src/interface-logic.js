import $ from "jquery";

// import { Game } from './game.js';
export function CheckUserInputtedPigDieSideCount(
  userInputtedPigDieSideCountArgument
) {
  var userInputToNumber = parseInt(userInputtedPigDieSideCountArgument);
  if (userInputToNumber >= 6 && userInputToNumber <= 12) {
    return true;
  } else {
    return false;
  }
}

export function resetInputs(inputArray) {
  for (var i = 0; i < inputArray.length; i++) {
    $(inputArray[i]).val("");
  }
}
export function attachGameListeners() {
  var gameContainerHTML = $("#game-container");
  var formContainerHTML = $("#form-container");
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
  var gameContainerHTML = $("#game-container");
  gameContainerHTML.on("click", "#roll-pigdie-button", function() {
    game.checkDieValue(game.pigDie.rollDie());
    $("#turn-score").text(game.turnScore);
    currentPlayerDisplay(game);
  });

  gameContainerHTML.on("click", "#hold-button", function() {
    game.hold();
    let gameOver = game.checkPlayerScore();
    if (gameOver) {
      var formContainerHTML = $("#form-container");
      alert(game.currentPlayer.getName() + " wins!");
      gameContainerHTML.toggle();
      resetInputs(gameContainerHTML.find("input"));
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
