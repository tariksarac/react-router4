
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';
import resetPassword from './resetPasswordReducer';


const rootReducer = combineReducers({
    form,
    auth: authReducer,
    resetPass: resetPassword
    // add your other reducers here
});

export default rootReducer