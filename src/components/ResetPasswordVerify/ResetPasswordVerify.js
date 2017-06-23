import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/resetPassword';
import queryString from 'query-string'

// const queryString = require('query-string');

class ResetPasswordVerify extends Component {
    constructor(props) {
        super(props);

        this.state = { resend: false };
    }

    componentWillMount() {
        this.email = queryString.parse(this.props.location.search)

        // if(!this.props.resetPasswordProgress || !this.email.email) {
        //     console.log(this.props.resetPasswordProgress)
        //     console.log(this.email.email)
        //
        //     this.props.history.push('/login');
        // }
    }

    resendEmail(props) {
        this.setState({ resend: true });
        this.props.resetPassword(props);
    }

    render() {
        return (
            <div className="content">
                <h1>Reset Password</h1>
                <h3>We've just emailed you password reset instructions at <u>{ this.email && this.email.email }</u></h3>
                {
                    !this.state.resend ?
                        <p className="resend" onClick={this.resendEmail.bind(this, { email: this.email.email })}>Resend instructions</p> :
                        <p className="resended">Reset password instructions has been resended</p>
                }
                {
                    this.props.errorMessage && this.props.errorMessage.resetPassword &&
                    <div className="error-container">{ this.props.errorMessage.resetPassword }</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        resetPasswordProgress: state.resetPass.resetPassword,
        errorMessage: state.resetPass.error };
}

export default connect(mapStateToProps, actions)(ResetPasswordVerify);