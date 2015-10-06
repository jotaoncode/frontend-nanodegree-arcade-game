/**
 * @class Character
 */
var Character = function () {
};
/**
 * Character render
 */
Character.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
/**
 * Enemy is a Character
 * @description Enemies our player must avoid
 * @class Enemy
 */
var Enemy = function(position) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.speed = (Math.random() * 100) + 50;
  this.x = -101;
  switch (position) {
    case 0:
      this.y = 61;
      break;
    case 1:
      this.y = 145;
      break;
    case 2:
      this.y = 225;
      break;
    default:
  }
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + (dt * this.speed);
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  if (this.x > 505) {
    this.x = -101;
    this.speed = (Math.random() * 200) + 50;
  }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
/**
 * Player is a character
 * @class Player
 */
var Player = function () {
  this.isAlive = true;
  this.sprite = 'images/char-boy.png';
  this.x = 2 * 101;
  this.y = 5 * 80;
};
Player.prototype = Object.create(Character.prototype);

Player.prototype.constructor = Player;
/**
 * Player Reach win point
 */
Player.prototype.reachedWater = function () {
  game.playerWin();
  this.isAlive = false;
};
/**
 * Player catched by bug
 */
Player.prototype.died = function () {
  game.playerLoose();
  this.isAlive = true;
};
/**
 * Update Player instance if won or died
 */
Player.prototype.update = function () {
  if (!this.isAlive) {
    this.died();
  }
  if (this.y === 0) {
    this.reachedWater();
  }
};
/**
 * Handle key press client
 */
Player.prototype.handleInput = function (key) {
  switch (key) {
    case 'up':
      if (this.y > 0) {
        this.y -= 80;
      }
      break;
    case 'down':
      if (this.y < 400) {
        this.y += 80;
      }
      break;
    case 'left':
      if (this.x > 0) {
        this.x -= 101;
      }
      break;
    case 'right':
      if (this.x < 332) {
        this.x += 101;
      }
      break;
    default:
  }
};
/**
 * List of enemies
 */
var allEnemies = [];
/**
 * @module Game
 * @description Game has enemies and a player
 */
var game = (function () {

  var scoreResult;

  function addToScore() {
    scoreResult = $('#score-value');
    var scoreValue = window.parseInt(scoreResult.text());
    scoreResult.text(++scoreValue);
  }
  /**
   * There are 3 enemies one in each line
   * it can change or extend to create as many
   * as needed
   */
  function createEnemies() {
    for(var i = 0; i < 3; i++) {
      allEnemies.push(new Enemy(i));
    }
  }
  /**
   * Creates the player
   */
  function createPlayer() {
    player = new Player();
  }
  /**
   * This listens for key presses and sends the keys to your
   * Player.handleInput() method. You don't need to modify this.
   */
  function addPlayerKeyControls() {
    document.addEventListener('keyup', function(e) {
      var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
      };

      player.handleInput(allowedKeys[e.keyCode]);
    });
  }
  function takePlayerInitialPosition() {
    player.x = 2 * 101;
    player.y = 5 * 80;
  }
  return {
    /**
     * Will create everything needed to the game
     */
    start: function () {
      createEnemies();
      createPlayer();
      addPlayerKeyControls();
    },
    /**
     * When Player win Game will add to score
     */
    playerWin: function () {
      addToScore();
    },
    /**
     * When Player loose Game will set player position
     */
    playerLoose: function () {
      takePlayerInitialPosition();
    }
  };
}());

game.start();
