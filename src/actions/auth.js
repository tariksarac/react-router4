import axios from 'axios'
import { API_URL } from '../config';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE, AUTH_USER, SIGNIN_FAILURE, UNAUTH_USER } from './types/index';

/**
 * Error helper
 */
export function authError(CONST, error) {
    return {
        type: CONST,
        payload: error,
    };
}
/**
 * Sign up
 */
export function signupUser(props) {
    return function (dispatch) {
        axios.post(`${API_URL}/signup`, props)
            .then(() => {
                dispatch({ type: SIGNUP_SUCCESS });

                // browserHistory.push(`/reduxauth/signup/verify-email?email=${props.email}`);
            })
            .catch(response => dispatch(authError(SIGNUP_FAILURE, response.data.error)));
    }
}

/**
 * Sign in
 */
export function signinUser(props) {
    const { email, password } = props;

    return function (dispatch) {
        axios.post(`${API_URL}/signin`, { email, password })
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));

                dispatch({ type: AUTH_USER });

                // browserHistory.push('/reduxauth/users');
            })
            .catch(() => dispatch(authError(SIGNIN_FAILURE, "Email or password isn't right")));
    }
}

/**
 * Sign out
 */
export function signoutUser() {
    localStorage.clear();

    return {
        type: UNAUTH_USER,
    }
}