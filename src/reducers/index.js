import resultReducer from './result';
import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';


const allReducers = combineReducers({
    form: reduxFormReducer,
    result: resultReducer,
    // in case we need more than one reducer 
})

export default allReducers;

