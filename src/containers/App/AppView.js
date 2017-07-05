import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HeaderContainer from '../Header/HeaderContainer'
import HomeContainer from '../Home/HomeContainer'
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage'
import Authentication from '../../containers/Authentication/AuthenticationContainer'
import Register from '../../components/RegisterPage/RegisterPage'


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
                    <Route exact path="/" component={Register}/>
                    <Route path="/auth" component={Authentication}/>
                    <PrivateRoute path="/protected" component={HomeContainer} auth={this.props.authenticated}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        )
    }
}

export default App


