function drawBoard() {
    for (let currentRow = 0; currentRow < rows; currentRow++) {
        for (let currentCol = 0; currentCol < columns; currentCol++) {
            const currentSquareColor = board[currentRow][currentCol]
            drawSquare(currentRow, currentCol, currentSquareColor)
        }
    }
}

function drawSquare(currentRow, currentCol, currentSquareColor) {
    context.fillStyle = currentSquareColor
    context.fillRect(currentCol * pixels, currentRow * pixels, pixels, pixels)

    if (currentSquareColor == defaultColor) {
        context.strokeStyle = defaultBorder
    }

    context.strokeRect(currentCol * pixels, currentRow * pixels, pixels, pixels)
}