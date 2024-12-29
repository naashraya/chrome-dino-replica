const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};

document.addEventListener('keydown' , function(evt){
    keys[evt.code = 'true'];
});
document.addEventListener('keyup', function (evt){
    keys[evt.code = 'false']
});

class Palyer{
    constructor(x,y,w,h,c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.dy = 0;
        this.jumpforce = 15;
        this.originalHeight = h;
        this.grounded = false;
        this.jumptimer = 0;
    }

    Animate(){
        if (keys['Space'] || keys['KeyW']) {
            this.Jump();
          } else {
            this.jumpTimer = 0;
          }
      
          if (keys['ShiftLeft'] || keys['KeyS']) {
            this.h = this.originalHeight / 2;
          } else {
            this.h = this.originalHeight;
          }
      
          this.y += this.dy;
      
          // Gravity
          if (this.y + this.h < canvas.height) {
            this.dy += gravity;
            this.grounded = false;
          } else {
            this.dy = 0;
            this.grounded = true;
            this.y = canvas.height - this.h;
          }
      
          this.Draw();
    }

    Jump () {
        if (this.grounded && this.jumpTimer == 0) {
          this.jumpTimer = 1;
          this.dy = -this.jumpForce;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
          this.jumpTimer++;
          this.dy = -this.jumpForce - (this.jumpTimer / 50);
        }
      }

      Draw () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
      }
}

class Obstacles{
    constructor(x,y,w,h,c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.dx = -gameSpeed;
    }

    Upadte(){
        this.x += this.dx;
        this.Draw();
        this.dx = -gameSpeed;
    }

    Draw(){
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect = (this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
}

class Text{
    constructor (t, x, y, a, c, s) {
        this.t = t;
        this.x = x;
        this.y = y;
        this.a = a;
        this.c = c;
        this.s = s;
      }
    
      Draw () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.font = this.s + "px sans-serif";
        ctx.textAlign = this.a;
        ctx.fillText(this.t, this.x, this.y);
        ctx.closePath();
      }
}

function SpawnObstacle(){
    let size = RandomIntInRange(20,70);
}