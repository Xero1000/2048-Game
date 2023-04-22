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
    let col = Math.floor(Math.random() * 4)
    let tileGenerator = Math.floor(Math.random() * 10)
    let set = false;

    while (!set){
        if (board[row][col] === 0){
            let tile = domBoard.children[row].children[col]
            if (tileGenerator < 9){
                board[row][col] = 2
                tile.textContent = 2
                tile.classList.add("two")
            }
            else {
                board[row][col] = 4
                tile.textContent = 4
                tile.classList.add("four")
            }
            set = true;
        }
        else {
            row = Math.floor(Math.random() * 4)
            col = Math.floor(Math.random() * 4)
        }
    }
    console.log(`new tile: ${row}, ${col}`)
}

// checks if the move can be done before moving
function move(direction) {
    
}

// Shifts every tile as far left as it can go
// For each row, goes through second to last column
// A new tile is generated in a random empty position at the end of the move
function moveLeft() {
    let boardChanged = false; // If tiles shift, becomes true

    for (let row = 0; row <= 3; row++) {
        for (let col = 1; col <= 3; col++) {
            if (board[row][col] != 0) {
                // Examines tiles left of the current tile
                for (let previousCol = col - 1; previousCol >= 0; previousCol--) {
                    // the current and previous tiles inside the DOM
                    let previousTile = domBoard.children[row].children[previousCol]
                    let currentTile = domBoard.children[row].children[col]

                    // Shifts tile left until no tile with a value of 0 is left of it
                    if (board[row][previousCol] === 0) {
                        board[row][previousCol] = board[row][col]
                        currentTile.classList.remove(getTileClass(board[row][col]))
                        currentTile.textContent = 0
                        board[row][col] = 0
                        previousTile.textContent = board[row][previousCol]
                        previousTile.classList.add(getTileClass(board[row][previousCol]))
                        col = col - 1;
                        boardChanged = true;
                    }
                    // If the tile left of the current one has the same value, 
                    // left tile's value is multiplied by two, and current tile's value
                    // becomes 0
                    else if (board[row][previousCol] === board[row][col]) {
                        previousTile.classList.remove(getTileClass(board[row][previousCol]))
                        board[row][previousCol] = board[row][previousCol] * 2
                        previousTile.textContent = board[row][previousCol]
                        previousTile.classList.add(getTileClass(board[row][previousCol]))
                        currentTile.classList.remove(getTileClass(board[row][col]))
                        board[row][col] = 0
                        currentTile.textContent = 0
                        boardChanged = true;
                    }
                }
            }
        }
    }
    // New tile is only generated if the board looks different 
    // than before attempting to move left
    if (boardChanged) {
        setNewTile()
    }
}

// Shifts every tile as far right as it can go
// For each row, goes from third to first column
// A new tile is generated in a random empty position at the end of the move
function moveRight() {
    let boardChanged = false; // If tiles shift, becomes true

    for (let row = 0; row <= 3; row++) {
        for (let col = 2; col >= 0; col--) {
            if (board[row][col] != 0) {
                // Examines tiles right of the current tile
                for (let previousCol = col + 1; previousCol <= 3; previousCol++) {
                    // the current and previous tiles inside the DOM
                    let previousTile = domBoard.children[row].children[previousCol]
                    let currentTile = domBoard.children[row].children[col]

                    // Shifts tile right until no tile with a value of 0 is right of it
                    if (board[row][previousCol] === 0) {
                        board[row][previousCol] = board[row][col]
                        currentTile.classList.remove(getTileClass(board[row][col]))
                        currentTile.textContent = 0
                        board[row][col] = 0
                        previousTile.textContent = board[row][previousCol]
                        previousTile.classList.add(getTileClass(board[row][previousCol]))
                        col = col + 1;
                        boardChanged = true;
                    }
                    // If the tile right of the current one has the same value, 
                    // right tile's value is multiplied by two, and current tile's value
                    // becomes 0
                    else if (board[row][previousCol] === board[row][col]) {
                        previousTile.classList.remove(getTileClass(board[row][previousCol]))
                        board[row][previousCol] = board[row][previousCol] * 2
                        previousTile.textContent = board[row][previousCol]
                        previousTile.classList.add(getTileClass(board[row][previousCol]))
                        currentTile.classList.remove(getTileClass(board[row][col]))
                        board[row][col] = 0
                        currentTile.textContent = 0
                        boardChanged = true;
                    }
                }
            }
        }
    }
    // New tile is only generated if the board looks different 
    // than before attempting to move right
    if (boardChanged) {
        setNewTile()
    }
}

