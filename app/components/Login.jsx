import React, { Component } from 'react';
import { Button, Col, ControlLabel, Form, FormGroup, FormControl, Modal } from 'react-bootstrap';

class Login extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
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
                                    <FormControl type="text"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={4}>
                                    Username
                                </Col>
                                <Col sm={8}>
                                    <FormControl type="text"/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="info">Login</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default Login;
