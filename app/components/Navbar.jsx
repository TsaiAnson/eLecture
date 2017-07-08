import React, { Component } from 'react';
import { Navbar as NavBar } from 'react-bootstrap';

import LoginModal from './login/LoginModal';

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
                        <LoginModal/>
                    </NavBar.Form>
                </NavBar.Collapse>
            </NavBar>
        );
    }

}

export default Navbar;
