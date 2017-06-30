import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Switch, Route } from 'react-router';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import SignUp from '../components/SignUp';

class Index extends Component {

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

export default Index;
