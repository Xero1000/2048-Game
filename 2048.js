// Query selector to select the board in the DOM
let q = document.querySelector.bind(document);
let domBoard = q("#board");

// 2D Array to represent 2048 board
let board = [[0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0]]

// Initialize the board at start of game
function setBoard() {
    setNewTile();
    setNewTile();
}

// Generates new tiles
// 90% chance of tile having value of 2, 10% it'll be 4
// If the tile position is already taken, function runs again
function setNewTile() {
    let row = Math.floor(Math.random() * 4);
    let column = Math.floor(Math.random() * 4);
    let tileGenerator = Math.floor(Math.random() * 10);

    if (board[row][column] === 0){
        if (tileGenerator < 9){
            board[row][column] = 2;
        }
        else {
            board[row][column] = 4;
        }
        domBoard.children[row].children[column].textContent = board[row][column];
    }
    else {
        setNewTile();
    }
}

function move(direction) {

}

setBoard();
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
console.log(board[3]);

