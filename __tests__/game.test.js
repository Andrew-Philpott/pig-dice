import { Game } from './../src/game.js';
import { Player } from './../src/player.js';

describe('Game', () => {
  test('The program should correctly make a game object with two players and a turn score set to 0', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var game = new Game(playerOne, playerTwo);
    expect(game.players[0].name).toEqual('Andrew');
    expect(game.players[1].name).toEqual('George');
    expect(game.turnScore).toEqual(0);
  });

  test('The checkDieValue should increase the turn score when the value is greater than 1', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var game = new Game(playerOne, playerTwo);
    var turnScoreBefore = game.turnScore;
    game.checkDieValue(6);
    expect(game.turnScore).toEqual(turnScoreBefore + 6);
  });

  test('The program should be able to change the current player', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var game = new Game(playerOne, playerTwo);
    game.currentPlayer = game.players[1];
    game.changeCurrentPlayer();
    expect(game.currentPlayer).toEqual(game.players[0]);
  });

  test('The program should check the score of the current player and return false if the score is not over 100', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var game = new Game(playerOne, playerTwo);
    expect(game.checkPlayerScore()).toEqual(false);
  });

  test('The program should check the score of the current player and return true if it is greater than or equal to 100', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var game = new Game(playerOne, playerTwo);
    playerOne.score += 100;
    expect(game.checkPlayerScore()).toEqual(true);
  });

  test('The program should add the turn score to the current players score', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var game = new Game(playerOne, playerTwo);
    game.turnScore += 10;
    game.hold();
    expect(game.currentPlayer.score).toEqual(10);
  });

  test('The program should reset the turn score back to 0', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var game = new Game(playerOne, playerTwo);
    game.turnScore += 10;
    game.resetTurnScore();
    expect(game.turnScore).toEqual(0);
  });
});
