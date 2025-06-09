document.getElementById('generateBtn').addEventListener('click', function () {
    const sizeInput = document.getElementById('sizeInput');
    const size = parseInt(sizeInput.value);

    if (isNaN(size) || size <= 0) {
        alert("Please input a valid Number!");
        return;
    }

    const chessboardContainer = document.getElementById('chessboardContainer');
    chessboardContainer.innerHTML = '';

    const table = document.createElement('table');
    table.className = "border-collapse";

    for (let row = 0; row < size; row++) {
        const tr = document.createElement('tr');

        for (let col = 0; col < size; col++) {
            const td = document.createElement('td');
            td.className = "chess-cell";

            if ((row + col) % 2 === 0) {
                td.classList.add('white');
            } else {
                td.classList.add('black');
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    chessboardContainer.appendChild(table);
});