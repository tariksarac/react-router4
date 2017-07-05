import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../../components/LoginPage/LoginPage'
import LogoutPage from '../../components/LoginPage/LogoutPage'
import RegisterPage from '../../components/RegisterPage/RegisterPage'
import ResetPasswordVerify from '../../components/ResetPasswordVerify/ResetPasswordVerify'
import ResetPasswordPage from '../../components/ResetPasswordPage/ResetPasswordPage'
import ResetPasswordNew from '../../components/ResetPasswordNew/ResetPasswordNew'

class AuthenticationView extends React.Component {

    render() {
        return(
            <div>
                <Switch>
                    <Route exact path="/auth" component={LoginPage}/>
                    <Route path="/auth/logout" component={LogoutPage}/>
                    <Route path="/auth/register" component={RegisterPage}/>
                    <Route exact path="/auth/reset-password" component={ResetPasswordPage}/>
                    <Route path="/auth/reset-password/verify" component={ResetPasswordVerify} />
                    <Route path="/auth/reset-password/new" component={ResetPasswordNew} />
                </Switch>
            </div>
        )
    }
}

export default AuthenticationView



