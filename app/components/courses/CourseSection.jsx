import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CourseButton from './CourseButton';

class CourseSection extends Component {

    render() {
        return (
            <Row>
                {this.prop.courses.map(function (course, index) {
                    return (
                        <Col key={index} lg={3} md={4} sm={6}>
                            <CourseButton course={course}/>
                        </Col>
                    );
                })}
            </Row>
        );
    }
}

export default CourseSection;
