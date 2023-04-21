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
// A new tile position is generated until an empty tile is found
function setNewTile() {
    let row = Math.floor(Math.random() * 4)
    let column = Math.floor(Math.random() * 4)
    let tileGenerator = Math.floor(Math.random() * 10)
    let set = false;

    while (!set){
        if (board[row][column] === 0){
            let tile = domBoard.children[row].children[column]
            if (tileGenerator < 9){
                board[row][column] = 2
                tile.textContent = 2
                tile.classList.add("two")
            }
            else {
                board[row][column] = 4
                tile.textContent = 4
                tile.classList.add("four")
            }
            set = true;
        }
        else {
            row = Math.floor(Math.random() * 4)
            column = Math.floor(Math.random() * 4)
        }
    }
}

// checks if the move can be done before moving
function move(direction) {
    
}

function moveLeft(){
    for (let row = 0; row <= 3; row++) {
        for (let col = 1; col <= 3; col++) {
            if (board[row][col] != 0) {
                for (let previousCol = col - 1; previousCol >= 0; previousCol--) {
                    if (board[row][previousCol] === 0) {
                        board[row][previousCol] = board[row][col]
                        board[row][col] = 0
                        col = col - 1;
                    }
                }
            }
        }
    }
}

function moveRight(){
    for (col = 3; col >= 0; col--){
        for (row = 0; row <= 3; row++){
            
        }
    }
}

function moveUp(){
    for (row = 0; row <= 3; row++){
        for (col = 0; col <= 3; col++){
            
        }
    }
}

function moveDown(){
    for (row = 3; row <= 0; row--){
        for (col = 0; col <= 3; col++){
            
        }
    }
}

setBoard();
moveLeft();
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
console.log(board[3]);

