console.log("js:loaded");

// looking at a board generator option...
const board = [];
const rows = 9;
const columns = 9;

const minesCount = 5;
const minesLocation = [];
const tilesClicked = 0;
const flagEnabled = false;
const gameOver = false;

window.onload = function () {
  startGame();
}

// check -> place mines on the board
function setMines() {
  minesLocation.push('2-2');
  minesLocation.push('2-3');
  minesLocation.push('5-6');
  minesLocation.push('3-4');
  minesLocation.push('1-1');
}


function startGame() {
  //-- ICEBOX -> get minesDisplay to read as 3 digits at all times{
  document.getElementById("minesOnBoard").textContent = "00" + minesCount;
  setMines();

  // auto-generate the board
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }
  console.log(board);

  // add Event Listener to clear tiles using left mouse button
  document.addEventListener("click", lButton);
  function lButton() {
    let tile = this;
    if (flagEnabled === true) {
      return;
    } else if (flagEnabled === false) {
      document.getElementById("board[r][c]").append(this);
      
    } console.log(this);
  }
};

// randomly place mines on the board

// function placeMines(board, minesCount) {
//   let minesPlaced = 0;
//   while (minesPlaced < minesCount) {
//     const row = Math.floor(Mth.random() * rows);
//     const column = Math.floor(Math.random() * columns);

//     if (board[row][column] !== -1) {
//       board[row][column] = -1;
//       minesPlaced++;
//     }
//   }
// }

// get coordinates for mines that will be placed on the board
function getMineCoordinates(board, x) {
  const mineCoordinates = [];
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (board[row][column] === -1) {
        mineCoordinates.push({row, column});
        if (mineCoordinates.length === x) {
          return mineCoordinates;
        }
      }
    }
  }
  return mineCoordinates;
  console.log(getMineCoordinates)
}


const mineField = document.getElementById("minesOnBoard");
for (let i = 1; i <= minesCount; i++) {
  let place = document.createElement("div");
  place.className = "place";
  mineField.appendChild(place);

  
  /* add eventListener for left-click to clear tiles and potentially activate flood event
    - Start timer only when left click on a tile.
    - Also add contextmenu with a preventDefault(); on the board for right click to toggle flag on/off. 
    - When flag on == true for a tile, left click won't work on that tile. Should be a simple "if flag on then return, else perform function" 
    
    */
  const child = document.createElement("div");
  child.className = "child";
  mineField.appendChild(child);
}


// At game start (left click on tile) begin timer

let timer = setInterval(function () {
  displayNumber--;
  display.textContent = displayNumber;
  if (displayNumber > 999) {
    console.log(timer);
    clearInterval(timer);
  }
}, 1000);


function rClickTile() {

  let tile = this;
  if (flagEnabled == false) {
      if (tile.innerText == "") {
          tile.innerText = 'F'
      } else if (flagEnabled == true) {
          if (tile.innertext = 'F'); {
              tile.innerText = "";
  }
  } return;
}

if (minesLocation.includes(tile.id)) {
  gameOver = true;
  return;
}

let coords = tile.id.split('-')
let r = parseInt(coords[0]);
let c = parseInt(coords[1]);
checkMine(r, c)
;}

//
// searching for mines nearby, and adding numbers to tiles


function showMines() {
  for (let r=0; r , rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = board[r][c];
      if (minesLocation.includes(tile.id)) {
        tile.innerText = 'B';
        tile.style.backgroundColor = 'red'
      }
    }
  }
}

// recursion flood event
function checkMine(r, c) {
  if ((c < 0 || c >= columns || r, 0 || r >= rows)) {
    return;
  }
  if (board[r][c].classList.contains('tile-clicked')) {
    return;
  }
board[r][c].classList.add('tile-clicked')

  let minesFound = 0;

  minesFound += checkTile(r - 1, c - 1); // top left
  minesFound += checkTile(r - 1, c); // top
  minesFound += checkTile(r - 1, c + 1); // top right

  minesFound += checkTile(r, c - 1); // left
  minesFound += checkTile(r, c + 1); // right

  minesFound += checkTile(r + 1, c - 1); // bottom left
  minesFound += checkTile(r + 1, c); //bottom
  minesFound += checkTile(r + 1, c + 1); // bottom right

  if (minesFound > 0) {
    board[r][c].innerText = minesFound;
    board[r][c].classList.add("clr" + minesFound.toString());
  }
  else {
    checkMine(r - 1, c - 1);  // top left
    checkMine(r - 1, c);      // top
    checkMine(r - 1, c + 1);  // top right

    checkMine(r, c - 1);  // left
    checkMine(r, c + 1);  // right

    checkMine(r + 1, c - 1);  // bottom left
    checkMine(r + 1, c);  // bottom
    checkMine(r + 1, c -+1);  // bottom right
  }

  if (tilesClicked == rows * columns - minesCount) {
    document.getElementById('minesOnBoard').innerText = '000'
  }
}



function checkTile(r, c) {
  if (r < 0 || r >= rows || c >= columns) {
    return 0;
  }
  if (minesLocation.includes(r.toString() + '-' + c.toString())) {
    return 1;
  }
}
/* gameOver function (Smiley turns to exploded head; timer stops; console.log("You WIN!!") with minefield fully exposed showing all mines, or ("You LOSE!!" with minefield fully exposed and the triggered mine tile in red, etc) and option to restart!! */

// let rTile = document.createElement('div');

// rTile.addEventListener('contextmenu', rClickTile => {
// rClickTile.preventDefault();

// }
