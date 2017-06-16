import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'

import configureStore from './store/configureStore'
import AppContainer from './containers/App/AppContainer'

const store = configureStore();

{/*The main container for app*/}

render(
    <Provider store={store}>
        <Router>
            <AppContainer />
        </Router>
    </Provider>,
    document.getElementById('root')
)

