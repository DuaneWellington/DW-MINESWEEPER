console.log("js:loaded");

// Board constants and variables
const board = [];
const rows = 9;
const columns = 9;
let minesCount = 10;
const minesLocation = [];
let tilesClicked = 0;
let flagsPlaced = 0;
let gameOver = false;
let timerInterval; // Variable to hold the timer interval
let timerValue = 0; // Timer value in seconds
let gameEnded = false

// Initialize the game on window load
window.onload = function () {
  startGame();
};

// Reveal mines at the end of the game
function revealMines() {
  clearInterval(timerInterval);
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
  generateBoard();
  placeMines();

  document.getElementById("minesOnBoard").textContent = minesCount
    .toString()
    .padStart(3, "0");

  // Generate the game board
  function generateBoard() {
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
  }

  // place mines randomly on board
  function placeMines() {
    for (let i = 0; i < minesCount; i++) {
      let randomRow, randomCol;
      do {
        randomRow = Math.floor(Math.random() * rows);
        randomCol = Math.floor(Math.random() * columns);
      } while (minesLocation.includes(`${randomRow}-${randomCol}`));
      minesLocation.push(`${randomRow}-${randomCol}`);
    }
  }

  // restarts game
  function restartGame() {
    // clear board
    board.length = 0;
    minesLocation.length = 0;
    tilesClicked = 0;
    flagsPlaced = 0;
    gameOver = false;
    document.getElementById("board").innerHTML = '';
    document.getElementById("timer").textContent = "000"; // Reset the timer
    clearInterval(timerInterval);
    gameEnded = false
    document.getElementById("statsBox").style.display = "none"; // Hide the restart button
    startGame();
  }

  function updateMinesCount() {
    let minesDisplay = document.getElementById("minesOnBoard");
    minesDisplay.textContent = minesCount.toString().padStart(3, "0");
  }

  // Click event for the game board
  function lButton(e) {
    if (gameEnded) {
      return; // Don't do anything if the game is over
    }

    if (tilesClicked === 0) {
      // Timer starts at the first left-click
      startTimer();
    }
    let tile = this;
    if (e.button === 0) {
      // left-click
      if (e.target.innerText !== "🚩") {
        const [row, col] = tile.id.split("-");
        if (minesLocation.includes(`${row}-${col}`)) {
          gameOver = true;
          revealMines();
          console.log("Game Over! You LOSE!!");
          document.getElementById('smiley'.innerText = '🤯')
          document.getElementById("statsBox").style.display = "flex"; // Show the restart button
          gameEnded = true;
          stopTimer();
          return;
        } else {
          checkMine(parseInt(row), parseInt(col));
        }
      }
    }
  }

  function startTimer() {
    timerInterval = setInterval(function () {
      timerValue++;
      if (timerValue <= 999) {
        const timerDisplay = document.getElementById("timer");
        timerDisplay.textContent = timerValue.toString().padStart(3, "0");
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);
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
          checkWinCondition();
        }
      }

      tilesClicked++;
      if (tilesClicked === rows * columns - minesCount) {
        checkWinCondition();
      }
    }
  }

  function checkWinCondition() {
    if (flagsPlaced === minesCount && tilesClicked === rows * columns - minesCount) {
      console.log("You WIN! All mines cleared!");
      clearInterval(timerInterval);
      gameEnded = true;
      document.getElementById("statsBox").style.display = "block"; // Show the restart button
    }
  }

  function checkLoseCondition(row, col) {
    if (minesLocation.includes(`${row}-${col}`)) {
      console.log("You LOSE!");
      revealMines();
      stopTimer();
    }
  }

  // new function to stop timer when gameEnded = true
  function stopTimer() {
    clearInterval(timerInterval);
    gameEnded = true;
  }

  function rButton(e) {
    e.preventDefault(); // Prevent context menu
    let tile = this;
    if (e.button === 2) {
      // right-click
      if (tile.innerText === "") {
        tile.innerText = "🚩";
        minesCount--;
        flagsPlaced++;
      } else if (tile.innerText === "🚩") {
        tile.innerText = "";
        minesCount++;
        flagsPlaced--;
      }
      updateMinesCount();
    }
  }

  // Add event listeners for each tile
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(`${r}-${c}`);
      tile.addEventListener("click", lButton);
      tile.addEventListener("contextmenu", rButton);
    }
  }
}



// console.log("js:loaded");

// // Board constants and variables
// const board = [];
// const rows = 9;
// const columns = 9;
// let minesCount = 10;
// const minesLocation = [];
// let tilesClicked = 0;
// let flagsPlaced = 0;
// let flagEnabled = false;
// let gameOver = false;
// let timerInterval; // Variable to hold the timer interval
// let timerValue = 0; // Timer value in seconds

// // Initialize the game on window load
// window.onload = function () {
//   startGame();
// };

// // Reveal mines at the end of the game
// function revealMines() {
//   clearInterval(timerInterval);
//   minesLocation.forEach((mineLocation) => {
//     let mineLoc = document.getElementById(mineLocation);
//     if (mineLoc) {
//       mineLoc.innerText = "💣";
//       mineLoc.style.backgroundColor = "red";
//     }
//   });
// }

// // Main game environment
// function startGame() {
//   generateBoard();
//   placeMines();

//   document.getElementById("minesOnBoard").textContent = minesCount
//     .toString()
//     .padStart(3, "0");
//   document.getElementById("smiley").addEventListener("click", smileyToggle);

//   // Set the smiley face on the toggle button
//   document.getElementById("smiley").innerText = "🙂";

//   // Generate the game board
//   function generateBoard() {
//     const boardContainer = document.getElementById("board");

