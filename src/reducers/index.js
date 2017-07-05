
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';
import resetPassword from './resetPasswordReducer';
import appReducer from './appsReducer';


const rootReducer = combineReducers({
    form,
    auth: authReducer,
    resetPass: resetPassword,
    apps: appReducer
    // add your other reducers here
});

export default rootReducer