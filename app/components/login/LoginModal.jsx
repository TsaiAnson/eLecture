import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';

import { loginStudent } from '../../actions/students';
import { loginInstructor } from '../../actions/instructors';

class LoginModal extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
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
            <div>
                <Button bsStyle="info" onClick={this.toggle}>Login</Button>
                <Modal show={this.state.isOpen} onHide={this.toggle}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LoginForm login={this.login}/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

}

export default connect()(LoginModal);