// Shifts every tile as far up as it can go
// For each column, goes through second to last row
// A new tile is generated in a random empty position at the end of the move
function moveUp(){
    let boardChanged = false; // If tiles shift, becomes true

    for (let col = 0; col <= 3; col++) {
        for (let row = 1; row <= 3; row++) {
            if (board[row][col] != 0) {
                // Examines tiles above of the current tile
                for (let previousRow = row - 1; previousRow >= 0; previousRow--) {
                    // console.log(`col: ${col}, row: ${row}, previousRow: ${previousRow}`)
                    // the current and previous tiles inside the DOM
                    let previousTile = domBoard.children[previousRow].children[col]
                    let currentTile = domBoard.children[row].children[col]

                    // Shifts tile up until no tile with a value of 0 is above it
                    if (board[previousRow][col] === 0) {
                        board[previousRow][col] = board[row][col]
                        currentTile.classList.remove(getTileClass(board[row][col]))
                        currentTile.textContent = 0
                        board[row][col] = 0
                        previousTile.textContent = board[previousRow][col]
                        previousTile.classList.add(getTileClass(board[previousRow][col]))
                        row = row - 1;
                        boardChanged = true;
                    }
                    // If the tile above the current one has the same value, 
                    // the above tile's value is multiplied by two, and current tile's value
                    // becomes 0
                    else if (board[previousRow][col] === board[row][col]) {
                        previousTile.classList.remove(getTileClass(board[previousRow][col]))
                        board[previousRow][col] = board[previousRow][col] * 2
                        previousTile.textContent = board[previousRow][col]
                        previousTile.classList.add(getTileClass(board[previousRow][col]))
                        currentTile.classList.remove(getTileClass(board[row][col]))
                        board[row][col] = 0
                        currentTile.textContent = 0
                        boardChanged = true;
                    }
                }
            }
        }
    }
    // New tile is only generated if the board looks different 
    // than before attempting to move up
    if (boardChanged) {
        setNewTile()
    }
}

// Shifts every tile as far down as it can go
// For each column, goes from third to first row
// A new tile is generated in a random empty position at the end of the move
function moveDown(){
    let boardChanged = false; // If tiles shift, becomes true

    for (let col = 0; col <= 3; col++) {
        for (let row = 2; row >= 0; row--) {
            if (board[row][col] != 0) {
                // Examines tiles below of the current tile
                for (let previousRow = row + 1; previousRow <= 3; previousRow++) {
                    // console.log(`col: ${col}, row: ${row}, previousRow: ${previousRow}`)
                    // the current and previous tiles inside the DOM
                    let previousTile = domBoard.children[previousRow].children[col]
                    let currentTile = domBoard.children[row].children[col]

                    // Shifts tile downward until no tile with a value of 0 is below it
                    if (board[previousRow][col] === 0) {
                        board[previousRow][col] = board[row][col]
                        currentTile.classList.remove(getTileClass(board[row][col]))
                        currentTile.textContent = 0
                        board[row][col] = 0
                        previousTile.textContent = board[previousRow][col]
                        previousTile.classList.add(getTileClass(board[previousRow][col]))
                        row = row + 1;
                        boardChanged = true;
                    }
                    // If the tile below the current one has the same value, 
                    // the below tile's value is multiplied by two, and current tile's value
                    // becomes 0
                    else if (board[previousRow][col] === board[row][col]) {
                        previousTile.classList.remove(getTileClass(board[previousRow][col]))
                        board[previousRow][col] = board[previousRow][col] * 2
                        previousTile.textContent = board[previousRow][col]
                        previousTile.classList.add(getTileClass(board[previousRow][col]))
                        currentTile.classList.remove(getTileClass(board[row][col]))
                        board[row][col] = 0
                        currentTile.textContent = 0
                        boardChanged = true;
                    }
                }
            }
        }
    }
    // New tile is only generated if the board looks different 
    // than before attempting to move down
    if (boardChanged) {
        setNewTile()
    }
}

// The tile is associated with a specific class 
// depending on the value it is holding
function getTileClass(tileValue) {
    tileClass = null;
    switch (tileValue) {
        case 2: 
            tileClass = "two"
            break
        case 4: 
            tileClass = "four"
            break
        case 8: 
            tileClass = "eight"
            break
        case 16: 
            tileClass = "sixteen"
            break
        case 32: 
            tileClass = "thirty-two"
            break
        case 64: 
            tileClass = "sixty-four"
            break
        case 128: 
            tileClass = "one-twenty-eight"
            break
        case 256: 
            tileClass = "two-fifty-six"
            break
        case 512: 
            tileClass = "five-hundred-twelve"
            break
        case 1024: 
            tileClass = "one-thousand-twenty-four"
            break
        case 2048: 
            tileClass = "two-thousand-forty-eight"
            break
    }
    return tileClass
}

setBoard();
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
console.log(board[3]);
console.log("---------------")
moveLeft();
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
console.log(board[3]);
console.log("---------------")
moveUp();
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
console.log(board[3]);
console.log("---------------")
moveRight();
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
console.log(board[3]);
console.log("---------------")
moveDown();
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
console.log(board[3]);

