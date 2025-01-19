const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clearButton');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');

// Set canvas dimensions
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

let drawing = false;
let currentColor = '#000000';
let currentBrushSize = 5;

// Event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);
clearButton.addEventListener('click', clearCanvas);
colorPicker.addEventListener('input', (e) => (currentColor = e.target.value));
brushSize.addEventListener('input', (e) => (currentBrushSize = e.target.value));

// Functions
function startDrawing(e) {
  drawing = true;
  draw(e); // Draw the first dot when starting
}

function stopDrawing() {
  drawing = false;
  ctx.beginPath(); // Reset the path to avoid connecting lines
}

function draw(e) {
  if (!drawing) return;

  ctx.lineWidth = currentBrushSize;
  ctx.lineCap = 'round';
  ctx.strokeStyle = currentColor;

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
