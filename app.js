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
  //-- ICEBOX -> get minesDisplay to read as 3 digits at all times{
  document.getElementById("minesOnBoard").textContent = "00" + minesCount;

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
  document.addEventListener('click', lButton)
    function lButton() {
        let tile = this;
        if (flagEnabled === true) {
    return
        } else if (flagEnabled === false) {
            document.getElementById('board[r][c]').append(this);
            console.log(this)
    
        }}

};

// randomly place mines on the board

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

// cover mines?

//
// searching for mines nearby, and adding numbers to tiles
function checkMine(r, c) {
  if ((c < 0 || c >= columns || r, 0 || r >= rows)) {
    return;
  }
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
}

/* gameOver function (Smiley turns to exploded head; timer stops; console.log("You WIN!!") with minefield fully exposed showing all mines, or ("You LOSE!!" with minefield fully exposed and the triggered mine tile in red, etc) and option to restart!! */

// let rTile = document.createElement('div');

// rTile.addEventListener('contextmenu', rClickTile => {
// rClickTile.preventDefault();

// function rClickTile() {
//     let tile = this;
//     if (flagEnabled === false) {
//         if (tile.innerText == "") {
//             tile.innerText = '&#128681'
//         } else if (flagEnabled === true) {
//             if (tile.innertext = '&#128681'); {
//                 tile.innerText = "";
//     }
//     }
// }
// }

