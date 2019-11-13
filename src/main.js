import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';;
import { Game } from './game.js';
import { PigDie } from './pigdie.js';

var game = new Game();
$(document).ready(function() {
  $("form#game-form").submit(function(event) {
    event.preventDefault();
    var inputtedPlayerOneName = $("input#player-one-name-input").val();
    var inputtedPlayerTwoName = $("input#player-two-name-input").val();
    var inputtedPigDieNumberOfSides = $("input#pigdie-number-input").val();

    game = new Game(inputtedPlayerOneName, inputtedPlayerTwoName, inputtedPigDieNumberOfSides);


  });
});
