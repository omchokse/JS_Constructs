function getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(getRandomThreeDigitNumber());
}

console.log("Generated Random Numbers:", randomNumbers);

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;
    
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
        
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }
    
    return { secondLargest, secondSmallest };
}

let result = findSecondLargestAndSmallest(randomNumbers);
console.log("Second Largest (without sorting):", result.secondLargest);
console.log("Second Smallest (without sorting):", result.secondSmallest);

randomNumbers.sort((a, b) => a - b);
console.log("Sorted Array:", randomNumbers);

console.log("Second Smallest (sorted):", randomNumbers[1]);
console.log("Second Largest (sorted):", randomNumbers[randomNumbers.length - 2]);
