import React, {Component} from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class CoursesList extends Component {

    render() {
        return (
            <Row>
                {this.prop.courses.map(function (course, index) {
                    return(
                        <Col md={4}>
                            <Button bsClass="btn btn-outline-info"> {course.name} </Button>
                        </Col>
                    );
                })}
            </Row>
        );
    }
}

export default CoursesList;
