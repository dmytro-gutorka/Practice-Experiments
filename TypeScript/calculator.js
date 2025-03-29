"use strict";
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return 'Initial investment amount must be at least zero';
    }
    if (duration < 0) {
        return 'No valid amount of years provided';
    }
    if (expectedReturn < 0) {
        return 'Expected return must be at least zero';
    }
    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
    }
    return annualResults;
}
function printResult() {
}
function calculateInvestments() {
}
