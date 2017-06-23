import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HeaderContainer from '../Header/HeaderContainer'
import HomePage from '../../components/HomePage/HomePage'
import RegisterPage from '../../components/RegisterPage/RegisterPage'
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage'
import LoginPage from '../../components/LoginPage/LoginPage'
import LogoutPage from '../../components/LoginPage/LogoutPage'
import ResetPasswordPage from '../../components/ResetPasswordPage/ResetPasswordPage'
import ResetPasswordVerify from '../../components/ResetPasswordVerify/ResetPasswordVerify'
import ResetPasswordNew from '../../components/ResetPasswordNew/ResetPasswordNew'


//High order component for handling protected routes
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        rest.auth ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

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
                    <Route exact path="/reset-password" component={ResetPasswordPage}/>
                    <Route path="/reset-password/verify" component={ResetPasswordVerify} />
                    <Route path="/reset-password/new" component={ResetPasswordNew} />
                    <PrivateRoute path="/protected" component={HomePage} auth={this.props.authenticated}/>
                    <Route exact path="/logout/test" component={HomePage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        )
    }
}

export default App


