!{}(populate link for where I've saved the wireframe here)

 MINESWEEPER GAME!!
 This should be challenging!

 Items to consider:

 User controls two mouse buttons on the board
     -> leftBtn: accesses main options at top menu; clears tile covers from the board
     rightBtn: toggles through flags and question-marks on tile covers on the board

 user selects difficulty level, or chooses custom, where they choose # of mines and # of rows and columns.

  The # of total tiles can be controlled by determining from the user how many tiles will be in a row, and how many in a column, based off of a minimum # for each. Also a minimum AND maximum # of tiles based on the grid size and total # of tiles.



 addEventListeners for two buttons, doing different things depending on where they click on the UI

 Can I use a flexbox setup for this game and be able to randomly generate the locations for all the mines?
     2 layers of flexboxes for the grid? 1: tile covers; 2: mine and #'s (base layer)?
     
START OF GAME

when game loads, it autoloads in easy mode, ready to play. 
(if sounds added, a small starting jingle will play. sound will also be for when a tile is left-clicked, right-clicked, for winning the game, and for hitting a mine and blowing up)

CHOOSING DIFFERENT DIFFICULTY LEVELS, OR CUSTOM DIFFICULTY

User can left click the appropriately labeled button to select from a drop-down menu to choose preset difficulties, or to customize their own grid layout and # of mines on the board.

- drop down menu can be backed out of by clicking outside the borders of the drop down menu.

CUSTOM GAME GRID AND # OF MINES

- Grid customization, once chosen, brings up another menu board. Here user can select # of columns within a range (min to max), # of rows within a range (min to max), and number of mines within a range (min to max, dynamic based on total # of tiles, calculated after rows and columns # are chosen).

- custom menu can be backed out of by clicking the X at top right corner

- if # of rows, columns or mines exceeds max # allowed for each type, button to start game will not become available.

- once all aspects of the custom grid are within acceptable ranges, the option to start game will come up.

GAMEPLAY

- game loads initially ready to play, defaulted to 9x9 grid and 10 mines to find

- game begins when player left clicks on the game board.

- timer starts counting when game begins

- as player selects where mine locations are by planting a flag over the covered tile (using right mouse button), the mine counter goes down.

- 'flood effect' occurs when a covered tile is left-clicked on, and a wave removes all adjacent covered tiles with no numbers beneath them, until the wave reaches covered tiles that DO have numbers beneath them. (somehow has to at least reveal the first set of numbered tiles so that the user can have clues to work from to continue mine sweeping). Has to check all tiles surrounding the clicked tile for !==0, and if true, those tiles have to check their surrounding tiles for !==0 (bypassing those already checked), until !==0 = false.

- uncovered tiles that are adjacent to mines will list how many mines they are adjacent to (9 tile grid, with numbered tile)

- gmaeplay continues until all mines are flagged && all possible tiles are uncovered safely; || if a hidden mine tile is left-clicked.

- gameOver: WINNER = expose the board showing all mine locations; countdown stops; console.log("You WIN!!"); emoji changes to thumbs up or sunglasses smiley, etc; pop-up box showing stats (timer, etc), "PLAY AGAIN?" button to reset game

- gameOver: LOSER = expose the board showing all mine locations (highlighting the tripped mine); countdown stops; console.log("You LOSE!!"); emoji changes to thumbs down or mind-blown smiley, etc; pop-up box showing stats (timer, etc), "PLAY AGAIN?" button to reset game

PSEUDOCODE FOR GAME MECHANICS

1. define list of constants (menu items, board items, r & l mouse buttons, etc)

2. define list of variables

3.  a.build the game board (overall board, menu box, stats display box, emoji)
    b. build the minefield (flex grid, generated through Javascript)
    c. define the buttons (left button clears tiles, right button sets flags)
    
4. define how the mines are randomly placed on the field (random placement based on grid rows and columns, making sure no two mines get placed on the same coordinates)
    a. Math.random to generate mine locations based on field grid coordinates
    b. For statement to make sure a mine cannot be placed where another mine already exists

5. define how the number clues around mines work
    - seems like it could be similar to how the flood event would work. checks adjacent tiles to see how many mines are within the 8 surrounding grid locations and logs the number in the middle tile
    - different colors for numbers. ie, 1 is blue, 2 is red, 3 is green, etc up to 8.

6. code toggle flagging operator for right mouse button (right mouse button only works on minefield)
    - contextmenu for right mouse button, tied to an if statement to determine if right click is occurring on minefield -> if so, then proceed with toggle function, otherwise no effect.

7. define left mouse controls on minefield and in menu
    - typical addEventListener for left mouse button
    - works in minefield and everywhere else
    - only doesn't work when a tile is flagged.
    - determine how the left mouse click uncovers the tile and exposes what's hidden underneath

8. determine how the flood event will operate
    - checks all 8 tiles around it to see if they are INSIDE THE MINEFIELD.
    - checks the remaining tiles (could still be all 8) to see if they are empty.
    - if any of those tiles are empty, they will also check 8 tiles around them to see if on the board and empty (as long as those tiles have not ALREADY been checked)
    - chain reaction flood event will stop when all checks come back having found something in an adjacent minefield tile.

9. determine how the game will start and be timed.
    a. game loads ready to begin (9x9 grid, 10 mines randomly placed on the board)
    b. timer starts at first accepted left mouse click

10. determine how game will end
    a. winner! -> emoji changes to sunglasses, console.log "You WIN!!", timer stops, flags switch to cleared minefield with correclty cleared mines showing check, console.log "Play Again?" as a button at bottom?
    b. loser! -> emoji changes to exploded head, console.log "You LOSE!!", timer stops, flags switch to cleared minefield with mines showing, mines that were correctly cleared showing 'x' through them, and the mine you triggered showing detonated with a red background, console.log "Play Again?" as a button at bottom?