import axios from 'axios'
import { API_URL } from '../config';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE, AUTH_USER, SIGNIN_FAILURE, UNAUTH_USER } from './types/index';
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { authError} from '../utils/helpers'


/**
 * Sign up
 */
export function signupUser(props) {
    return function (dispatch) {
        axios.post(`${API_URL}/signup`, props)
            .then(() => {
                dispatch({ type: SIGNUP_SUCCESS });
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
                sessionStorage.setItem('user', JSON.stringify(response.data));
                setAuthorizationToken(response.data.token);

                dispatch({ type: AUTH_USER });
            })
            .catch(() => dispatch(authError(SIGNIN_FAILURE, "Email or password isn't right")));
    }
}

/**
 * Sign out
 */
export function signoutUser() {
    sessionStorage.clear();
    return {
        type: UNAUTH_USER,
    }
}