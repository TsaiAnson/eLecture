import React, { Component } from 'react';
import { Grid, Col, Form, FormGroup, ControlLabel, FormControl, Radio } from 'react-bootstrap';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            instructor: undefined
        };
    }

    render() {
        let content = null;
        if (this.state.instructor === true) {
            content = <div>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={4}>
                        Name
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text"/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={4}>
                        Email
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text"/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={4}>
                        Password
                    </Col>
                    <Col sm={8}>
                        <FormControl type="password"/>
                    </Col>
                </FormGroup>
            </div>;
        } else if (this.state.instructor === false) {
            content = <div>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={4}>
                        Course Code
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text"/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={4}>
                        Student ID
                    </Col>
                    <Col sm={8}>
                        <FormControl type="text"/>
                    </Col>
                </FormGroup>
            </div>;
        }

        return (
            <Grid>
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
            </Grid>
        );
    }

}

export default SignUp;
