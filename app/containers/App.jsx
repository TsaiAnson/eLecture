import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Switch, Route } from 'react-router';

import Courses from './Courses';

class App extends Component {

    render() {
        return (
            <div>
                <p>Navbar</p>
                <Grid>
                    <Switch>
                        <Route path="/app/courses" component={Courses}/>
                    </Switch>
                    <p>Footer</p>
                </Grid>
            </div>
        );
    }

}

export default App;
