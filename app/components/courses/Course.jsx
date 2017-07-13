import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';

import CourseForm from '../../components/courses/CourseForm';
import Lecture from '../../components/lectures/lecture';

class Course extends Component {

    render() {
        const course = this.props.courses.find(course => course._id === this.props.match.params.courseId);
        return (
            course ? <div>
                <h2>{course.number}: {course.name}</h2>
                <Switch>
                    <Route exact path="/app/courses/:courseId/edit" render={() => <CourseForm courses={this.props.courses}/>}/>
                    <Route path="/app/courses/:courseId/:lectureId" component={Lecture}/>
                    {/*<Route component={Lectures}/>*/}
                </Switch>
            </div>
                : <h2>Invalid course.</h2>
        );
    }

}

export default withRouter(Course);
