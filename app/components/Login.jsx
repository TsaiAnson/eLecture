import React, { Component } from 'react';
import { Button, Col, Form, ControlLabel, FormGroup, FormControl, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import { login } from '../actions/users';

class Login extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            isOpen: false,
            sid: '',
            username: ''
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    login() {
        const { dispatch } = this.props;
        const { sid, username } = this.state;
        dispatch(login(sid, username));
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
                        <Form horizontal>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={4}>
                                    Student ID
                                </Col>
                                <Col sm={8}>
                                    <FormControl type="text" name="sid" value={this.state.sid} onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={4}>
                                    Username
                                </Col>
                                <Col sm={8}>
                                    <FormControl type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="info" onClick={this.login}>Login</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default connect()(Login);
