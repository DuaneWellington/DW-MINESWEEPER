console.log("js:loaded");

// board constants
const board = [];
const rows = 9;
const columns = 9;

let minesCount = 5;
const minesLocation = [];
const tilesClicked = 0;
let flagEnabled = false;
const gameOver = false;

window.onload = function () {
  startGame();
};



function setMines() {
  minesLocation.push("2-2");
  minesLocation.push("2-3");
  minesLocation.push("5-6");
  minesLocation.push("3-4");
  minesLocation.push("1-1");
  console.log(minesLocation);
  // const minesArrayEl = document.elementFromPoint
  //   minesLocation.forEach(minesArray => {
  //     document.getElementById('board').append(tile);
  //   });
}

// minesLocation.forEach((mineLocation) => {
//   let cell = document.getElementById(mineLocation);
//   if (cell) {
//     cell.innerText = "";
//     cell.classList.add("mine");
//   }
// });

function revealMines() {
  minesLocation.forEach((mineLocation) => {
    let mineLoc = document.getElementById(mineLocation);
    if (mineLoc) {
      mineLoc.innerText = "💣";
      mineLoc.style.backgroundColor = 'red';
    }
  });
}
//   }
// }

// function clearTile() {
//   const oldDivProp = document.getElementById(e.target);
//   oldDivProp.setAttribute("tileClicked");
//   oldDivProp.addEventListener("click", clearTile);
// }

