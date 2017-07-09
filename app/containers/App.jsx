import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';

import Courses from './Courses';

class App extends Component {

    render() {
        return (
            <div>
                <p>Navbar</p>
                <Grid>
                    <div id="content">
                        <Switch>
                            <Route path="/courses" component={Courses}/>
                        </Switch>
                         <Link to="/app/courses">Yo</Link>
                    </div>
                    <p>Footer</p>
                </Grid>
            </div>
        );
    }

}

export default App;
