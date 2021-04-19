const resultReducer = (state = {
    presentValue: 0,
    interestRate: 0,
    period: 0
} , action) => {
    console.log('masuk result.js', action);
    switch(action.type){
        case 'CALCULATE':
            console.log('masuk CALCULATE');
            // return action.presentValue / (1 + action.interestRate)^action.years;
            return Object.assign({}, state, {result: action.presentValue / (1 + action.interestRate)^action.years});
        default:
            return state;
    }
}

export default resultReducer;