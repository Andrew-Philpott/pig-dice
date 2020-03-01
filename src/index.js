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
    let inputtedPigDieNumberOfSides = $("input#user-number-input").val();
    if (
      CheckUserInputtedPigDieSideCount(inputtedPigDieNumberOfSides) === true
    ) {
      event.preventDefault();
      let playersDisplay = $("#players");
      let formContainer = $("#form-container");
      let gameDisplay = $("#game-container");
      let inputtedPlayerNames = [
        new Player($("input#player-one-name-input").val()),
        new Player($("input#player-two-name-input").val())
      ];
      let pigDie = new PigDie(inputtedPigDieNumberOfSides);
      game = new Game(inputtedPlayerNames, pigDie);
      formContainer.toggle();
      playersDisplay.html(displayGame(game));
      gameDisplay.toggle();
      currentPlayerDisplay(game);
      gameListener(game);
    } else {
      event.preventDefault();
      $("#errors").html("<p>Please enter a number between 6 and 12</p>");
    }
  });
});
