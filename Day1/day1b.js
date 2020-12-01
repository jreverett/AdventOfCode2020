const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
const inputArray = input.split("\n")
var resultFound = false;

inputArray.forEach(stringA => {
    if (resultFound) return
    
    inputArray.forEach(stringB => {
        if (resultFound) return 

        inputArray.forEach(stringC => {
            if (parseInt(stringA) + parseInt(stringB) + parseInt(stringC) === 2020) {
                console.log(`Solution found: ${stringA}, ${stringB} and ${stringC}`)
                console.log(`Result = ${parseInt(stringA) * parseInt(stringB) * parseInt(stringC)}`)
                resultFound = true;
            }
        })
    })
});