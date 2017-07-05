import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AppView from './AppView'

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated };
};

const AppContainer = withRouter(connect(mapStateToProps, null)(AppView));

export default AppContainer