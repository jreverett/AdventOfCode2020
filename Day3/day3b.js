const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
const inputArray = input.split("\n")

const traverseSlope = (xPolicy, yPolicy) => {
    let x = 0, numTrees = 0

    for (y = 0; y < inputArray.length; y += yPolicy) {
        if (inputArray[y][x % inputArray[y].length] === '#') {
            numTrees++
        }

        x += xPolicy
    }

    return numTrees
}

const result = traverseSlope(1, 1) * traverseSlope(3, 1) * traverseSlope(5, 1) * traverseSlope(7, 1) * traverseSlope(1, 2)
console.log(`Result is ${result} trees 🌲`)