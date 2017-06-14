import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import App from './containers/App';
import Index from './containers/Index';
import NotFound from './containers/NotFound';

class Routes extends Component {

    requireAuth() {
        return true;
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/app" component={App} onEnter={this.requireAuth}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }

}

export default Routes;