//     for (let r = 0; r < rows; r++) {
//       let row = [];
//       for (let c = 0; c < columns; c++) {
//         let tile = document.createElement("div");
//         tile.id = `${r}-${c}`;
//         tile.addEventListener("click", lButton);
//         tile.addEventListener("contextmenu", rButton);
//         document.getElementById("board").append(tile);
//         row.push(tile);
//       }
//       board.push(row);
//     }
//   }

//   // place mines randomly on board
//   function placeMines() {
//     for (let i = 0; i < minesCount; i++) {
//       let randomRow, randomCol;
//       do {
//         randomRow = Math.floor(Math.random() * rows);
//         randomCol = Math.floor(Math.random() * columns);
//       } while (minesLocation.includes(`${randomRow}-${randomCol}`));
//       minesLocation.push(`${randomRow}-${randomCol}`);
//     }
//   }

//   // restarts game
//   function restartGame() {
//     // clear board
//     board.length = 0;
//     minesLocation.length = 0;
//     tilesClicked = 0;
//     flagsPlaced = 0;
//     gameOver = false;
//     document.getElementById("board").innerHTML = '';
//     document.getElementById("timer").textContent = "000"; // Reset the timer
//     clearInterval(timerInterval);
//     document.getElementById("statsBox").style.display = "none"; // Hide the restart button
//     startGame();
//   }

//   function updateMinesCount() {
//     let minesDisplay = document.getElementById("minesOnBoard");
//     minesDisplay.textContent = minesCount.toString().padStart(3, "0");
//   }

//   // Click event for Smiley/Flag Toggle
//   function smileyToggle() {
//     flagEnabled = !flagEnabled;
//     document.getElementById("smiley").innerText = flagEnabled ? "🚩" : "🙂";
//   }

//   // Click event for the game board
//   function lButton(e) {
//     if (gameOver) {
//       return; // Don't do anything if the game is over
//     }

//     if (tilesClicked === 0) {
//       // Timer starts at the first left-click
//       startTimer();
//     }
//     let tile = this;
//     if (e.button === 0) {
//       // left-click
//       if (flagEnabled) {
//         // flag mode is enabled
//         if (e.target.innerText === "") {
//           e.target.innerText = "🚩";
//           flagsPlaced++;
//           if (flagsPlaced === minesCount) {
//             checkWinCondition();
//           }
//           updateMinesCount();
//         } else if (e.target.innerText === "🚩") {
//           e.target.innerText = "";
//           flagsPlaced--;
//           updateMinesCount();
//         }
//       } else {
//         // normal left-click action
//         const [row, col] = tile.id.split("-");
//         if (e.target.innerText !== "🚩") {
//           checkMine(parseInt(row), parseInt(col));
//         }
//       }
//     }
//   }

//   function startTimer() {
//     timerInterval = setInterval(function () {
//       timerValue++;
//       if (timerValue <= 999) {
//         const timerDisplay = document.getElementById("timer");
//         timerDisplay.textContent = timerValue.toString().padStart(3, "0");
//       } else {
//         clearInterval(timerInterval);
//       }
//     }, 1000);
//   }

//   function checkMine(r, c) {
//     if (c < 0 || c >= columns || r < 0 || r >= rows || gameOver) {
//       return;
//     }
//     if (
//       board[r] &&
//       board[r][c] &&
//       !board[r][c].classList.contains("tile-clicked")
//     ) {
//       board[r][c].classList.add("tile-clicked");

//       if (minesLocation.includes(`${r}-${c}`)) {
//         gameOver = true;
//         revealMines();
//         console.log("Game Over! You LOSE!!");
//         document.getElementById("statsBox").style.display = "block"; // Show the restart button
//         return;
//       }

//       let minesFound = 0;
//       const directions = [
//         { r: -1, c: -1 },
//         { r: -1, c: 0 },
//         { r: -1, c: 1 },
//         { r: 0, c: -1 },
//         { r: 0, c: 1 },
//         { r: 1, c: -1 },
//         { r: 1, c: 0 },
//         { r: 1, c: 1 },
//       ];

//       for (const dir of directions) {
//         const newRow = r + dir.r;
//         const newCol = c + dir.c;
//         if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns) {
//           if (minesLocation.includes(`${newRow}-${newCol}`)) {
//             minesFound++;
//           }
//         }
//       }

//       if (minesFound > 0) {
//         board[r][c].innerText = minesFound;
//         board[r][c].classList.add(`clr${minesFound}`);
//       } else {
//         for (const dir of directions) {
//           const newRow = r + dir.r;
//           const newCol = c + dir.c;
//           checkMine(newRow, newCol);
//         }
//       }

//       tilesClicked++;
//       if (tilesClicked === rows * columns - minesCount) {
//         checkWinCondition();
//       }
//     }
//   }

//   function checkWinCondition() {
//     if (flagsPlaced === minesCount && tilesClicked === rows * columns - minesCount) {
//       console.log("You WIN! All mines cleared!");
//       clearInterval(timerInterval);
//       document.getElementById("statsBox").style.display = "block"; // Show the restart button
//     }
//   }

//   function rButton(e) {
//     e.preventDefault(); // Prevent context menu
//   }

//   // Add event listeners for each tile
//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < columns; c++) {
//       let tile = document.getElementById(`${r}-${c}`);
//       tile.addEventListener("click", lButton);
//       tile.addEventListener("contextmenu", rButton);
//     }
//   }
// }

// ------- closest to being done!!!!!! ------------ Flood works!! Flagging works!! Clicking on a mine ends the game!!! Still have to get a few things tweaked, but overall this game is nearly done!!