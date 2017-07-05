import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AuthenticationView from './AuthenticationView'

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const AuthenticationContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthenticationView))

export default AuthenticationContainer