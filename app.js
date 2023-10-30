console.log("js:loaded");

// establish a few variables for the game upfront
const menu = "";
const menu2 = "";
const stats = "";
const board = document.querySelector('.board');
const tiles = "";
const timer = 0;
const difficulty = ['easy', 'hard', 'expert', 'custom'];
const rBtn = "";
const lBtn = "";
const emoji = "";
const mines = 10;
const flag = "";
const gameStart = "";
const gameOver = "";
const minefield = document.querySelector('.minefield')


//console.log(difficulty.indexOf('easy'))
difficultyEasy = difficulty.indexOf('easy')
console.log(board)


// default board layout, ready to start game when lMouseClick on game board is initiated

// options menu to change difficulty from Easy (default) to Hard, Expert, and custom (within ranges for rows, columns and # of mines)

// gameStart (first lMouseClick on game board begins game)

// display boxes showing # of mines on board, timer, and emoji

// timer (starts when game starts, counts 1000 ms, displays in display box in red digital with black background)

// gamePlay (method of playing game, 'flood' events, determining game end condition [win or lose])

// mouseOver (changes board tile color when hovering over tile)

// rMouseClick (general menu access, remove tiles on board, select options)

// lMouseClick (toggle flag on board, no use elsewhere)



// gameOver
// display stats within pop-up box
// option to restart/reset or exit

