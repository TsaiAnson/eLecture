import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';

import { createStudent } from '../../actions/students';
import { createInstructor } from '../../actions/instructors';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
    }

    signUp(data) {
        const { dispatch } = this.props;
        const { instructor, course, sid, name, email, password } = data;
        if (instructor) {
            dispatch(createInstructor(name, email, password));
        } else {
            dispatch(createStudent(course, sid));
        }
    }

    render() {
        return (
            <Panel>
                <SignUpForm signUp={this.signUp}/>
            </Panel>
        );
    }

}

export default connect()(SignUp);
