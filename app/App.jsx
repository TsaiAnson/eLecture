import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';

import '../public/assets/css/app.css';

import Routes from './Routes';

import rootReducer from './reducers/app';

import promise from './api/promise';
import logger from './api/logger';

class App extends Component {

    render() {
        const browserHistory = createBrowserHistory();
        const middleware = [
            promise,
            routerMiddleware(browserHistory),
            process.env.NODE_ENV === 'development' && logger
        ].filter(Boolean);
        const store = createStore(rootReducer, applyMiddleware(...middleware));
        const history = syncHistoryWithStore(browserHistory, store);

        return (
            <Provider store={store}>
                <Router history={history}>
                    <Routes/>
                </Router>
            </Provider>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
