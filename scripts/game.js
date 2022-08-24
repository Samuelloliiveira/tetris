const cvs = document.getElementById("box")
const ctx = cvs.getContext("2d")
const scoreElements = document.querySelectorAll(".score")
const speedElements = document.querySelectorAll(".speed")
// const movePiece = document.getElementById("movePiece")

const modal = document.getElementById("modal")
const newGame = document.getElementById("newGame")

const buttonLeft = document.getElementById("buttonLeft")
const buttonUp = document.getElementById("buttonUp")
const buttonDown = document.getElementById("buttonDown")
const buttonRight = document.getElementById("buttonRight")

const ROW = 21
const COL = 11
const SQ = 29
const defaultColor = "#000"
const defaultBorder = "#ffffff00"

let canMove = true
let speed = 500
let dropStart = Date.now()
let score = 0

let board = []
for (let currentRow = 0; currentRow < ROW; currentRow++) {
    board[currentRow] = []
    for(let currentCol = 0; currentCol < COL; currentCol++) {
        board[currentRow][currentCol] = defaultColor
    }
}

drawBoard()

const PIECES = [
    [Z,'#720505'],
    [S,'#148106'],
    [T,'#fce72d'],
    [O,'#085a86'],
    [L,'#5c0994'],
    [I,'#8d0961'],
    [J,'#993e09'],
]

let piece = randomPiece()

drop()
controlMobile()