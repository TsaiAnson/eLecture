import React, { PureComponent } from "react";
import { Navbar } from "react-bootstrap";

import LoginModal from "../login/LoginModal";

const logoStyle = {
    fontSize: "28px",
    marginTop: "4px",
};

class IndexNavbar extends PureComponent {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/" className="logo" style={logoStyle}/>
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
