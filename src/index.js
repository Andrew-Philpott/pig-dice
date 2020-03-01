import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { PigDie } from "./pigdie.js";
import { Player } from "./player.js";
import { Game } from "./game.js";
import {
  displayGame,
  currentPlayerDisplay,
  CheckUserInputtedPigDieSideCount
} from "./interface-logic.js";
import { attachGameListeners } from "./interface-logic.js";
import { gameListener } from "./interface-logic.js";
import $ from "jquery";

$(document).ready(function() {
  let game;
  attachGameListeners();

  $("form#game-form").submit(function(event) {
    const inputtedPigDieNumberOfSides = $("input#user-number-input").val();
    if (
      CheckUserInputtedPigDieSideCount(inputtedPigDieNumberOfSides) === true
    ) {
      const playersDisplay = $("#players");
      const formContainer = $("#form-container");
      const gameDisplay = $("#game-container");
      const inputtedPlayerNames = [
        new Player($("input#player-one-name-input").val()),
        new Player($("input#player-two-name-input").val())
      ];
      const pigDie = new PigDie(inputtedPigDieNumberOfSides);
      game = new Game(inputtedPlayerNames, pigDie);
      formContainer.toggle();
      playersDisplay.html(displayGame(game));
      gameDisplay.toggle();
      currentPlayerDisplay(game);
      gameListener(game);
    }
    event.preventDefault();
  });
});
