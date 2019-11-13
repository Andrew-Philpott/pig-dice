import { Game } from './../src/game.js';
import { Player } from './../src/player.js';
import { PigDie } from './../src/pigdie.js';

describe('Game', () => {
  test('The program should correctly make a game object with two players and a turn score set to 0', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    expect(game.players[0].name).toEqual('Andrew');
    expect(game.players[1].name).toEqual('George');
    expect(game.turnScore).toEqual(0);
  });

  test('The checkDieValue should increase the turn score when the value is greater than 1', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    var turnScoreBefore = game.turnScore;
    game.checkDieValue(6);
    expect(game.turnScore).toEqual(turnScoreBefore + 6);
  });

  test('The program should be able to change the current player', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    game.currentPlayer = game.players[1];
    game.changeCurrentPlayer();
    expect(game.currentPlayer).toEqual(game.players[0]);
  });

  test('The program should check the score of the current player and return false if the score is not over 100', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    expect(game.checkPlayerScore()).toEqual(false);
  });

  test('The program should check the score of the current player and return true if it is greater than or equal to 100', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    playerOne.score += 100;
    expect(game.checkPlayerScore()).toEqual(true);
  });

  test('The program should add the turn score to the current players score', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    var currentPlayer = game.currentPlayer;
    game.turnScore += 10;
    game.hold();
    expect(currentPlayer.score).toEqual(10);
  });

  test('The program should be able to reset the turn score back to 0', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    game.turnScore += 10;
    game.resetTurnScore();
    expect(game.turnScore).toEqual(0);
  });

  test('The program should change the current player after a 1 is rolled', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    game.checkDieValue(1);
    expect(game.currentPlayer).toEqual(playerTwo);
  });

  test('The program should reset the turn score after a 1 is rolled', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    game.turnScore += 10;
    game.checkDieValue(1);
    expect(game.turnScore).toEqual(0);
  });

  test('The program should reset the turn score to 0 and change the current player if the score is less than 100 during the checkPlayerScore call for the current player', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    game.turnScore += 99;
    playerOne.score += 99;
    game.checkPlayerScore();
    expect(game.turnScore).toEqual(0);
    expect(game.currentPlayer).toEqual(playerTwo);
  });

  test('The program should reset the game when a players score is greater than or equal to 100', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    game.turnScore += 100;
    playerOne.score += 100;
    game = game.endGame();
    expect(game).toBeNull();
  });

  test('The program should check the players score after they chose to hold', () => {
    var playerOne = new Player('Andrew');
    var playerTwo = new Player('George');
    var players = [playerOne, playerTwo];
    var game = new Game(players, 6);
    game.turnScore += 66;
    game.hold();
    expect(game.turnScore).toEqual(0);
    expect(game.currentPlayer).toEqual(playerTwo);
  });
});
