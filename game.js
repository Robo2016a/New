const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Player properties
let player = {
  x: 235,
  y: 185,
  size: 30,
  speed: 5,
  color: "#3a86ff"
};

// Clear and redraw the screen
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw player kart
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

// Listen for key presses to move the kart
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") player.y -= player.speed;
  if (e.key === "ArrowDown") player.y += player.speed;
  if (e.key === "ArrowLeft") player.x -= player.speed;
  if (e.key === "ArrowRight") player.x += player.speed;
  
  draw();
});

// Initial draw
draw();
