import React, { Component } from 'react';
import { Button, Col, Form, ControlLabel, FormGroup, FormControl, Radio } from 'react-bootstrap';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            instructor: false,
            sid: '',
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    login() {
        this.props.login(this.state);
    }

    render() {
        let content = null;
        if (this.state.instructor) {
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
        } else {
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
                    <FormGroup>
                        <Col sm={8} smOffset={4}>
                            <Button bsStyle="info" onClick={this.login}>Login</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }

}

export default LoginForm;