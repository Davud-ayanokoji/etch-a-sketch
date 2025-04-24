const container = document.getElementById('container');
let currentMode = 'black'; // default mode

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function colorSquare(square) {
  if (currentMode === 'rainbow') {
    square.style.backgroundColor = getRandomRGB();
  } else if (currentMode === 'eraser') {
    square.style.backgroundColor = 'white';
  } else {
    square.style.backgroundColor = 'black';
  }
}

function createGrid(size = 16) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.addEventListener('mouseover', () => colorSquare(square));
    container.appendChild(square);
  }
}

document.getElementById('reset').addEventListener('click', () => {
  const size = prompt('Enter new grid size (1-100):');
  if (size !== null && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

document.getElementById('rainbow').addEventListener('click', () => {
  currentMode = 'rainbow';
});

document.getElementById('eraser').addEventListener('click', () => {
  currentMode = 'eraser';
});

document.getElementById('clear').addEventListener('click', () => {
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => (square.style.backgroundColor = 'white'));
  currentMode = 'black';
});

createGrid();
