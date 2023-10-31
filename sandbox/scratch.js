Math.floor((Math.random()) * minesCount);
minesCount
// using the minesCount #, make a new array using the map function to get row coordinates (r * minesCount) and column coordinate (c * minesCount). Check that all the items within the new array are unique and not repetitive. If there are any repeats, reiterate for the repeats, until all values within the array are unique.

// take new array (minePlacement) and append the board to place a mine at each array value, which is a board coordinate. display: none for the mines.


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
  let redFlag = document.createElement("div");
  redFlag.className = "redFlag";
  mineField.appendChild(redFlag);
}

document.createElement()[/code][code]img[/code][code]src[/code]To insert an image in JavaScript, you can use the [code]var img = document.createElement("img");
img.src = "imgs/flag.png";
document.body.appendChild(img);[/code][code]img[/code][code]src[/code]This creates an [code]innerHTML[/code][code]img[/code][code]src[/code][code]document.getElementById("myDiv").innerHTML = '<img src="imgs/flag.png">';[/code]



<div id="0-0"></div>
<div id="0-1"></div>
<div id="0-2"></div>
<div id="0-3"></div>
<div id="0-4"></div>
<div id="0-5"></div>
<div id="0-6"></div>
<div id="0-7"></div>
<div id="0-8"></div>

<div id="1-0"></div>
<div id="1-1"></div>
<div id="1-2"></div>
<div id="1-3"></div>
<div id="1-4"></div>
<div id="1-5"></div>
<div id="1-6"></div>
<div id="1-7"></div>
<div id="1-8"></div>

<div id="2-0"></div>
<div id="2-1"></div>
<div id="2-2"></div>
<div id="2-3"></div>
<div id="2-4"></div>
<div id="2-5"></div>
<div id="2-6"></div>
<div id="2-7"></div>
<div id="2-8"></div>

<div id="3-0"></div>
<div id="3-1"></div>
<div id="3-2"></div>
<div id="3-3"></div>
<div id="3-4"></div>
<div id="3-5"></div>
<div id="3-6"></div>
<div id="3-7"></div>
<div id="3-8"></div>

<div id="4-0"></div>
<div id="4-1"></div>
<div id="4-2"></div>
<div id="4-3"></div>
<div id="4-4"></div>
<div id="4-5"></div>
<div id="4-6"></div>
<div id="4-7"></div>
<div id="4-8"></div>

<div id="5-0"></div>
<div id="5-1"></div>
<div id="5-2"></div>
<div id="5-3"></div>
<div id="5-4"></div>
<div id="5-5"></div>
<div id="5-6"></div>
<div id="5-7"></div>
<div id="5-8"></div>

<div id="6-0"></div>
<div id="6-1"></div>
<div id="6-2"></div>
<div id="6-3"></div>
<div id="6-4"></div>
<div id="6-5"></div>
<div id="6-6"></div>
<div id="6-7"></div>
<div id="6-8"></div>

<div id="7-0"></div>
<div id="7-1"></div>
<div id="7-2"></div>
<div id="7-3"></div>
<div id="7-4"></div>
<div id="7-5"></div>
<div id="7-6"></div>
<div id="7-7"></div>
<div id="7-8"></div>

<div id="8-0"></div>
<div id="8-1"></div>
<div id="8-2"></div>
<div id="8-3"></div>
<div id="8-4"></div>
<div id="8-5"></div>
<div id="8-6"></div>
<div id="8-7"></div>
<div id="8-8"></div>

<div id="9-0"></div>
<div id="9-1"></div>
<div id="9-2"></div>
<div id="9-3"></div>
<div id="9-4"></div>
<div id="9-5"></div>
<div id="9-6"></div>
<div id="9-7"></div>
<div id="9-8"></div>
