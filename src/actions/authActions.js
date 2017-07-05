import axios from 'axios'
import { API_URL } from '../config';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE, AUTH_USER, SIGNIN_FAILURE, UNAUTH_USER, SIGNIN_PENDING, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, VERIFY_RESET_PASSWORD_SUCCESS, VERIFY_RESET_PASSWORD_FAILURE } from './types/index';
import setAuthorizationToken from '../utils/setAuthorizationToken'

/**
 * Sign up
 */
export function signupUser(props) {

    return async function (dispatch) {
        let url = `${API_URL}/signup`;

        try {
            await axios.post(url, props);
            dispatch(registrationSuccess());
        } catch (error) {
            dispatch(registrationFail());

        }
    }
}

export function registrationSuccess(){
    return {
        type: SIGNUP_SUCCESS
    }
}
export function registrationFail(){
    return {
        type: SIGNUP_FAILURE
    }
}

/**
 * Sign in
 */
export function signinUser(props) {

    return async function (dispatch) {
        let url = `${API_URL}/signin`;

        dispatch(authenticationPending());
        try {
            let response = await axios.post(url, { ...props });
            dispatch(authenticationSuccess(response));
        } catch (error) {
            dispatch(authenticationFailed());
        }
    }
}

export function authenticationSuccess(response) {
    sessionStorage.setItem('user', JSON.stringify(response.data));
    setAuthorizationToken(response.data.token);
    return {
        type: AUTH_USER
    };
}
export function authenticationFailed() {
    return {
        type: SIGNIN_FAILURE
    };
}

export function authenticationPending() {
    return {
        type: SIGNIN_PENDING
    };
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

/**
 * Reset password
 */
export function resetPassword(props) {

    return async function (dispatch) {
        const url = `${API_URL}/reset-password`;
        try {
            await axios.post(url, props)
            dispatch(resetPasswordSuccess())
        } catch (error) {
            dispatch(resetPasswordFailed())
        }
    }
}

export function resetPasswordSuccess() {
    return {
        type: RESET_PASSWORD_SUCCESS
    };
}

export function resetPasswordFailed() {
    return {
        type: RESET_PASSWORD_FAILURE
    };
}

/**
 * Verify Reset password
 */
export function verifyResetPassword(props) {

    return async function (dispatch) {
        const url = `${API_URL}/reset-password/verify`;
        try {
            await axios.post(url, props)
            dispatch(verifyResetPasswordSuccess())
        } catch (error) {
            dispatch(verifyResetPasswordFailed())

        }
    }
}

export function verifyResetPasswordSuccess() {
    return {
        type: VERIFY_RESET_PASSWORD_SUCCESS
    };
}

export function verifyResetPasswordFailed() {
    return {
        type: VERIFY_RESET_PASSWORD_FAILURE
    };
}

/**
 * Reset password new
 */
export function resetPasswordNew(props) {

    return async function (dispatch) {
        const url = `${API_URL}/reset-password/new`;
        try {
            let response = await axios.post(url, props);
            dispatch(resetPasswordNewSuccess(response))
        } catch (error) {
            dispatch(resetPasswordNewFailed())
        }
    }
}

export function resetPasswordNewSuccess(response) {
    sessionStorage.setItem('user', JSON.stringify(response.data));
    return {
        type: AUTH_USER
    };
}

export function resetPasswordNewFailed() {
    return {
        type: VERIFY_RESET_PASSWORD_FAILURE
    };
}



