/*
    byr (Birth Year) - four digits; at least 1920 and at most 2002.
    iyr (Issue Year) - four digits; at least 2010 and at most 2020.
    eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
    hgt (Height) - a number followed by either cm or in:
        If cm, the number must be at least 150 and at most 193.
        If in, the number must be at least 59 and at most 76.
    hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    pid (Passport ID) - a nine-digit number, including leading zeroes.
    cid (Country ID) - ignored, missing or not.
*/

const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
const passports = input.split("\n\n")
const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

function validatePassports() {
    const fieldRules = {
        byr: /^(19[2-9]\d)|(200[0-2])$/,
        iyr: /^(20[1]\d|2020)$/,
        eyr: /^(20[2]\d|2030)$/,
        hgt: /(^[1]([5-8]\d|9[0-3])cm$)|(^([5-6]\d|7[0-6])in$)/,
        hcl: /^#[a-f\d]{6}$/,
        ecl: /^(amb|blu|brn|gry|grn|hzl|oth)$/,
        pid: /^\d{9}$/
    }

    return passports.filter(passport => {
        const fields = passport.split(/[\s]/).map(x => x.split(':'))
        const fieldMap = new Map(fields)

        // check required fields are present
        if (!required.every(x => fieldMap.has(x))) return false

        // validate fields
        return fields.every(([key, value]) => value.match(fieldRules[key]))
    }).length
}

console.log(`Found ${validatePassports()} valid passports`)