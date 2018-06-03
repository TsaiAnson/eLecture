import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

import SignUpForm from './SignUpForm';

import { createStudent } from '../../actions/students';
import { createInstructor } from '../../actions/instructors';

class SignUp extends PureComponent {

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
