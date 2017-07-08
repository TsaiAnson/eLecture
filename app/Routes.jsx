import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';

import App from './containers/App';
import Index from './containers/Index';
import NotFound from './containers/NotFound';
import Courses from './containers/Courses';

class Routes extends Component {

    constructor(props) {
        super(props);
        this.requireAuth = this.requireAuth.bind(this);
        this.checkAuth = this.checkAuth.bind(this);
    }

    requireAuth(component) {
        if (this.props.authenticated) {
            return component;
        }
        // TODO: find cleaner alternative
        this.props.history.push('/login');
        return <Index/>;
    }

    checkAuth(component) {
        if (this.props.authenticated) {
            // TODO: find cleaner alternative
            this.props.history.push('/app');
            return <App/>;
        }
        return component;
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => this.checkAuth(<Index/>)}/>
                <Route exact path="/login" render={() => this.checkAuth(<Index/>)}/>
                <Route exact path="/signup" render={() => this.checkAuth(<Index/>)}/>
                <Route path="/app" render={() => this.requireAuth(<App/>)}/>
                <Route path="/courses" component={Courses}/>
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

export default withRouter(connect(mapStateToProps)(Routes));
