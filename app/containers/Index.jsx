import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Switch, Route } from 'react-router';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Login from '../components/login/Login';
import SignUp from '../components/signup/SignUp';

class Index extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Grid>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={SignUp}/>
                    </Switch>
                </Grid>
            </div>
        );
    }

}

export default Index;
