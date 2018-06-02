import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Panel } from "react-bootstrap";

import LoginForm from "./LoginForm";

import { loginStudent } from "../../actions/students";
import { loginInstructor } from "../../actions/instructors";

class Login extends PureComponent {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(data) {
        const { dispatch } = this.props;
        const { instructor, sid, username, email, password } = data;
        if (instructor) {
            dispatch(loginInstructor(email, password));
        } else {
            dispatch(loginStudent(sid, username));
        }
    }

    render() {
        return (
            <Panel>
                <LoginForm login={this.login}/>
            </Panel>
        );
    }

}

export default connect()(Login);
