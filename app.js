console.log("js:loaded");

// looking at a board generator option...
const board = [];
const rows = 9;
const columns = 9;

const minesCount = 5
const minesLocation = [];
const tilesClicked = 0;
const flagEnabled = false;
const gameOver = false;

window.onload = function() {
   document.getElementById('minesCount').innerText = minesCount; 



// auto-generate the board
for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
        let tile = document.createElement('div');
        tile.id = r.toString() + '-' + c.toString();
        tile.addEventListener('click', lClickTile);
        tile.addEventListener('contextmenu', rClickTile => {
            rClickTile.preventDefault();
        });
        document.getElementById('board').append(tile);
        row.push(tile);
    }
    board.push(row);
}
console.log(board);
} 

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


// function lClickTile() {
//     let tile = this;
//     if (flagEnabled === true) {
// return
//     } else (
//   )
// }