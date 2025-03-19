function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function trackDieRolls() {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRoll = 10;
    let maxReached = false;

    while (!maxReached) {
        let roll = rollDie();
        rollCounts[roll]++;

        if (rollCounts[roll] === maxRoll) {
            maxReached = true;
        }
    }

    let maxNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
    let minNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

    return { rollCounts, maxNumber, minNumber };
}

let result = trackDieRolls();
console.log("Roll Counts:", result.rollCounts);
console.log("Number that reached 10 times first:", result.maxNumber);
console.log("Number that appeared the least:", result.minNumber);
