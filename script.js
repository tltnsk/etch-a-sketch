document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById('container');

    container.innerHTML = '';
    let size = 16;

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div');

        gridSquare.classList.add('grid-item');
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;

        container.appendChild(gridSquare);
    }
}); 