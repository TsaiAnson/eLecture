import React, { Component } from 'react';
import { withRouter } from 'react-router';

class CourseInfo extends Component {

    render() {
        const course  = this.props.courses.find(course => course._id === this.props.match.params.courseId);
        return (
            course ? <div>
                <h2>{course.number}: {course.name}</h2>
            </div>
                : <h2>Invalid course.</h2>
        );
    }

}

export default withRouter(CourseInfo);
