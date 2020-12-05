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

const getSeatPosition = (boardingPass) => {
    boardingPass = boardingPass.replace(/F|L/g, 0)
    boardingPass = boardingPass.replace(/B|R/g, 1)
    return parseInt(boardingPass, 2)
}

boardingPasses.forEach(boardingPass => {
    const rowNum = getSeatPosition(boardingPass.substring(0, 7))
    const colNum = getSeatPosition(boardingPass.substring(7))
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