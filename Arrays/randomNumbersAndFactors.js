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

function primeFactorization(n) {
    let factors = [];
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 2) {
        factors.push(n);
    }
    return factors;
}

let numberToFactorize = randomNumbers[0];
let primeFactors = primeFactorization(numberToFactorize);
console.log(`Prime Factors of ${numberToFactorize}:`, primeFactors);
