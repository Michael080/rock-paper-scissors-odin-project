# Rock Paper Scissors Lizard Spock
## Understanding the problem
**rules:** this game follows simple rules (*slightly more complicated w/ additions: lizard and spock*) that follow the following basic pattern
    - each *weapon* has two weapons which it can defeat and vice-a-versa

**game loop:** each round of the game the weapon choice of each player is taken as input, if one of the players has chosen a *winning weapon* victory is determined, if not the game is a draw.

## Plan
### ui
- js console, the program will have no gui
- user input will be received via prompt where a string is requested from user

### i/o
- **input:** select one of 10 weapons (*both players*)
- **output:** announce winning player and state rule *e.g. "Lizard poisons Spock"* or draw

### pseudocode
```javascript


WHILE winner == false
    READ player1.weapon
    READ player2.weapon

    // check if player 1 wins
    IF player1.weapon.defeats == player2.weapon
        player1.winner()
    ENDIF

    // check if player 2 wins
    IF player2.weapon.defeats == player1.weapon
        player2.winner()
    ENDIF
ENDWHILE

PRINT winnerMessage
```
