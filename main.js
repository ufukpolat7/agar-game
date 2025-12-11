const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let playerX = canvas.width / 2;  
let playerY = canvas.height / 2;
const playerRadius = 40;      
let targetX = playerX; 
let targetY = playerY;   

function drawPlayer() {

ctx.clearRect(0,0,canvas.width, canvas.height);
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(playerX, playerY, playerRadius, 0, Math.PI * 2);
ctx.fill();

}

function updatePlayer() {

  const speed = 0.05; 
  playerX += (targetX - playerX) * speed;
  playerY += (targetY - playerY) * speed;
  
}

window.addEventListener("mousemove", function(event) {
    targetX = event.clientX;
    targetY = event.clientY;


});

function gameLoop() {
  updatePlayer();
  drawPlayer();   

  requestAnimationFrame(gameLoop); 
}


gameLoop();




















console.log("JS calisiyor");