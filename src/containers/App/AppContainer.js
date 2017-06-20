import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AppView from './AppView'

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated };
};

const AppContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppView));

export default AppContainer