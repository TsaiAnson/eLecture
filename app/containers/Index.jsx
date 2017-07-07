import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import SignUp from '../components/SignUp';

class Index extends Component {

    componentWillUpdate(props) {
        if (props.authenticated) {
            props.history.push('/app');
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Grid>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/signup" component={SignUp}/>
                    </Switch>
                </Grid>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated
    }
}

export default connect(mapStateToProps)(Index);
