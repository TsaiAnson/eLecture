import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';

class CourseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {course: props.course};
    }

    save() {
        this.props.save(this.state.course);
    }

    cancel() {
        this.props.cancel();
    }

    handleChange(field, value) {
        let course = this.state.course;
        course[field] = value;
        this.setState({course: course});
    }

    render() {
        return <Form>
            Hello World!
        </Form>
    }
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    teachers: PropTypes.array.isRequired,
    students: PropTypes.array.isRequired,
    save: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired
};

export default CourseForm;
