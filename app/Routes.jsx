import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

import App from './containers/App';
import Index from './containers/Index';
import NotFound from './containers/NotFound';
import SignUp from './components/SignUp';

class Routes extends Component {

    constructor(props) {
        super(props);
        this.requireAuth = this.requireAuth.bind(this);
    }

    requireAuth(component) {
        // if (this.props.authenticated) {
            return component;
        // }
        // return <Redirect to="/"/>;
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/signup" component={Index}/>
                <Route path="/app" render={() => this.requireAuth(<App/>)}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }

}

function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated
    }
}

export default connect(mapStateToProps)(Routes);
