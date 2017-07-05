import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getApps } from '../../actions/appActions'
import { bindActionCreators } from 'redux'

import HomeView from './HomeView'

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
        apps: state.apps.apps
    };
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getApps }, dispatch)
}

const HomeContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView));

export default HomeContainer