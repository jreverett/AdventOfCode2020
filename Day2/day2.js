const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
const inputArray = input.split("\n")

const parse = passwordPolicy => passwordPolicy.map(x => {
    const [occourances, char, password] = x.split(' ')
    return {
        minOccourances: occourances.split('-')[0],
        maxOccourances: occourances.split('-')[1],
        char: char.slice(0, -1),
        password
    }
}) 

const validatePart1 = ({ minOccourances, maxOccourances, char, password }) => {
    const occourances = password.split(char).length - 1
    return occourances >= minOccourances && occourances <= maxOccourances
}

const validatePart2 = ({ minOccourances, maxOccourances, char, password }) => {
    if ((password[minOccourances - 1] === char) ^ (password[maxOccourances - 1] === char)) {
        return true
    }
    return false
}

function main() {
    const passwords = parse(inputArray)
    console.log(`--- PART 1 ---`)
    console.log(`Found ${passwords.filter(validatePart1).length}/${inputArray.length} valid passwords\n`)
    console.log(`--- PART 2 ---`)
    console.log(`Found ${passwords.filter(validatePart2).length}/${inputArray.length} valid passwords\n`)
}

main();