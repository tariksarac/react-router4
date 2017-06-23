import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/auth';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
    <div className={`input-group ${touched && error ? 'has-error' : ''}`}>
        <input type={type} placeholder={placeholder} {...input} />
        { touched && error && <div className="form-error">{error}</div> }
    </div>
);

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth===true){
            this.props.history.push('/')
        }
    }

    handleFormSubmit(props) {
        this.props.signinUser(props);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="form-container">
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>

                    {/* Email */}
                    <Field name="email" component={renderField} type="text" placeholder="Email" />

                    {/* Password */}
                    <Field name="password" component={renderField} type="password" placeholder="Password" />

                    {/* Forgot password */}
                    <div className="password-forgot">
                        <Link to="/reset-password">I forgot my password</Link>
                    </div>

                    {/* Server error message */}
                    { this.props.errorMessage && this.props.errorMessage.signin &&
                    <div className="error-container signin-error">Oops! { this.props.errorMessage.signin }</div> }

                    {/* Signin button */}
                    <button type="submit" className="btn">Sign in</button>

                    {/* Signup button */}
                    <div className="form-bottom">
                        <p>Don't have an account?</p>
                        <Link to="/register">Click here to sign up</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if(!formProps.email) {
        errors.email = 'Email is required'
    }

    if(!formProps.password) {
        errors.password = 'Password is required'
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        auth: state.auth.authenticated
    }
}

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

LoginPage = reduxForm({ form: 'signin', validate })(LoginPage);
export default connect(mapStateToProps, actions)(LoginPage);
