import React, { Component } from 'react';
import { Navbar as NavBar } from 'react-bootstrap';

import Login from './Login';

class Navbar extends Component {

    render() {
        return (
            <NavBar>
                <NavBar.Header>
                    <NavBar.Brand>
                        <a href="/">eLecture</a>
                    </NavBar.Brand>
                </NavBar.Header>
                <NavBar.Collapse>
                    <NavBar.Form pullRight>
                        <Login/>
                    </NavBar.Form>
                </NavBar.Collapse>
            </NavBar>
        );
    }

}

export default Navbar;
