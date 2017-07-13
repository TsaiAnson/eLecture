import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router';

import AppNavbar from '../components/navbar/AppNavbar';
import Courses from './Courses';

class App extends Component {

    render() {
        return (
            <div>
                <AppNavbar/>
                <Grid>
                    <Switch>
                        <Route path="/app/courses" component={Courses}/>
                        <Route path="/app" render={() => <Redirect to="/app/courses"/>}/>
                    </Switch>
                </Grid>
            </div>
        );
    }

}

export default App;
