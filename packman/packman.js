/*
  @title: Animated Tiles
  @author: Andrew Cromar
  @tags: []
  @img: ""
  @addedOn: 2024-00-00
*/

// SETUP CLASS
class AnimatedSprite {
  constructor(animations) {
    this.animations = animations;
    this.current_animation = animations[0];
  }

  setAnimation(index) { this.current_animation = this.animations[index]; }

  getFrame() { return this.current_animation.getFrame(); }

  nextFrame() { this.current_animation.nextFrame(); }

  setFrame(new_frame) { this.current_animation.current_frame = new_frame; }
}

class Animation {
  constructor(frames) {
    this.frames = frames;
    this.current_frame = 0;
  }

  getFrame() {
    return this.frames[this.current_frame % this.frames.length];
  }

  nextFrame() {
    this.current_frame = (this.current_frame + 1) % this.frames.length;
  }
}

class Ghost {
  constructor(type) {
    this.type = type;
    this.direction = 0;
  }

  setTarget(target) {
    this.target = target;
  }

  setDirection(direction) {
    this.direction = direction;
  }
}

class Target {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Setup world sprites
var wall_2a = "a";
var wall_2b = "b";
var wall_2c = "c";
var wall_2d = "d";
var wall_2e = "e";
var wall_2f = "f";
var wall_2g = "g";
var wall_2h = "h";
var wall_2i = "i";
var wall_2j = "j";
var wall_2k = "k";
var wall_2l = "l";
var wall_2m = "u";
var wall_2n = "v";
var wall_2o = "w";
var wall_2p = "x";
var wall_2q = "y";
var wall_2r = "z";

var wall_1a = "m";
var wall_1b = "n";
var wall_1c = "o";
var wall_1d = "p";
var wall_1e = "q";
var wall_1f = "r";
var wall_1g = "s";
var wall_1h = "t";

var wall_3a = "5";
var wall_3b = "6";
var wall_3c = "7";
var wall_3d = "8";
var wall_3e = "9";
var wall_3f = "0";

// GHOSTS
var pinky = "-";
var inky = "+";
var clide = "=";

// SETUP BACKGROUND TILE
var background = "2";

// SETUP PELLETS
var pellet = "3";
var power_pellet = "4";

// SETUP PACKMAN ANIMATED SPRITE
var packman = "1"

var packman_closed = bitmap `
................
....66666666....
...6666666666...
..666666666666..
.66666666666666.
.66666666666666.
.66666666666666.
.66666666666666.
.66666666666666.
.66666666666666.
.66666666666666.
.66666666666666.
..666666666666..
...6666666666...
....66666666....
................`;
var packman_opened_up = bitmap `
................
................
...6........6...
..666......666..
.6666......6666.
.66666....66666.
.66666....66666.
.666666..666666.
.666666..666666.
.66666666666666.
.66666666666666.
.66666666666666.
..666666666666..
...6666666666...
....66666666....
................`;
var packman_half_up = bitmap `
................
....66....66....
...666....666...
..6666....6666..
.66666....66666.
.666666..666666.
.666666..666666.
.666666..666666.
.666666..666666.
.66666666666666.
.66666666666666.
.66666666666666.
..666666666666..
...6666666666...
....66666666....
................`;
var packman_opened_down = bitmap `
................
....66666666....
...6666666666...
..666666666666..
.66666666666666.
.66666666666666.
.66666666666666.
.666666..666666.
.666666..666666.
.66666....66666.
.66666....66666.
.6666......6666.
..666......666..
...6........6...
................
................`;
var packman_half_down = bitmap `
................
....66666666....
...6666666666...
..666666666666..
.66666666666666.
.66666666666666.
.66666666666666.
.666666..666666.
.666666..666666.
.666666..666666.
.666666..666666.
.66666....66666.
..6666....6666..
...666....666...
....66....66....
................`;
var packman_opened_left = bitmap `
................
....66666666....
...6666666666...
..666666666666..
...666666666666.
.....6666666666.
.......66666666.
.........666666.
.........666666.
.......66666666.
.....6666666666.
...666666666666.
..666666666666..
...6666666666...
....66666666....
................`;
var packman_half_left = bitmap `
................
....66666666....
...6666666666...
..666666666666..
.66666666666666.
.66666666666666.
.....6666666666.
.........666666.
.........666666.
.....6666666666.
.66666666666666.
.66666666666666.
..666666666666..
...6666666666...
....66666666....
................`;
var packman_opened_right = bitmap `
................
....66666666....
...6666666666...
..666666666666..
.666666666666...
.6666666666.....
.66666666.......
.666666.........
.666666.........
.66666666.......
.6666666666.....
.666666666666...
..666666666666..
...6666666666...
....66666666....
................`;
var packman_half_right = bitmap `
................
....66666666....
...6666666666...
..666666666666..
.66666666666666.
.66666666666666.
.6666666666.....
.666666.........
.666666.........
.6666666666.....
.66666666666666.
.66666666666666.
..666666666666..
...6666666666...
....66666666....
................`;

const packman_animation_up = new Animation([packman_opened_up, packman_half_up, packman_closed, packman_half_up]);
const packman_animation_down = new Animation([packman_opened_down, packman_half_down, packman_closed, packman_half_down]);
const packman_animation_left = new Animation([packman_opened_left, packman_half_left, packman_closed, packman_half_left]);
const packman_animation_right = new Animation([packman_opened_right, packman_half_right, packman_closed, packman_half_right]);
const packman_animator = new AnimatedSprite([packman_animation_up, packman_animation_down, packman_animation_left, packman_animation_right]);

packman_animator.setAnimation(3);

// GHOST ANIMATIONS
var ghost_frightened = new Animation([bitmap `
................
......5555......
....55555555....
...5555555555...
...5555555555...
...5555555555...
...55FF55FF55...
..555FF55FF555..
..555555555555..
..55FF5FF5FF55..
..5F55F55F55F5..
..555555555555..
..555555555555..
..55.55..55.55..
..5...5..5...5..
................`]);
var ghost_eyes = new Animation([bitmap `
................
................
................
................
................
...22......22...
..2222....2222..
..2255....2255..
..2255....2255..
...22......22...
................
................
................
................
................
................`]);

var blinky = "_";
var blinky_1 = bitmap `
................
......3333......
....33333333....
...3333333333...
...3222332223...
...3252332523...
...3222332223...
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333.33..33.3..
..33...3..3..3..
................`;
var blinky_2 = bitmap `
................
......3333......
....33333333....
...3333333333...
...3222332223...
...3252332523...
...3222332223...
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..33.33..33.33..
..3...3..3...3..
................`;
var blinky_3 = bitmap `
................
......3333......
....33333333....
...3333333333...
...3222332223...
...3252332523...
...3222332223...
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..3.33..33.333..
..3..3..3...33..
................`;

var blinky_ghost = new Ghost(blinky);

const blinky_animation = new Animation([blinky_1, blinky_2, blinky_3]);
const blinky_animator = new AnimatedSprite([blinky_animation, ghost_frightened, ghost_eyes]);

var pinky = "-";
var pinky_1 = bitmap `
................
......8888......
....88888888....
...8888888888...
...8222882228...
...8252882528...
...8222882228...
..888888888888..
..888888888888..
..888888888888..
..888888888888..
..888888888888..
..888888888888..
..888.88..88.8..
..88...8..8..8..
................`;
var pinky_2 = bitmap `
................
......8888......
....88888888....
...8888888888...
...8222882228...
...8252882528...
...8222882228...
..888888888888..
..888888888888..
..888888888888..
..888888888888..
..888888888888..
..888888888888..
..88.88..88.88..
..8...8..8...8..
................`;
var pinky_3 = bitmap `
................
......8888......
....88888888....
...8888888888...
...8222882228...
...8252882528...
...8222882228...
..888888888888..
..888888888888..
..888888888888..
..888888888888..
..888888888888..
..888888888888..
..8.88..88.888..
..8..8..8...88..
................`;

var pinky_ghost = new Ghost(blinky);

const pinky_animation = new Animation([pinky_1, pinky_2, pinky_3]);
const pinky_animator = new AnimatedSprite([pinky_animation, ghost_frightened, ghost_eyes]);

var inky = "+";
var inky_1 = bitmap `
................
......7777......
....77777777....
...7777777777...
...7222772227...
...7252772527...
...7222772227...
..777777777777..
..777777777777..
..777777777777..
..777777777777..
..777777777777..
..777777777777..
..777.77..77.7..
..77...7..7..7..
................`;
var inky_2 = bitmap `
................
......7777......
....77777777....
...7777777777...
...7222772227...
...7252772527...
...7222772227...
..777777777777..
..777777777777..
..777777777777..
..777777777777..
..777777777777..
..777777777777..
..77.77..77.77..
..7...7..7...7..
................`;
var inky_3 = bitmap `
................
......7777......
....77777777....
...7777777777...
...7222772227...
...7252772527...
...7222772227...
..777777777777..
..777777777777..
..777777777777..
..777777777777..
..777777777777..
..777777777777..
..7.77..77.777..
..7..7..7...77..
................`;

var inky_ghost = new Ghost(blinky);

const inky_animation = new Animation([inky_1, inky_2, inky_3]);
const inky_animator = new AnimatedSprite([inky_animation, ghost_frightened, ghost_eyes]);

var clyde = "=";
var clyde_1 = bitmap `
................
......9999......
....99999999....
...9999999999...
...9222992229...
...9252992529...
...9222992229...
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999.99..99.9..
..99...9..9..9..
................`;
var clyde_2 = bitmap `
................
......9999......
....99999999....
...9999999999...
...9222992229...
...9252992529...
...9222992229...
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..99.99..99.99..
..9...9..9...9..
................`;
var clyde_3 = bitmap `
................
......9999......
....99999999....
...9999999999...
...9222992229...
...9252992529...
...9222992229...
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..999999999999..
..9.99..99.999..
..9..9..9...99..
................`;

var clyde_ghost = new Ghost(blinky);

const clyde_animation = new Animation([clyde_1, clyde_2, clyde_3]);
const clyde_animator = new AnimatedSprite([clyde_animation, ghost_frightened, ghost_eyes]);

// ALL ANIMATORS

const all_animators = [packman_animator, blinky_animator, pinky_animator, inky_animator, clyde_animator];

// DEBUG TILE

var debug = ">";

// Set legend by default
CustomSetLegend();

function CustomSetLegend() {
  setLegend(
    [debug, bitmap `
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],

    [packman, packman_animator.getFrame()],

    [pellet, bitmap `
................
................
................
................
................
................
.......FF.......
......FFFF......
......FFFF......
.......FF.......
................
................
................
................
................
................`],
    [power_pellet, bitmap `
................
................
................
................
................
......FFFF......
.....FFFFFF.....
.....FFFFFF.....
.....FFFFFF.....
.....FFFFFF.....
......FFFF......
................
................
................
................
................`],

    [background, bitmap `
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
0000000000000000`],

    [blinky, blinky_animator.getFrame()],
    [pinky, pinky_animator.getFrame()],
    [inky, inky_animator.getFrame()],
    [clyde, clyde_animator.getFrame()],

    [wall_2a, bitmap `
........55555555
........55555555
....5555........
....5555........
..55............
..55............
..55......555555
..55......555555
55......55......
55......55......
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........`, ],
    [wall_2b, bitmap `
55555555........
55555555........
........5555....
........5555....
............55..
............55..
555555......55..
555555......55..
......55......55
......55......55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55`, ],
    [wall_2c, bitmap `
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
......55......55
......55......55
555555......55..
555555......55..
............55..
............55..
........5555....
........5555....
55555555........
55555555........`, ],
    [wall_2d, bitmap `
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55......55......
55......55......
..55......555555
..55......555555
..55............
..55............
....5555........
....5555........
........55555555
........55555555`, ],
    [wall_2e, bitmap `
5555555555555555
5555555555555555
................
................
................
................
5555555555555555
5555555555555555
................
................
................
................
................
................
................
................`, ],
    [wall_2f, bitmap `
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........
55....55........`, ],
    [wall_2g, bitmap `
................
................
................
................
................
................
................
................
5555555555555555
5555555555555555
................
................
................
................
5555555555555555
5555555555555555`, ],
    [wall_2h, bitmap `
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55
........55....55`, ],
    [wall_2i, bitmap `
................
................
................
................
................
................
................
................
5555............
5555............
....55..........
....55..........
......55........
......55........
......55........
......55........`, ],
    [wall_2j, bitmap `
......55........
......55........
......55........
......55........
....55..........
....55..........
5555............
5555............
................
................
................
................
................
................
................
................`, ],
    [wall_2k, bitmap `
........55......
........55......
........55......
........55......
..........55....
..........55....
............5555
............5555
................
................
................
................
................
................
................
................`, ],
    [wall_2l, bitmap `
................
................
................
................
................
................
................
................
............5555
............5555
..........55....
..........55....
........55......
........55......
........55......
........55......`, ],
    [wall_2m, bitmap `
........55....55
........55....55
........55....55
........55....55
......55......55
......55......55
555555........55
555555........55
..............55
..............55
..............55
..............55
..............55
..............55
..............55
..............55`, ],
    [wall_2n, bitmap `
55....55........
55....55........
55....55........
55....55........
55......55......
55......55......
55........555555
55........555555
55..............
55..............
55..............
55..............
55..............
55..............
55..............
55..............`, ],
    [wall_2o, bitmap `
55..............
55..............
55..............
55..............
55..............
55..............
55..............
55..............
55........555555
55........555555
55......55......
55......55......
55....55........
55....55........
55....55........
55....55........`, ],
    [wall_2p, bitmap `
5555555555555555
5555555555555555
................
................
................
................
............5555
............5555
..........55....
..........55....
........55......
........55......
........55......
........55......
........55......
........55......`, ],
    [wall_2q, bitmap `
..............55
..............55
..............55
..............55
..............55
..............55
..............55
..............55
555555........55
555555........55
......55......55
......55......55
........55....55
........55....55
........55....55
........55....55`, ],
    [wall_2r, bitmap `
5555555555555555
5555555555555555
................
................
................
................
5555............
5555............
....55..........
....55..........
......55........
......55........
......55........
......55........
......55........
......55........`, ],

    [wall_1a, bitmap `
................
................
................
................
................
................
..........555555
..........555555
........55......
........55......
......55........
......55........
......55........
......55........
......55........
......55........`, ],
    [wall_1b, bitmap `
................
................
................
................
................
................
555555..........
555555..........
......55........
......55........
........55......
........55......
........55......
........55......
........55......
........55......`, ],
    [wall_1c, bitmap `
........55......
........55......
........55......
........55......
........55......
........55......
......55........
......55........
555555..........
555555..........
................
................
................
................
................
................`, ],
    [wall_1d, bitmap `
......55........
......55........
......55........
......55........
......55........
......55........
........55......
........55......
..........555555
..........555555
................
................
................
................
................
................`, ],
    [wall_1e, bitmap `
................
................
................
................
................
................
5555555555555555
5555555555555555
................
................
................
................
................
................
................
................`, ],
    [wall_1f, bitmap `
......55........
......55........
......55........
......55........
......55........
......55........
......55........
......55........
......55........
......55........
......55........
......55........
......55........
......55........
......55........
......55........`, ],
    [wall_1g, bitmap `
................
................
................
................
................
................
................
................
5555555555555555
5555555555555555
................
................
................
................
................
................`, ],
    [wall_1h, bitmap `
........55......
........55......
........55......
........55......
........55......
........55......
........55......
........55......
........55......
........55......
........55......
........55......
........55......
........55......
........55......
........55......`, ],

    [wall_3a, bitmap `
55....55........
55....55........
......55........
......55........
......55........
......55........
55555555........
55555555........
................
................
................
................
................
................
................
................`, ],
    [wall_3b, bitmap `
........55....55
........55....55
........55......
........55......
........55......
........55......
........55555555
........55555555
................
................
................
................
................
................
................
................`, ],
    [wall_3c, bitmap `
................
................
................
................
................
................
................
................
........55555555
........55555555
........55......
........55......
........55......
........55......
........55....55
........55....55`, ],
    [wall_3d, bitmap `
................
................
................
................
................
................
................
................
55555555........
55555555........
......55........
......55........
......55........
......55........
55....55........
55....55........`, ],
    [wall_3e, bitmap `
................
................
................
................
................
................
................
................
55..............
55..............
5588888888888888
5588888888888888
5588888888888888
5588888888888888
55..............
55..............`, ],
    [wall_3f, bitmap `
................
................
................
................
................
................
................
................
..............55
..............55
8888888888888855
8888888888888855
8888888888888855
8888888888888855
..............55
..............55`, ],
  )
}

var world_og_game_size = map `
............................
............................
............................
aeeeeeeeeeeeezxeeeeeeeeeeeeb
f333333333333rt333333333333h
f3mqqn3mqqqn3rt3mqqqn3mqqn3h
f4r..t3r...t3rt3r...t3r..t4h
f3psso3pssso3po3pssso3psso3h
f33333333333333333333333333h
f3mqqn3mn3mqqqqqqn3mn3mqqn3h
f3psso3rt3pssilsso3rt3psso3h
f333333rt3333rt3333rt333333h
dggggi3rkqqn3rt3mqqjt3lggggc
.....f3rlsso.po.pssit3h.....
.....f3rt..._......rt3h.....
.....f3rt.7gg90gg8.rt3h.....
eeeeej3po.h......f.po3keeeee
......3...h......f.1.3......
gggggi3mn.h......f.mn3lggggg
.....f3rt.6eeeeee5.rt3h.....
.....f3rt-.........rt3h.....
.....f3rt.mqqqqqqn.rt3h.....
aeeeej3po.pssilsso.po3keeeeb
f333333333333rt333333333333h
f3mqqn3mqqqn3rt3mqqqn3mqqn3h
f3psit3pssso3po3pssso3rlso3h
f433rt3333333..3333333rt334h
vqn3rt3mn3mqqqqqqn3mn3rt3mqu
wso3po3rt3pssilsso3rt3po3psy
f333333rt3333rt3333rt333333h
f3mqqqqjkqqn3rt3mqqjkqqqqn3h
f3psssssssso3po3psssssssso3h
f33333333333333333333333333h
dggggggggggggggggggggggggggc`;
var world_sprig_size = map `
................
lggggggggggggggi
h..............f
h..............f
kb............aj
gc....1.......dg
................
eb............ae
lc............di
h..............f
h_.............f
keeeeeeeeeeeeeej`;

setMap(world_og_game_size)
setBackground(background);

// Set all walls as solid 2a-2r and 1a-1h
setSolids([
  packman,
  wall_2a,
  wall_2b,
  wall_2c,
  wall_2d,
  wall_2e,
  wall_2f,
  wall_2g,
  wall_2h,
  wall_2i,
  wall_2j,
  wall_2k,
  wall_2l,
  wall_2m,
  wall_2n,
  wall_2o,
  wall_2p,
  wall_2q,
  wall_2r,
  wall_1a,
  wall_1b,
  wall_1c,
  wall_1d,
  wall_1e,
  wall_1f,
  wall_1g,
  wall_1h,
  wall_3a,
  wall_3b,
  wall_3c,
  wall_3d,
  wall_3e,
  wall_3f
]);

var current_direction = 3;

onInput("w", () => {
  queued_direction = 0;
  PackmanTryTurn();
});

onInput("s", () => {
  queued_direction = 1;
  PackmanTryTurn();
});

onInput("a", () => {
  queued_direction = 2;
  PackmanTryTurn();
});

onInput("d", () => {
  queued_direction = 3;
  PackmanTryTurn();
});

onInput("j", () => {
  game_ticker();
});

// Attempt to turn packman, pass remove qeue, fail qeue it up
var queued_direction = 3;

function PackmanTryTurn() {
  if (queued_direction < 0) { return; }

  var x_offset = 0;
  var y_offset = 0;

  if (queued_direction == 0) { y_offset = -1; }
  if (queued_direction == 1) { y_offset = 1; }
  if (queued_direction == 2) { x_offset = -1; }
  if (queued_direction == 3) { x_offset = 1; }

  var can_turn = !(hasWall(getFirst(packman).x + x_offset, getFirst(packman).y + y_offset));


  if (can_turn) {
    current_direction = queued_direction;
    packman_animator.setAnimation(current_direction);
    queued_direction = -1;
  }
}

// Check if packman can turn.

function hasWall(x, y) {
  var tiles = getTile(x, y);

  var has_pellet = false;
  tiles.forEach(sprite => {
    if (sprite.type == pellet || sprite.type == power_pellet) {
      has_pellet = true;
    }
  });

  var isWall = !(has_pellet || tiles.length == 0);

  return isWall;
}

// Score
var score = 0;

// TICKER FOR GAME LOOP
const game_tick_speed = 500;

function game_ticker() {
  PackmanTryTurn();

  // Move
  if (current_direction == 0) {
    getFirst(packman).y -= 1;
  }

  if (current_direction == 1) {
    getFirst(packman).y += 1;
  }

  if (current_direction == 2) {
    getFirst(packman).x -= 1;
  }

  if (current_direction == 3) {
    getFirst(packman).x += 1;
  }

  // Check if at portal
  if (getFirst(packman).x == 27) {
    clearTile(27, 17);
    addSprite(1, 17, packman);
  }
  if (getFirst(packman).x == 0) {
    clearTile(0, 17);
    addSprite(26, 17, packman);
  }

  var packman_pellet_tiles = tilesWith(packman, pellet);
  if (packman_pellet_tiles.length > 0) {
    var tile_x = packman_pellet_tiles[0][0].x;
    var tile_y = packman_pellet_tiles[0][0].y;

    clearTile(tile_x, tile_y);
    addSprite(tile_x, tile_y, packman);

    score += 10;
  }

  clearText();
  addText("Score: " + score, { x: 0, y: 0, color: color`2` })

  DoBlinky();
  DoPinky();
  // DoInky();
  // DoClyde();
}
setInterval(game_ticker, game_tick_speed);

// GHOST FUNCTIONS

function DoBlinky() {
  blinky_ghost.setTarget(new Target(getFirst(packman).x, getFirst(packman).y));

  const blinky_ingame_object = getFirst(blinky);
  SetGhostBestDirection(blinky_ghost, blinky_ingame_object);
}

function DoPinky() {
  const packman_ingame_object = getFirst(packman);
  const packman_x_position = packman_ingame_object.x;
  const packman_y_position = packman_ingame_object.y;

  var target_x_position = packman_x_position;
  var target_y_position = packman_y_position;

  if (current_direction == 0) { target_y_position -= 4; } else if (current_direction == 1) { target_y_position += 4; } else if (current_direction == 2) { target_x_position -= 4; } else if (current_direction == 3) { target_x_position += 4; }

  pinky_ghost.setTarget(new Target(target_x_position, target_y_position));

  const pinky_ingame_object = getFirst(pinky);
  SetGhostBestDirection(pinky_ghost, pinky_ingame_object);
}

function DoInky() {}

function DoClyde() {}

function SetGhostBestDirection(ghost, ghost_object) {
    var can_go_up = true;
    var can_go_down = true;
    var can_go_left = true;
    var can_go_right = true;

    const direction = ghost.direction; // 0=up, 1=down,= 2=left, 3=right
    if (direction == 0) { can_go_down = false; }
    if (direction == 1) { can_go_up = false; }
    if (direction == 2) { can_go_right = false; }
    if (direction == 3) { can_go_left = false; }

    if (hasWall(ghost_object.x, ghost_object.y - 1)) { can_go_up = false; } // Up
    if (hasWall(ghost_object.x, ghost_object.y + 1)) { can_go_down = false; } // Down
    if (hasWall(ghost_object.x - 1, ghost_object.y)) { can_go_left = false; } // Left
    if (hasWall(ghost_object.x + 1, ghost_object.y)) { can_go_right = false; } // Right

    var distance_from_up = getDistance(new Target(ghost_object.x, ghost_object.y - 1), new Target(ghost.target.x, ghost.target.y));
    var distance_from_down = getDistance(new Target(ghost_object.x, ghost_object.y + 1), new Target(ghost.target.x, ghost.target.y));
    var distance_from_left = getDistance(new Target(ghost_object.x - 1, ghost_object.y), new Target(ghost.target.x, ghost.target.y));
    var distance_from_right = getDistance(new Target(ghost_object.x + 1, ghost_object.y), new Target(ghost.target.x, ghost.target.y));

    var shortest_direcion = -1;
    var shortest_direction_length = 9999;

    if (can_go_up) {
        if (distance_from_up < shortest_direction_length) {
            shortest_direcion = 0;
            shortest_direction_length = distance_from_up;
        }
    }
    if (can_go_down) {
        if (distance_from_down < shortest_direction_length) {
            shortest_direcion = 1;
            shortest_direction_length = distance_from_down;
        }
    }
    if (can_go_left) {
        if (distance_from_left < shortest_direction_length) {
            shortest_direcion = 2;
            shortest_direction_length = distance_from_left;
        }
    }
    if (can_go_right) {
        if (distance_from_right < shortest_direction_length) {
            shortest_direcion = 3;
            shortest_direction_length = distance_from_right;
        }
    }

    if (shortest_direcion > -1) {
        if (shortest_direcion == 0) { ghost_object.y -= 1; }
        if (shortest_direcion == 1) { ghost_object.y += 1; }
        if (shortest_direcion == 2) { ghost_object.x -= 1; }
        if (shortest_direcion == 3) { ghost_object.x += 1; }

        ghost.setDirection(shortest_direcion);
    }
}

function getDistance(start, end) { // Takes in two targets to have an x and a y
  var height = start.y - end.y;
  var width = start.x - end.x;

  var hypotenuse = Math.sqrt((height * height) + (width * width));

  // console.log(start);
  // console.log(end);
  // console.log(height);
  // console.log(width);
  // console.log(hypotenuse);

  return hypotenuse;
}

// TICKER SPRITE ANIMATIONS
const sprite_tick_speed = 250;

function sprite_ticker() {
  CustomSetLegend();
  all_animators.forEach((animator) => {
    animator.nextFrame();
  })
}
setInterval(sprite_ticker, sprite_tick_speed);