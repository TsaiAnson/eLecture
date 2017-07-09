import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CourseButton extends Component {

    render() {
        const { course } = this.props;
        return (
            <Button bsClass="btn btn-outline-info" href={'/app/courses/' + course._id}>{course.name}</Button>
        );
    }

}

export default CourseButton;
