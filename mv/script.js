// Get the canvas element
var canvas = document.getElementById("matrix");

// Set the canvas dimensions to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the 2D drawing context
var ctx = canvas.getContext("2d");

// Characters to be used in the matrix effect
var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Convert the string of characters into an array
characters = characters.split("");

// Set the number of columns and rows in the matrix
var columns = canvas.width / 20;
var rows = canvas.height / 20;

// Create an array to store the characters
var matrix = [];

// Generate random characters for each column
for (var x = 0; x < columns; x++) {
  matrix[x] = [];
  for (var y = 0; y < rows; y++) {
    matrix[x][y] = characters[Math.floor(Math.random() * characters.length)];
  }
}

// Draw the matrix on the canvas
function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FF41";
  ctx.font = "15px monospace";

  for (var x = 0; x < columns; x++) {
    for (var y = 0; y < rows; y++) {
      var character = matrix[x][y];
      ctx.fillText(character, x * 20, y * 20);

      // Generate a random character to replace the current one occasionally
      if (Math.random() > 0.95) {
        matrix[x][y] = characters[Math.floor(Math.random() * characters.length)];
      }
    }
  }
}

// Update the matrix and redraw it on the canvas
function updateMatrix() {
  drawMatrix();
  requestAnimationFrame(updateMatrix);
}

// Start the animation
updateMatrix();
