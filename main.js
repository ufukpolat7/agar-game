const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let playerX = canvas.width / 2;  
let playerY = canvas.height / 2;
const playerRadius = 40;         

function drawPlayer() {

ctx.clearRect(0,0,canvas.width, canvas.height);

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(playerX, playerY, playerRadius, 0, Math.PI * 2);
ctx.fill();

}

drawPlayer();


window.addEventListener("mousemove", function(event) {
    playerX = event.clientX;
    playerY = event.clientY;

drawPlayer();

});




















console.log("JS calisiyor");