
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    form,
    auth: authReducer
    // add your other reducers here
})

export default rootReducer