import React, { Component } from 'react';

import Login from './Login';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <a className="navbar-brand mr-auto" href="/">eLecture</a>
                        <Login/>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Navbar;
