import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createBrowserHistory } from 'history';

import '../public/assets/css/app.css';

import Routes from './Routes';

import rootReducer from './reducers/app';

import promise from './api/promise';
import logger from './api/logger';

class App extends Component {

    constructor(props) {
        super(props);

        const browserHistory = createBrowserHistory();
        const middleware = [
            promise,
            process.env.NODE_ENV === 'development' && logger
        ].filter(Boolean);
        const store = createStore(rootReducer, compose(applyMiddleware(...middleware), autoRehydrate()));

        this.state = {browserHistory: browserHistory, store: store, rehydrated: false};
    }

    componentWillMount(){
        persistStore(this.state.store, {}, () => {
            this.setState({rehydrated: true});
        });
    }


    render() {
        if (this.state.rehydrated) {
            return (
                <Provider store={this.state.store}>
                    <Router history={this.state.browserHistory}>
                        <Routes/>
                    </Router>
                </Provider>
            );
        } else {
            return null;
        }
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
