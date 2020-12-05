/*
    Rows: 0 - 127
    Columns: 0 - 7
    (Row * 8) + Column = seat ID
*/

const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
const boardingPasses = input.split('\n')
let seatIDs = []
let highestSeatID = 0

const getSeatPosition = (bpArray, upperChar, lowerChar, start, end) => {
    if (start === end)
        return start

    const char = bpArray.shift()

    if (char === upperChar)
        return getSeatPosition(bpArray, upperChar, lowerChar, start + Math.ceil((end - start)/2), end)

    if (char === lowerChar)
        return getSeatPosition(bpArray, upperChar, lowerChar, start, end - Math.ceil((end - start)/2))
}

boardingPasses.forEach(boardingPass => {
    const rowNum = getSeatPosition(Array.from(boardingPass.substring(0, 7)), 'B', 'F', 0, 127)
    const colNum = getSeatPosition(Array.from(boardingPass.substring(7)), 'R', 'L', 0, 7)
    const seatID = (rowNum * 8) + colNum

    seatIDs.push(seatID)
    
    if (seatID > highestSeatID)
        highestSeatID = seatID
})

const getMySeat = () => {
    for (const seatID of seatIDs) {
        if ((!seatIDs.includes(seatID - 1)) && seatIDs.includes(seatID - 2)) {
            return seatID - 1
        }
    }
}

console.log(`Highest seat ID is: ${highestSeatID}`)
console.log(`My seat ID is: ${getMySeat()}`)