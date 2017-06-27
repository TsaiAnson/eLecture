import React, { Component } from 'react';
import { Navbar as NavBar } from 'react-bootstrap';

import Login from './Login';

class Navbar extends Component {

    render() {
        return (
            <NavBar>
                <NavBar.Header>
                    <NavBar.Brand>
                        <a href="/" className="logo" style={{marginTop: '4px', fontSize: '28px'}}/>
                    </NavBar.Brand>
                    <NavBar.Toggle/>
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
