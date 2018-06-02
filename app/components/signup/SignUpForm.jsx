import React, { PureComponent } from "react";
import { Button, Col, Form, FormGroup, ControlLabel, FormControl, Radio } from "react-bootstrap";

class SignUpForm extends PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);

        this.state = {
            instructor: false,
            course: "",
            sid: "",
            name: "",
            email: "",
            password: "",
        };
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    signUp() {
        this.props.signUp(this.state);
    }

    render() {
        let content = null;
        if (this.state.instructor) {
            content = <div>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={4}>
                        Name
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
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
                        Course Code
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text" name="course" value={this.state.course} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={4}>
                        Student ID
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text" name="sid" value={this.state.sid} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
            </div>;
        }

        return (
            <Form horizontal>
                <FormGroup>
                    <Col sm={8} smOffset={4}>
                        <Radio name="instructor" inline checked={this.state.instructor === true} onChange={() => {this.setState({ instructor: true })}}>
                            I"m an instructor
                        </Radio>
                        <Radio name="instructor" inline checked={this.state.instructor === false} onChange={() => {this.setState({ instructor: false })}}>
                            I"m a student
                        </Radio>
                    </Col>
                </FormGroup>
                {content}
                <FormGroup>
                    <Col sm={8} smOffset={4}>
                        <Button bsStyle="info" onClick={this.signUp}>Sign Up</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }

}

export default SignUpForm;
