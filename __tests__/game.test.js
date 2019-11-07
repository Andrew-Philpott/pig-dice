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
    var game = new Game(playerOne, playerTwo);
    var turnScoreBefore = game.turnScore;
    game.checkDieValue(6);
    expect(this.turnScore).toEqual(turnScoreBefore + 6);
  });
});
