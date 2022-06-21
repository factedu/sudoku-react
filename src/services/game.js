export let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

export function isValidPlace(grid, row, col, number) {
    // console.log(grid,row,col,number);
    // return false;
    for (let i = 0; i < 9; i++) {
        if (grid[i][col] === number) {
            // console.log(`${number} found at ${row},${col} : horizontal array`)
            return false;
        }
    }
    for (let i = 0; i < 9; i++) {
        if (grid[row][i] === number) {
            return false;
        }
    }
    //find in subgrid 3x3 matrix
    let localBoxRow = row - (row % 3);
    let localBoxCol = col - (col % 3);
    for(let i=localBoxRow;i<localBoxRow+3;i++){
        for (let j = localBoxCol; j < localBoxCol + 3; j++) {
            // console.log(i,j);
            if (grid[i][j] === number) {
                return false;
            }
        }
    }
    return true;
}

export function isValidNumber(grid,row,col,number){
    number=+number;//convert to number
    if(!number)return true;
    for (let i = 0; i < 9; i++) {
        // console.log(grid[i][col]);
        if (grid[i][col] === number && (i!==row)) {
            console.log(`${number} found at ${i},${col} : vertical array`)
            return false;
        }
    }
    for (let i = 0; i < 9; i++) {
        if (grid[row][i] === number && (i !== col)) {
            console.log(`${number} found at ${row},${i} : horizontal array`)
            return false;
        }
    }
    //find in subgrid 3x3 matrix
    let localBoxRow = row - (row % 3);
    let localBoxCol = col - (col % 3);
    for (let i = localBoxRow; i < localBoxRow + 3; i++) {
        for (let j = localBoxCol; j < localBoxCol + 3; j++) {
            // console.log(i,j);
            if (grid[i][j] === number && (i!==row && j!==col)) {
                console.log(`${number} found at ${i},${j} : 3x3 subgrid`)
                return false;
            }
        }
    }
    return true;
}

export function solve(grid) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) {
                for (let guess = 1; guess < 10; guess++) {
                    if (isValidPlace(grid,row, col, guess)) {
                        grid[row][col] = guess;
                        print2DArray(grid);
                        if (solve(grid)) {
                            return true;
                        }
                        grid[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

export function print2DArray(grid){
    for(let i=0;i<grid.length;i++){
        console.table(...grid[i]);
    }
    console.log('----------------------------');
}

export function puzzleToMatrix(puzzle){
    puzzle = puzzle.map(p => {
        if (p!==null) return p + 1;
    });
    const arr = [];
    for (let i = 0; i < puzzle.length; i += 9) {
        const chunk = puzzle.slice(i, i + 9);
        arr.push(chunk);
    }
    return arr;
}

export function createPuzzleAsPerDifficulty(puzzle,level){
    //puzzle is an array of 81 elements
    const removeElements = [...Array(~~(puzzle.length*level))].map(e=>~~(Math.random()*79)); // Math.floor(puzzle.length*level);
    removeElements.map(r=>{
        puzzle[r]=null;
    })
    return puzzle;
}

export function getFilledIndexs(board){
    const arr=[];
    for(let i = 0; i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[i][j]!==undefined){
                arr.push(`${i},${j}`);
            }
        }
    }
    return arr;
}

// solve(board);
// console.log(board);