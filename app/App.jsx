import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import '../public/assets/css/app.css';

import Routes from './Routes';

class App extends Component {

    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Routes/>
            </Router>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
