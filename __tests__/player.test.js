import { Player } from './../src/player.js';

describe('Player', () => {
  test('The program should correctly make a player with the user provided name and a score of 0', () => {
    var player = new Player('Andrew');
    expect(player.name).toEqual('Andrew');
    expect(player.score).toEqual(0);
  });
});
