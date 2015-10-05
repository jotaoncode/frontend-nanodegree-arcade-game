// Enemies our player must avoid
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

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
  this.isAlive = true;
  this.sprite = 'images/char-boy.png';
  this.x = 2 * 101;
  this.y = 5 * 80;
};
Player.prototype.update = function () {
  if (!this.isAlive) {
    this.x = 2 * 101;
    this.y = 5 * 80;
    this.isAlive = true;
  }
};
Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
for(var i = 0; i < 3; i++) {
  allEnemies.push(new Enemy(i));
}
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
