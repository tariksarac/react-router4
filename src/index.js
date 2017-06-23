import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'

import configureStore from './store/configureStore'
import AppContainer from './containers/App/AppContainer'
import { AUTH_USER } from './actions/types/index';


const store = configureStore();

const user = JSON.parse(sessionStorage.getItem('user'));

if (user && user.token) {
    store.dispatch({ type: AUTH_USER });
}

render(
    <Provider store={store}>
        <Router>
            <AppContainer />
        </Router>
    </Provider>,
    document.getElementById('root')
)

