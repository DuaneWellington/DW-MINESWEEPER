!{}(populate link for where I've saved the wireframe here)

<!-- // MINESWEEPER GAME!!
// This should be challenging!

// Items to consider:

// User controls two mouse buttons on the board
    // -> leftBtn: accesses main options at top menu; clears tile covers from the board
    // rightBtn: toggles through flags and question-marks on tile covers on the board

// user selects difficulty level, or chooses custom, where they choose # of mines and # of rows and columns.

//  # of total tiles can be controlled by determining from the user how many tiles will be in a row, and how many in a column, based off of a minimum # for each. Also a minimum AND maximum # of tiles based on the grid size and total # of tiles.



// addEventListeners for two buttons, doing different things depending on where they click on the UI

// Can I use a flexbox setup for this game and be able to randomly generate the locations for all the mines?
    // 2 layers of flexboxes for the grid? 1: tile covers; 2: mine and #'s (base layer)?
     
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

- game begins when player left clicks on the game board.
- timer starts counting when game begins
- as player selects where mine locations are by planting a flag over the covered tile (using right mouse button), the mine counter goes down.
- 'flood effect' occurs when a covered tile is left-clicked on, and a wave removes all adjacent covered tiles with no numbers beneath them, until the wave reaches covered tiles that DO have numbers beneath them. (somehow has to at least reveal the first set of numbered tiles so that the user can have clues to work from to continue mine sweeping). Has to check all tiles surrounding the clicked tile for !==0, and if true, those tiles have to check their surrounding tiles for !==0 (bypassing those already checked), until !==0 = false.
- uncovered tiles that are adjacent to mines will list how many mines they are adjacent to (9 tile grid, with numbered tile)
- gmaeplay continues until all mines are flagged && all possible tiles are uncovered safely; || if a hidden mine tile is left-clicked.
- gameOver: WINNER = expose the board showing all mine locations; countdown stops; console.log("You WIN!!"); emoji changes to thumbs up or sunglasses smiley, etc; pop-up box showing stats (timer, etc), "PLAY AGAIN?" button to reset game
- gameOver: LOSER = expose the board showing all mine locations (highlighting the tripped mine); countdown stops; console.log("You LOSE!!"); emoji changes to thumbs down or mind-blown smiley, etc; pop-up box showing stats (timer, etc), "PLAY AGAIN?" button to reset game