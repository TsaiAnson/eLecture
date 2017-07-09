import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Switch, Route } from 'react-router';

import CourseList from '../components/courses/CourseList';

class App extends Component {

    render() {
        return (
            <div>
                <p>Navbar</p>
                <Grid>
                    <div id="content">
                        <Switch>
                            <Route path="/courses" component={CourseList} />
                        </Switch>
                         {/*<Link to="/app/courses"> Yo </Link>*/}
                    </div>
                    <p>Footer</p>
                </Grid>
            </div>
        );
    }

}

export default App;
