import React, { PureComponent } from "react";
import { MenuItem, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";

import { logout } from "../../actions/users";

const logoStyle = {
    fontSize: "28px",
    marginTop: "4px",
};

class AppNavbar extends PureComponent {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        const { dispatch } = this.props;
        dispatch(logout());
    }

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
                    <Nav pullRight>
                        <NavDropdown title={this.props.instructor ? this.props.name : this.props.username} id="user-dropdown">
                            <MenuItem onSelect={this.logout}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

function mapStateToProps(state) {
    return {
        instructor: state.user.instructor,
        username: state.student.username,
        name: state.instructor.name,
    }
}

export default connect(mapStateToProps)(AppNavbar);
