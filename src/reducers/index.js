import resultReducer from './result';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    result: resultReducer,
    // in case we need more than one reducer 
})

export default allReducers;

