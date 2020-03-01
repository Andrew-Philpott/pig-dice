# _Pig Dice_

#### _Score 100 to beat your opponent, 02.29.2020_

#### By _**Andrew Philpott**_

## Description

_Challenge an opponent to see who can get to 100 points first. If the player clicks "Roll Die" and rolls a 1, they score nothing and it becomes the next player's turn. If the player rolls any other number, it is added to their turn total and the player's turn continues. If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn. Players can choose to roll between a 6-12 sided die._

- _Spec: The program should notify the user that a number value needs to be provided when the input value is not a number._

  - Input: "Hello World"
  - Output: "Please provide a valid number"

- _Spec: The program should notify the user that the value needs to be between 6 and 12._

  - Input: "20"
  - Output: "Please provide a value between 6 and 12"

- _Spec: The program should correctly make a pigdie object with its number of sides equal to the user provided value._

  - Input: "6"
  - Output: "numberOfSides = 6"

- _Spec: The program should display a number value between 1 and the user defined number of sides value when the pigdie is rolled._

  - Input: "7"
  - Output "1 or 2 or 3 or 4 or 5 or 6 or 7"

- _Spec: The program should correctly create a player with the user provided name and a score of 0_

  - Input: "Andrew"
  - Output "name: 'Andrew' score: '0'"

- _Spec: The program should correctly make a game object with two players and a turn score set to 0_

  - Input: "Andrew, George"
  - Output: "Player One: Andrew, Player Two: George, Turn Score: 0"

- _Spec: For each role that is not equal to 1, the turn score value should increase by the pigdie value._

  - Input: "turn score before roll: 0, rolled pigdie value: 6"
  - Output: "Turn Score for next roll: 6"

- _Spec: The program should be able to change the current player to x, where x is the other player._

  - Input: ""
  - Output: "Player x's turn"

- _Spec: The program should check the current player score and return false if it is not greater than or equal to 100._

  - Input: "0"
  - Output: "false"

- _Spec: The program should check the current player score and return true if it is more than or equal to 100._

  - Input: "100"
  - Output: "true"

  - _Spec: The program should add the turn score to the current players score when they choose to hold._

    - Input: "Current player score at 20, turn score at 10, choose to hold"
    - Output: "player score at 30"

  - _Spec: The program should be able to reset the turn score to 0._

    - Input: ""
    - Output: "0"

  - _Spec: The program should change the current player after a 1 is rolled on the pigdie._

    - Input: "1"
    - Output: "Next players turn"

  - _Spec: The program should reset the turn score after a 1 is rolled on the pigdie._

    - Input: "1"
    - Output: "Turn Score: 0"

  - _Spec: The program should reset the turn score to 0 and change the current player if the players score is less than 100._

    - Input: "60"
    - Output: "Next players turn, turn score: 0"

  - _Spec: The program should start a new game when the end game method is called. The game object's properties should be reset._

    - Input: "Player 1 wins!"
    - Output: "Start new game"

  - _Spec: The program should check the players score after they choose to hold._
    - Input: "Hold, turnscore: 66"
    - Output: "Player score 66"

## Setup/Installation Requirements

_Clone this repository_

_\$ npm install_

_\$ npm run start_

## Support and contact details

_Issues or concerns? Contact me at andrewphilpott92@gmail.com. I will try to get back to you as soon as I am able._

## Technologies Used

_HTML_<br>
_CSS_<br>
_Bootstrap_<br>
_Javascript_<br>
_JQuery_

### License

Copyright (c) 2019 **_Andrew Philpott_**

_This software is licensed under the MIT license._
