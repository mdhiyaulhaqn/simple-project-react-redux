const resultReducer = (state = 0 , action) => {
    switch(action.type){
        case 'calculate':
            return action.presentValue / (1 + action.interestRate)^action.years;
        default:
            return state;
    }
}

export default resultReducer;