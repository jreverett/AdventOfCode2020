const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
const inputArray = input.split("\n")

let x = 0, numTrees = 0

for (const row of inputArray) {
    if (row[x % row.length] === '#') {
        numTrees++
    }

    x += 3
}

console.log(`${numTrees} trees encountered over ${inputArray.length} rows 🌲`)