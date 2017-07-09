import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';

import '../public/assets/css/app.css';

import Routes from './Routes';

import rootReducer from './reducers/app';

import promise from './api/promise';
import logger from './api/logger';

class App extends Component {

    render() {
        const middleware = [
            promise,
            process.env.NODE_ENV === 'development' && logger
        ].filter(Boolean);
        const store = createStore(rootReducer, applyMiddleware(...middleware));

        return (
            <Provider store={store}>
                <Router history={createBrowserHistory()}>
                    <Routes/>
                </Router>
            </Provider>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
