# MINESWEEPER!! 

This is my attempt at recreating the feel of the original game, that I actually used to play as a kid! I remember not having any instructions on how to win, and just taking the time to figure it out on my own through trial and error, much like working on the actual code for this game!

The default game is setup to hide 10 mines at random on a 9x9 grid. The player clicks on the tiles within the grid, exposing whatever is beneath the tile.

The clicked tile will potentially reveal clues about how many mines are within the 8 tiles surrounding it. The player uses those clues to attempt to flag all of the mine locations on the board, while clearing the rest of the tiles from the board.

The game is won when all mines have been correctly flagged, and all other tiles have been cleared from the board.

The game is lost if the player removes a tile that has a mine under it!

Enjoy hours of fun like I did as a child, with MINESWEEPER!! 😁

☐ Screenshot(s): 

![Screen Shot 2023-11-03 at 9 24 58 AM](https://github.com/DuaneWellington/Project-1/assets/89868198/bd390135-42a1-4e77-a131-607581ca9a5a)       ![Screen Shot 2023-11-03 at 9 25 54 AM](https://github.com/DuaneWellington/Project-1/assets/89868198/c8e143c5-2a1b-4ed6-8b06-d7f7b3fbc88a)

![Screen Shot 2023-11-03 at 9 26 57 AM](https://github.com/DuaneWellington/Project-1/assets/89868198/f75713df-cb09-41f7-8e6e-f986c4eed310)       ![Screen Shot 2023-11-03 at 9 28 32 AM](https://github.com/DuaneWellington/Project-1/assets/89868198/8a0b17b6-573c-4ed9-96f8-f55cedc74c7c)



☐ Technologies Used: 

The game was built using JavaScript, HTML, and CSS! My build was a little different, in that I was attempting to auto generate the board using javascript and minimizing the need to manually type out the grid. I thought it would be simpler and more elegant, but it was a TRAGEDY for most of the in-class build time! EVERYTHING that could break, DID break! REPEATEDLY!! But I was loving the challenge, and I got to see small improvements in the game bit by bit. Even with all the headaches and challenges, it was a lot of fun to work on my own game project! It really stretched my mind and gave me a bit of confidence that I CAN grasp the concepts, implement them towards an end goal, learn about myself and my potential along the way, and hopefully make my instructors proud with my development!

☐ Getting Started: 

Click the link below to have a stab at the game! Currently there is no restart button, so you'll have to reload using the browser to restart the game. I'll be working to add that smiley restart button as soon as I can!

https://duanewellington.github.io/DW-MINESWEEPER/


☐ Next Steps: 

Plenty of upgrades planned for this game!

 - fix timer issue -> It needs to stop when the game is over. I feel like I've missed a couple of possible game conditions that should trigger gameOver. I'll take some time to find those flaws and get them corrected. It may be that I need to add an additional condition to look to see if tiles have been CLEARED through the flood event, AS WELL AS clicked through the eventlistener for the left button, AS WELL AS any tiles that have been flagged would be considered clicked/cleared.

 - UI/UX needs tweaking. I have to make some adjustments to the styling for when the tiles are clicked/cleared. It should appear that the cover has been removed from those tiles to reveal what's underneath. Tinkering with CSS hopefully will solve this.

 - The flag counter needs to stop when it hits '000', and no new flags will be able to be placed.

 - I want the Smiley face to change based on the end of game condition (win or lose). A win will switch Smiley to 😎 or some other emoji that signals satisfaction and success. A loss will show a 🤯 smiley, as well as a 💥 at the tile that was clicked that triggered a mine. Also, a printout below the game board will congratulate a winner, admonish a loser, and direct the player on how to restart the game (click the Smiley button to restart)

 - side menu that offers the player the chance to adjust the size of the board (rows and/or columns within a range); the number of mines to be placed on the board (also within a range)

 - sound efects for clicks; triggering a mine (explosion); winning the game (cheers); maybe even some kind of sound effect for the flood event; perhaps the chance to have looping music and the ability to mute the music and/or the sound effects.

 - perhaps some background options for behind the game board...
 - end of game display for your session stats. # of games played; 
 winning percentage; average, best, and worst times...

 - if I'm REALLY ambitious, convert the game from the OG format, to an animated style... That's for a little further down my software engineering journey, but it would be neat if I could accomplish it!

 Hope you enjoy! Feel free to let me know what you think. I take constructive criticism very well and I'm most interested in learning and improving, so any advice/thoughts/opinions are always welcome!

 D. 😎


