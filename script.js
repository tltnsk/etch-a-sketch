let container = document.getElementById('container');
let randomColorBtn = document.getElementById('randomColorBtn');
let resetBtn = document.getElementById('resetBtn');
let eraseBtn = document.getElementById('eraseBtn');
let resizeBtn = document.getElementById('resizeBtn');

let resizeValue = document.getElementById('resizeValue');

let currentMode = 'color';

function createGrid(size) {
    container.innerHTML = '';

    const squareSize = (960 / size) + 'px';

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div');

        gridSquare.classList.add('grid-item');
        gridSquare.style.width = squareSize;
        gridSquare.style.height = squareSize;

        container.appendChild(gridSquare);
        gridSquare.addEventListener('mouseenter', () => colorSquare(gridSquare));
    }
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorSquare(gridSquare) {
    if (currentMode === 'color') {
        gridSquare.style.backgroundColor = getRandomColor();
    } else if (currentMode === 'erase') {
        gridSquare.style.backgroundColor = '';
    }
}

eraseBtn.addEventListener("click", () => {
    currentMode = 'erase';
});

randomColorBtn.addEventListener("click", () => {
    currentMode = 'color';
});

resetBtn.addEventListener("click", () => {
    const grids = document.querySelectorAll(".grid-item");
    grids.forEach(grid => {
        grid.style.backgroundColor = ''; // or 'transparent' or 'white'
    });
});

createGrid(16);