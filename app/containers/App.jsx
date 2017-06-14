import React, { Component } from 'react';
import { Route } from 'react-router';

class App extends Component {

    render() {
        return (
            <div id="container">
                <p>Navbar</p>
                <div id="content">
                    <p>Routes</p>
                </div>
                <p>Footer</p>
            </div>
        );
    }

}

export default App;
