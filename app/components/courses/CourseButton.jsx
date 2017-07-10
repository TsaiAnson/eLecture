import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CourseButton extends Component {

    render() {
        const { course } = this.props;
        return (
            <Button bsClass="btn btn-info" href={'/app/courses/' + course._id}>
                <div><h4>{course.number}</h4></div>
                <div>{course.name}</div>
            </Button>
        );
    }

}

export default CourseButton;
