import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import '../public/assets/css/app.css';

import Routes from './Routes';

import rootReducer from './reducers/app';

import promise from './api/promise';
import logger from './api/logger';

class App extends Component {

    render() {
        const history = createBrowserHistory();
        const middleware = [
            promise,
            routerMiddleware(history),
            process.env.NODE_ENV === 'development' && logger,
        ].filter(Boolean);
        const store = createStore(rootReducer, applyMiddleware(...middleware));

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
