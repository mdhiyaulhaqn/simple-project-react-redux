export const calculate = (futureValue, interestRate,  years) => {
    return {
        type: 'calculate',
        futureValue: futureValue,
        interestRate: interestRate,
        years: years
    }
}