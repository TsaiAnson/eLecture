import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router";

import App from "./containers/App";
import Index from "./containers/Index";

class Routes extends PureComponent {

    constructor(props) {
        super(props);
        this.requireAuth = this.requireAuth.bind(this);
        this.checkAuth = this.checkAuth.bind(this);
    }

    requireAuth(component) {
        if (this.props.authenticated) {
            return component;
        }
        return <Redirect to={{ pathname: "/login", state: { from: this.props.location } }}/>;
    }

    checkAuth(component) {
        if (this.props.authenticated) {
            const { from } = this.props.location.state || { from: { pathname: "/app" }};
            return <Redirect to={from}/>;
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
                <Route component={Index}/>
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
