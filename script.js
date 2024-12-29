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
    let type = RandomIntInRange(0,1);
    let obstacle = new obstacle(canvas.width + size, canvas.height - size,size,size,'#2484E4');

    if(type==1){
      obstacle.y -= player.originalHeight - 10;
    }
    obstacles.push(obstacles);
}

function RandomIntInRange(min, max){
  return Math.round(Math.random()*(max-min)+min);
}

function Start(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.font = "20px sans-serif";

  gameSpeed = 3;
  gravity = 1;

  score = 0;
  highscore = 0;
  if (localStorage.getItem('highscore')) {
    highscore = localStorage.getItem('highscore');
  }

  player = new Player(25, 0, 50, 50, '#FF5858');

  scoreText = new Text("Score: " + score, 25, 25, "left", "#212121", "20");
  highscoreText = new Text("Highscore: " + highscore, canvas.width - 25, 25, "right", "#212121", "20");

  requestAnimationFrame(Update);
}
