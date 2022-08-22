const canvas = document.getElementById('box')
const context = canvas.getContext("2d")

const score = document.getElementById("score")
const speed = document.getElementById("speed")

const rows = 20
const columns = 10
const pixels = 30
const defaultColor = "#111111"
const defaultBorder = "rgba(255, 255, 255, 0.1)"

let board = []

for (let currentRow = 0; currentRow < rows; currentRow++) {
    board[currentRow] = []
    for (let currentCol = 0; currentCol < columns; currentCol++) {
        board[currentRow][currentCol] = defaultColor
    }
}

drawBoard()