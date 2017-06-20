import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';


class LogoutPage extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }
    render() {
        return <div className="content">We hope to see you again soon...</div>
    }
}

LogoutPage.propTypes = {};
LogoutPage.defaultProps = {};

export default connect(null, actions)(LogoutPage);