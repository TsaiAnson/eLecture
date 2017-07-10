import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import LoginModal from '../login/LoginModal';

class IndexNavbar extends Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/" className="logo" style={{marginTop: '4px', fontSize: '28px'}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <LoginModal/>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default IndexNavbar;
