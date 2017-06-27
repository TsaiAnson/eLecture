import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Route } from 'react-router';

class App extends Component {

    render() {
        return (
            <Grid>
                <p>Navbar</p>
                <div id="content">
                    <p>Routes</p>
                </div>
                <p>Footer</p>
            </Grid>
        );
    }

}

export default App;
