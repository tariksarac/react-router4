import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HeaderContainer from '../Header/HeaderContainer'
import HomePage from '../../components/HomePage/HomePage'
import RegisterPage from '../../components/RegisterPage/RegisterPage'
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage'
import LoginPage from '../../components/LoginPage/LoginPage'
import LogoutPage from '../../components/LoginPage/LogoutPage'


class App extends React.Component {

    render() {

        return(
            <div>
                <HeaderContainer />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/logout" component={LogoutPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        )
    }
}

export default App
