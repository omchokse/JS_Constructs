function findRepeatedDigitNumbers(start, end) {
    let repeatedNumbers = [];
    for (let i = start; i <= end; i++) {
        let numStr = i.toString();
        if (numStr.length === 2 && numStr[0] === numStr[1]) {
            repeatedNumbers.push(i);
        }
    }
    return repeatedNumbers;
}

let repeatedDigitsArray = findRepeatedDigitNumbers(0, 100);
console.log("Numbers with repeated digits:", repeatedDigitsArray);
