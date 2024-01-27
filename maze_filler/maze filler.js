const player = "p";
const wall = "w";
const filled = "f";
const selector = "s";
const background_dark = "d";
const background_light = "l";

setLegend(
  [ player, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666` ],
  [ wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000` ],
  [ filled, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD` ],
  [ selector, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666` ],
  [ background_dark, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000` ],
  [ background_light, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222` ],
);

setSolids([player, wall]);

const lvl_select = map `
....................
....................
....................
....................
...s................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................`;
const levels = [
  map`
wwwwwwwwww
wp......ww
w.w......w
w.wwww...w
w........w
ww.......w
ww.....www
wwwwwwwwww`,
  map`
wwwwwwww
w......w
wp.....w
w......w
wwwwwwww`,
  map`
wwwwwwwwwwwwwwwwwwww
wp.................w
wwwwwwwwwwwwwwwwww.w
w................w.w
w.wwwwwwwwwwwwww.w.w
w.w............w.w.w
w.w.wwwwwwwwww.w.w.w
w.w.w........w.w.w.w
w.w.w........w.w.w.w
w.w.w.wwwwwwww.w.w.w
w.w.w..........w.w.w
w.w.wwwwwwwwwwww.w.w
w.w..............w.w
w.wwwwwwwwwwwwwwww.w
w..................w
wwwwwwwwwwwwwwwwwwww`,
  map`
wwwwwwwwwwwwwwwwwwww
wpwpwpwpwpwpwpwpwp.w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
w.w.w.w.w.w.w.w.w..w
wwwwwwwwwwwwwwwwwwww`,
  map`
wwwwwwwwwwwwwwwwwwww
wp...w....w......wpw
wwww.w.ww.w.wwww.w.w
w......ww.w.w..w.w.w
w.w.......w.w....w.w
w.ww.wwwwww.wwwwww.w
w.........w........w
wwwwwwwwwwwwwwwwwwww
wwwwwww...w....w...w
wwwwww..w.w..w.w.w.w
wwwww..w..w..w.w.w.w
wwww..w..ww..w.w.w.w
www..w..www..w.w.w.w
ww..ww.w..w..w.w.w.w
wp.w......w..w...wpw
wwwwwwwwwwwwwwwwwwww`,
];

onInput("w", () => {
  if(ingame){ Move("y", false); }
  
  if(!ingame){
    getFirst(selector).y -= 2;
  }
});

onInput("s", () => {
  if(ingame){ Move("y", true); }
  
  if(!ingame){
    getFirst(selector).y += 2;
  }
});

onInput("a", () => {
  if(ingame){ Move("x", false); }
  
  if(!ingame){
    getFirst(selector).x -= 2;
  }
});

onInput("d", () => {
  if(ingame){ Move("x", true); }
  
  if(!ingame){
    getFirst(selector).x += 2;
  }
});

onInput("l", () => {
  if(!ingame){
    var sel_x = getFirst(selector).x;
    var sel_y = getFirst(selector).y;

    clearText();
    ingame = true;
    setBackground(background_light);
    
    if(sel_x == 3 && sel_y == 4){ setMap(levels[0]); }
    if(sel_x == 5 && sel_y == 4){ setMap(levels[1]); }
    if(sel_x == 7 && sel_y == 4){ setMap(levels[2]); }
    if(sel_x == 9 && sel_y == 4){ setMap(levels[3]); }
    if(sel_x == 11 && sel_y == 4){ setMap(levels[4]); }
    
    addText("press \"k\" to go back", { x: 0, y: 15, color: color`D` })
    
  } // Load the level selected
});

onInput("k", () => {
  if(ingame){ Start(); }
});

afterInput(() => {
  if(ingame){
    var tiles_filled = tilesWith(filled).length + tilesWith(wall).length;
    var tiles_needed = width() * height();

    if(tiles_filled == tiles_needed){
      addText("You WIN!", { x: 0, y: 0, color: color`D` })
    }
  } //Check if player won.

  if(!ingame){
    var _selector = getFirst(selector);
    if(_selector.x < 3){
      _selector.x = 3;
    }
    if(_selector.x > 11){
      _selector.x = 11;
    }
    if(_selector.y < 4){
      _selector.y = 4;
    }
    if(_selector.y > 4){
      _selector.y = 4;
    }
  } // Check if selector is inbounds or not
});

function Move(move_axis, move_positive){
  var players = tilesWith(player);
  
  players.forEach((current_player) => {
    var hit_wall = false;
    var interation = 0;
    var _player = current_player[0];
    
    do {
      var old_x = _player.x;
      var old_y = _player.y;
  
      addSprite(_player.x, _player.y, filled); // Add filled sprite
      
      if(move_axis == "y"){
          _player.y = _player.y + (move_positive ? 1 : -1);
      }else if(move_axis == "x"){
          _player.x = _player.x + (move_positive ? 1 : -1);
      } // Move player
      
      if(_player.x == old_x && _player.y == old_y){
        hit_wall = true;
      } // Check if player hit wall
  
      // Break the look if it goes to long
      interation ++;
      if(interation > 50){ break; }
    } while (!hit_wall)
  }); // Move each player
}

var ingame = false;
function Start(){
  setMap(lvl_select);
  setBackground(background_dark);
  ingame = false;
  clearText();
  
  addText("Level Select", { x: 4, y: 1, color: color`D` });
  addText("press \"l\" to enter", { x: 1, y: 2, color: color`D` });
  addText("0", { x: 3, y: 4, color: color`D` });
  addText("1", { x: 5, y: 4, color: color`D` });
  addText("2", { x: 7, y: 4, color: color`D` });
  addText("3", { x: 9, y: 4, color: color`D` });
  addText("4", { x: 11, y: 4, color: color`D` });
  addText("Goal:", { x: 7, y: 10, color: color`D` });
  addText("____________________", { x: 0, y: 11, color: color`D` });
  addText("Remove all", { x: 2, y: 13, color: color`D` });
  addText("white.", { x: 13, y: 13, color: color`2` });
}
Start();


