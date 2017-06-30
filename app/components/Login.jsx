import React, { Component } from 'react';
import { Button, Col, Form, ControlLabel, FormGroup, FormControl, Modal, Radio } from 'react-bootstrap';
import { connect } from 'react-redux';

import { loginStudent } from '../actions/students';
import { loginInstructor } from '../actions/instructors';

class Login extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            isOpen: false,
            instructor: false,
            sid: '',
            username: '',
            email: '',
            password: ''
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
        const { instructor, sid, username, email, password } = this.state;
        if (instructor) {
            dispatch(loginInstructor(email, password));
        } else {
            dispatch(loginStudent(sid, username));
        }
    }

    render() {
        let content = null;
        if (this.state.instructor === true) {
            content = <div>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={4}>
                        Email
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={4}>
                        Password
                    </Col>
                    <Col sm={8}>
                        <FormControl type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
            </div>;
        } else if (this.state.instructor === false) {
            content = <div>
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
            </div>
        }

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
                                <Col sm={8} smOffset={4}>
                                    <Radio name="instructor" inline checked={this.state.instructor === true} onChange={() => {this.setState({instructor: true})}}>
                                        I'm an instructor
                                    </Radio>
                                    <Radio name="instructor" inline checked={this.state.instructor === false} onChange={() => {this.setState({instructor: false})}}>
                                        I'm a student
                                    </Radio>
                                </Col>
                            </FormGroup>
                            {content}
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
