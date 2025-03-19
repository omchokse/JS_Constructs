function generateBirthMonths(numIndividuals) {
    let birthMonthMap = {};
    
    for (let i = 1; i <= 12; i++) {
        birthMonthMap[i] = [];
    }
    
    for (let i = 1; i <= numIndividuals; i++) {
        let birthMonth = Math.floor(Math.random() * 12) + 1;
        birthMonthMap[birthMonth].push(`Person${i}`);
    }
    
    return birthMonthMap;
}

let birthMonthData = generateBirthMonths(50);
console.log("Individuals grouped by birth month:", birthMonthData);
