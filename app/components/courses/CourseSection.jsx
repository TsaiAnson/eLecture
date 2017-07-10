import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CourseButton from './CourseButton';

class CourseSection extends Component {

    render() {
        return (
            <div>
                <h2>Courses</h2>
                <Row>
                    {this.props.courses.map(function (course, index) {
                        return (
                            <Col key={index} lg={3} md={4} sm={6}>
                                <CourseButton course={course}/>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        );
    }
}

export default CourseSection;
