import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div id="container">
                <p>Navbar goes here</p>
                <div id="content">{this.props.children}</div>
                <p>Footer goes here</p>
            </div>
        )
    }
}

export default App;
