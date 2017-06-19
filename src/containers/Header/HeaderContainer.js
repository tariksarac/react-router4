import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import HeaderView from './HeaderView'

const mapStateToProps = (state) => {
    const { isAuthenticated, profile, error } = state;
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const HeaderContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderView))

export default HeaderContainer