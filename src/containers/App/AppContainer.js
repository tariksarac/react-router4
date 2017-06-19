import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AppView from './AppView'

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const AppContainer = withRouter(connect(
    null, // no mapStateToProps
    mapDispatchToProps
)(AppView));

export default AppContainer