const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
const passports = input.split("\n\n")
const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

function validatePassports() {
    return passports.filter(passport => {
        const fields = new Set(passport.split(/[\s]/).map(x => x.split(':')[0]))
        return required.every(x => fields.has(x))
    }).length
}

console.log(`Found ${validatePassports()} valid passports`)