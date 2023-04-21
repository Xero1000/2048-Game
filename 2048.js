let board = [[0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0]]

function setBoard() {
    setNewTile();
    setNewTile();
}

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
    }
    else {
        setNewTile();
    }
}

setBoard();
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
console.log(board[3]);

