import axios from 'axios';
import { signinUser,signupUser, signoutUser, resetPassword, verifyResetPassword, resetPasswordNew } from '../../../actions/authActions';
import  {AUTH_USER, SIGNIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE, UNAUTH_USER, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, VERIFY_RESET_PASSWORD_SUCCESS, VERIFY_RESET_PASSWORD_FAILURE } from '../../../actions/types/index';

describe('User authentication', () => {

    beforeEach(()=>{
        global.sessionStorage = jest.genMockFunction();
        global.sessionStorage.setItem = jest.genMockFunction();
        global.sessionStorage.clear = jest.genMockFunction();
    });

    it('Sign up successful, creates SIGNUP_SUCCESS',  async () => {

        // prepare
        const expected = [
            { type: SIGNUP_SUCCESS }
        ];

        // mock the axios.post method, so it will just resolve the Promise.
        axios.post = jest.fn(() => {
            return Promise.resolve();
        });

        // mock the dispatch
        const dispatch = jest.fn();

        // execute
        let prop = {
            firstName: 'tarik',
            lastName: 'sarac',
            email: 'tarik.sarac@symphony.is',
            password: 'Symphony1',
            repassword: 'Symphony1'
        };
        await signupUser(prop)(dispatch);

        // verify
        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    });

    it('Sign up fail, creates SIGNUP_FAILURE',  async () => {

        // prepare
        const expected = [
            { type: SIGNUP_FAILURE }
        ];

        // mock the axios.post method, so it will just reject the Promise.
        axios.post = jest.fn(() => {
            return Promise.reject();
        });

        // mock the dispatch
        const dispatch = jest.fn();

        // execute
        let prop = {
            firstName: 'tarik',
            lastName: 'sarac',
            email: 'tarik.sarac@symphony.is',
            password: 'Symphony1',
            repassword: 'Symphony1'
        };
        await signupUser(prop)(dispatch);

        // verify
        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    });

    it('Login successful, creates AUTH_USER',  async () => {

        // prepare
        const expected = [
            {type: AUTH_USER}
        ];

        // mock the axios.post method, so it will just resolve the Promise.
        axios.post = jest.fn(() => {
            return Promise.resolve({data:{token:'sdfsdfsdfsd'}});
        });

        // mock the dispatch
        const dispatch = jest.fn();

        // execute
        let prop = {email:'tarik.sarac@gmail.com', password: 'Symphony1'};
        await signinUser(prop)(dispatch);

        // verify
        expect(dispatch.mock.calls[1][0]).toEqual(expected[0]);
    });

    it('Login fail, creates SIGNIN_FAILURE',  async () => {

        // prepare
        const expected = [
            {type: SIGNIN_FAILURE}
        ];

        // mock the axios.post method, so it will just reject the Promise.
        axios.post = jest.fn(() => {
            return Promise.reject('Email or password isn\'t right');
        });

        // mock the dispatch
        const dispatch = jest.fn();

        // execute
        let prop = {email:'tarik.sarac@gmail.com', password: 'Symphony1'};
        await signinUser(prop)(dispatch);

        // verify
        expect(dispatch.mock.calls[1][0]).toEqual(expected[0]);
    });

    it('Log out, creates UNAUTH_USER', () => {

        // prepare
        const expected = [
            {type: UNAUTH_USER}
        ];

        // verify
        expect(signoutUser()).toEqual(expected[0]);
    });

    it('Reset password, creates RESET_PASSWORD_SUCCESS',  async () => {

        // prepare
        const expected = [
            {type: RESET_PASSWORD_SUCCESS}
        ];

        // mock the axios.post method, so it will just resolve the Promise.
        axios.post = jest.fn(() => {
            return Promise.resolve();
        });

        // mock the dispatch
        const dispatch = jest.fn();

        // execute
        let prop = {email:'tarik.sarac@gmail.com'};
        await resetPassword(prop)(dispatch);

        // verify
        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    });

    it('Reset password failed, creates RESET_PASSWORD_FAILURE',  async () => {

        // prepare
        const expected = [
            {type: RESET_PASSWORD_FAILURE}
        ];

        // mock the axios.post method, so it will just reject the Promise.
        axios.post = jest.fn(() => {
            return Promise.reject();
        });

        // mock the dispatch
        const dispatch = jest.fn();

        // execute
        let prop = {email:'tarik.sarac@gmail.com'};
        await resetPassword(prop)(dispatch);

        // verify
        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    });

    it('Verify reset password, creates VERIFY_RESET_PASSWORD_SUCCESS',  async () => {

        // prepare
        const expected = [
            {type: VERIFY_RESET_PASSWORD_SUCCESS}
        ];

        // mock the axios.post method, so it will just resolve the Promise.
        axios.post = jest.fn(() => {
            return Promise.resolve();
        });

        // mock the dispatch
        const dispatch = jest.fn();

        // execute
        let prop = {email:'tarik.sarac@gmail.com', token:'adsd.dasdsa.dadsad'};
        await verifyResetPassword(prop)(dispatch);

        // verify
        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    });

    it('Verify reset password failed, creates VERIFY_RESET_PASSWORD_FAILURE',  async () => {

        // prepare
        const expected = [
            {type: VERIFY_RESET_PASSWORD_FAILURE}
        ];

        // mock the axios.post method, so it will just reject the Promise.
        axios.post = jest.fn(() => {
            return Promise.reject();
        });

        // mock the dispatch
        const dispatch = jest.fn();

        // execute
        let prop = {email:'tarik.sarac@gmail.com', token:'adsd.dasdsa.dadsad'};
        await verifyResetPassword(prop)(dispatch);

        // verify
        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    });

    it('Verify new password, creates AUTH_USER',  async () => {

        // prepare
        const expected = [
            {type: AUTH_USER}
        ];

        // mock the axios.post method, so it will just resolve the Promise.
        axios.post = jest.fn(() => {
            return Promise.resolve({data:{token:'sdfsdfsdfsd'}});
        });

        // mock the dispatch
        const dispatch = jest.fn();

        // execute
        let prop = { newpassword:'Symphony2', renewpassword:'Symphony2' };
        await resetPasswordNew(prop)(dispatch);

        // verify
        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    });

    it('VVerify new password failed, creates VERIFY_RESET_PASSWORD_FAILURE',  async () => {

        // prepare
        const expected = [
            {type: VERIFY_RESET_PASSWORD_FAILURE}
        ];

        // mock the axios.post method, so it will just reject the Promise.
        axios.post = jest.fn(() => {
            return Promise.reject();
        });

        // mock the dispatch
        const dispatch = jest.fn();

        // execute
        let prop = { newpassword:'Symphony2', renewpassword:'Symphony2' };
        await resetPasswordNew(prop)(dispatch);

        // verify
        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    });
});
