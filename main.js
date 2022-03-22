/**
 * Author: Tan Nguyen
 * Date created: 3.30PM, 22 March, 2022
 */

// NOTES: This program assume user input is corrected for avoiding complex validation technique
const input = `
2 3
1 4 3
4 3 1
0 0
RRDUDLL
`

/* --------------- Initialization ------------- */

// GLOBAL VARIABLE
const text = input.split('\n').filter(str => str.length > 0)
const [MAP_ROW_SIZE, MAP_COL_SIZE] = text[0].split(' ')
const [ROBOT_START_ROW, ROBOT_START_COL] = text[text.length - 2].split(' ')
const instruction = text[text.length - 1]

const map2D = []
for (let idx = 0; idx < MAP_ROW_SIZE; idx++) {
    map2D[idx] = []
    const rowVal = text[idx + 1].split(' '); // offset-by-1 due to first line of input is `map2D` size
    for (let jdx = 0; jdx < MAP_COL_SIZE; jdx++) map2D[idx][jdx] = rowVal[jdx] ? parseInt(rowVal[jdx]) : 0;
}
// console.log(map2D)

/* ---------------------- Execution -------------------------- */

let [rowIdx, colIdx] = [ROBOT_START_ROW, ROBOT_START_COL]
let goldCollected = 0;
for (let idx = 0; idx < instruction.length; idx++) {
    if (!handleCollect(rowIdx, colIdx)) break;

    switch (instruction[idx]) {
        case 'U': rowIdx--; break;
        case 'D': rowIdx++; break;
        case 'L': colIdx--; break;
        case 'R': colIdx++; break;
        default: throw new Error(`Invalid instruction: ${instruction[idx]} at idx ${idx} of ${instruction}`);
    }
}

if (!handleCollect(rowIdx, colIdx)) console.log(`Robot moves out the map. GAME OVER!\nGold collected: 0`);
else console.log(`End game. Gold collected: ${goldCollected}`)


/* ----------------------- Declaration ------------------------ */
/**
 * @returns `false` if `Robot` moves out the map; Otherwise, `true`
 */
function handleCollect(rowIdx, colIdx) {
    if (rowIdx < 0 || rowIdx >= MAP_ROW_SIZE
        || colIdx < 0 || colIdx >= MAP_COL_SIZE) {
        goldCollected = 0;
        return false;
    }

    goldCollected += map2D[rowIdx][colIdx]
    map2D[rowIdx][colIdx] = 0
    return true;
}