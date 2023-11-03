console.log("js:loaded");

// Board constants and variables
const board = [];
const rows = 9;
const columns = 9;
let minesCount = 5;
const minesLocation = [];
let tilesClicked = 0;
let flagEnabled = false;
let gameOver = false;

// Initialize the game on window load
window.onload = function () {
  startGame();
};

// Push mines to the minesLocation array
function setMines() {
  minesLocation.push("2-2", "2-3", "5-6", "3-4", "1-1");
  console.log(minesLocation);
}

// Reveal mines at the end of the game
function revealMines() {
  minesLocation.forEach((mineLocation) => {
    let mineLoc = document.getElementById(mineLocation);
    if (mineLoc) {
      mineLoc.innerText = "💣";
      mineLoc.style.backgroundColor = "red";
    }
  });
}

// Main game environment
function startGame() {
  tilesClicked = 0;
  flagEnabled = false;
  gameOver = false;

  document.getElementById("minesOnBoard").textContent = minesCount
    .toString()
    .padStart(3, "0");
  document.getElementById("smiley").addEventListener("click", smileyToggle);

  setMines();

  // Set the smiley face on the toggle button
  document.getElementById("smiley").innerText = "🙂";

  // Generate the game board

  const boardContainer = document.getElementById("board");

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = `${r}-${c}`;
      tile.addEventListener("click", lButton);
      tile.addEventListener("contextmenu", rButton);
      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }

  function updateMinesCount() {
    let minesDisplay = document.getElementById("minesOnBoard");
    minesDisplay.textContent = minesCount.toString().padStart(3, "0");
  }

  // Click event for Smiley/Flag Toggle
  function smileyToggle() {
    flagEnabled = !flagEnabled;
    document.getElementById("smiley").innerText = flagEnabled ? "🚩" : "🙂";
  }

  // Click event for the game board
  function lButton(e) {
    if (gameOver) {
      return; // Don't do anything if the game is over
    }
    let tile = this;
    if (e.button === 0) {
      // left-click
      if (flagEnabled) {
        // flag mode is enabled
        if (e.target.innerText == "") {
          e.target.innerText = "🚩";
          minesCount--;
          updateMinesCount();
        } else {
          e.target.innerText = "";
          minesCount++;
          updateMinesCount();
        }
      } else {
        // normal left-click action
        const [row, col] = tile.id.split("-"); // Get the row and column from the tile's ID
        checkMine(parseInt(row), parseInt(col)); // Pass the row and column to checkMine
      }
    } else if (e.button === 2) {
      // right-click
    }
  }

  function checkMine(r, c) {
    if (c < 0 || c >= columns || r < 0 || r >= rows || gameOver) {
      return;
    }
    if (
      board[r] &&
      board[r][c] &&
      !board[r][c].classList.contains("tile-clicked")
    ) {
      board[r][c].classList.add("tile-clicked");

      if (minesLocation.includes(`${r}-${c}`)) {
        gameOver = true;
        revealMines();
        console.log("Game Over! You LOSE!!");
        return;
      }

      let minesFound = 0;
      const directions = [
        { r: -1, c: -1 },
        { r: -1, c: 0 },
        { r: -1, c: 1 },
        { r: 0, c: -1 },
        { r: 0, c: 1 },
        { r: 1, c: -1 },
        { r: 1, c: 0 },
        { r: 1, c: 1 },
      ];

      for (const dir of directions) {
        const newRow = r + dir.r;
        const newCol = c + dir.c;
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns) {
          if (minesLocation.includes(`${newRow}-${newCol}`)) {
            minesFound++;
          }
        }
      }

      if (minesFound > 0) {
        board[r][c].innerText = minesFound;
        board[r][c].classList.add(`clr${minesFound}`);
      } else {
        for (const dir of directions) {
          const newRow = r + dir.r;
          const newCol = c + dir.c;
          checkMine(newRow, newCol);
        }
      }

      tilesClicked++;
      if (tilesClicked === rows * columns - minesCount) {
        document.getElementById("minesOnBoard").innerText = "000";
        console.log("You WIN!!");
      }
    }
  }

  function rButton(e) {
    e.preventDefault(); // Prevent context menu
    // Implement flagging or other logic for right-click
  }

  // Add event listeners for each tile
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(`${r}-${c}`);
      // tile.addEventListener("click", lButton);
      // tile.addEventListener("contextmenu", rButton);
    }
  }
}

// ------- closest to being done!!!!!! ------------ Flood works!! Flagging works!! Clicking on a mine ends the game!!! Still have to get a few things tweaked, but overall this game is nearly done!!