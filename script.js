let container = document.getElementById('container');

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
    gridSquare.style.backgroundColor = getRandomColor();
}

createGrid(16);