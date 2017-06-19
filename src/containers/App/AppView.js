import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import HeaderContainer from '../Header/HeaderContainer'
import HomePage from '../../components/HomePage/HomePage'
import RegisterPage from '../../components/RegisterPage/RegisterPage'
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage'

class App extends React.Component {

    componentWillMount() {

    }

    render() {

        return(
            <div>
                <HeaderContainer />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        )
    }
}

App.propTypes = {
    // history: PropTypes.shape({
    //     push: PropTypes.func.isRequired,
    // }).isRequired,
    // loginSuccess: PropTypes.func.isRequired,
    // loginError: PropTypes.func.isRequired
}

export default App