function startGame() {
  //-- ICEBOX -> get minesDisplay to read as 3 digits at all times{
  document.getElementById("minesOnBoard").textContent = "00" + minesCount;
  document.getElementById("smiley").addEventListener("click", smileyToggle);

  setMines();

  function youLose() {
    if (e.target.classList == "mine") {
      console.log("Game Over! You LOSE!!");
      function youLose() {
        gameOver = true;
        revealMines();
        restart();
      }
    }
    gameOver = true;
    console.log("Game Over!");
  }

  // set smiley face on toggle button

  document.getElementById("smiley").innerText = "🙂"

  // auto-generate the board
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.addEventListener("click", lButton);
      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }
  console.log(board);

  // click event for Smiley/Flag Toggle

  function smileyToggle() {
    if (flagEnabled == false) {
      document.getElementById("smiley").style.backgroundColor = "white";
      document.getElementById("smiley").innerText = "🚩";
      flagEnabled = true;
    } else {
      document.getElementById("smiley").style.backgroundColor = "rgb(187, 187, 187)";
      document.getElementById("smiley").innerText = "🙂";
      flagEnabled = false;
    }
    // console.log(smileyToggle);
  }

  // place mines on the board

  minesLocation.forEach((mineLocation) => {
    let cell = document.getElementById(mineLocation);
    if (cell) {
      cell.innerText = "";
      cell.classList.add("mine");
    }
  });

  // click event for board

  function lButton(e) {
    console.log(e.target);
    let tile = this;
    if (flagEnabled) {
      function flagged() {
        if (e.target.innerText == '') {
        e.target.innerText = '🚩';
        minesCount = (minesCount -=1)
      } else (e.target.innerText = '')
      };
      flagged();

      // document.getElementById('div[r][c]').append(lTileClick);
      // startTimer();
    } else {
      console.log(tile)
      if (tile.innerText == "") {
        this.classList.add("tile-clicked");
      


        // console.log(e.target);
      }
    }
  }


  // });

  // // add event listener for smiley button to toggle flag
  // const smileyButton = document.getElementById('smiley');
  // smileyButton.addEventListener('click', smileyToggle)

  // // document.addEventListener('click', smileyToggle);
  // // (ev) {
  // //   if (document.getElementById("smiley").innerText == "🙂") {
  // //     document.getElementById("smiley").innerText = "🚩";
  // //     flagEnabled = true;
  // //   }
  // //   if (document.getElementById("smiley").innerText == "🚩") {
  // //     document.getElementById("smiley").innerText = "🙂";
  // //     flagEnabled = false;
  // //   }
  // // }
  // //   document.getElementById('smiley')
  // //   return;
  // //   console.log(ev.target)
  // //   // if (ev.target == button#smiley) {
  // //
  // //   // } if (ev.target == button#smiley)
  // //   }

  // // add Event Listener to clear tiles using left mouse button

  // // quick solution to tile check issue?

  // recursion flood event
  function checkMine(r, c) {
    if ((c < 0 || c >= columns || r, 0 || r >= rows)) {
      return;
    }
    if (board[r][c].classList.contains("tile-clicked")) {
      return;
    }
    board[r][c].classList.add(".tile-clicked");

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
    } else {
      checkMine(r - 1, c - 1); // top left
      checkMine(r - 1, c); // top
      checkMine(r - 1, c + 1); // top right

      checkMine(r, c - 1); // left
      checkMine(r, c + 1); // right

      checkMine(r + 1, c - 1); // bottom left
      checkMine(r + 1, c); // bottom
      checkMine(r + 1, c - +1); // bottom right
    }

    if (tilesClicked == rows * columns - minesCount) {
      document.getElementById("minesOnBoard").innerText = "000";
    }
  }
  // }
  // document.addEventListener("contextmenu", rButton);
  // oncontextmenu = (rButton)
  // function rButton(evt){
  //   preventDefault();
  //   let rTileClick = evt.target;
  //   if (flagEnabled == true) {
  //     return;
  //   } else if (flagEnabled == false) {

  // document.getElementById('div[r][c]').append(e.target);
  // startTimer();
  // }
  //   console.log(evt.target);
  // }}

  // let timer;
  // let seconds = 0;

  // function updateTimer() {
  //   seconds++;
  //   document.getElementById("timer").textContent = seconds
  //     .toString()
  //     .padStart(3, "0");
  // }
  // function startTimer() {
  //   timer = setInterval(updateTimer, 1000);
  // }

  // function stopTimer() {
  //   clearInterval(timer);
  // }

  // function resetTimer() {
  //   stopTimer();
  //   seconds = 0;
  //   document.getElementById("timer").textContent = "000";
  // }

  // add eventlistener to start timer and begin game

  // document.getElementById('board').addEventListener('mousedown')

  // function (e) {
  //   if (e.target.lButton === 0) {
  //     resetTimer();
  //     startTimer();
  //     startGame();
  //   }
  // }

  // e.target.textContent = clickedDiv;
  // console.log(clickedDiv);
  // document.getElementById(e.target);
  // window.getComputerStyle(e.target);

  // function rClickTile() {
  //   let tile = this;
  //   console.log(e.target.innerText);
  //   if (flagEnabled === false) {
  //     if (tile.innerText == "") {
  //       tile.innerText = "🚩"; // set flag
  //       this.flagEnabled = true;
  //       // need to set variable for this state and use it to stop tile from being uncovered until flagEnabled === false
  //     } else if (this.flagEnabled === true) {
  //       if (tile.innertext == "🚩");
  //       {
  //         tile.innerText = "";
  //         this.flagEnabled = false;
  //       }
  //     }
  //   }
  // }

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

  // function getMineCoordinates(board, x) {
  //   const mineCoordinates = [];
  //   for (let row = 0; row < rows; row++) {
  //     for (let column = 0; column < columns; column++) {
  //       if (board[row][column] === -1) {
  //         mineCoordinates.push({ row, column });
  //         if (mineCoordinates.length === x) {
  //           return mineCoordinates;
  //         }
  //       }
  //     }
  //   }
  //   return mineCoordinates;
  //   console.log(mineCoordinates);
  // }

  // const mineField = document.getElementById("minesOnBoard");
  // for (let i = 1; i <= minesCount; i++) {
  //   let place = document.createElement("div");
  //   place.className = "place";
  //   // mineField.appendChild(place);
  //   /* add eventListener for left-click to clear tiles and potentially activate flood event
  //     - Start timer only when left click on a tile.
  //     - Also add contextmenu with a preventDefault(); on the board for right click to toggle flag on/off.
  //     - When flag on == true for a tile, left click won't work on that tile. Should be a simple "if flag on then return, else perform function"

  //     */
  //   const child = document.createElement("div");
  //   child.className = "child";
  //   // mineField.appendChild(child);
  // }

  // At game start (left click on tile) begin timer

  // let timer = setInterval(function () {
  //   displayNumber---;
  //   display.textContent = displayNumber---;
  //   if (displayNumber---  > 999) {
  //     console.log(timer);
  //     clearInterval(timer);

  //   }
  // }, 1000);

  // cover mines?

  //
  // searching for mines nearby, and adding numbers to tiles

  /* gameOver function (Smiley turns to exploded head; timer stops; console.log("You WIN!!") with minefield fully exposed showing all mines, or ("You LOSE!!" with minefield fully exposed and the triggered mine tile in red, etc) and option to restart!! */

  // let rTile = document.createElement('div');

  // rTile.addEventListener('contextmenu', rClickTile => {
  // rClickTile.preventDefault();
} //end of active game code
