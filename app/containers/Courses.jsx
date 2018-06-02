import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";

import Course from "../components/courses/Course";
import CourseSection from "../components/courses/CourseSection";

import { getCourses } from "../actions/courses";

class Courses extends PureComponent {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getCourses());
    }

    render() {
        return (
            <Switch>
                <Route exact path="/app/courses" render={() => <CourseSection courses={this.props.courses}/>}/>
                <Route path="/app/courses/:courseId" render={() => <Course courses={this.props.courses}/>}/>
            </Switch>
        );
    }

}

function mapStateToProps(state) {
    return {
        courses: state.course.courses,
    }
}

export default connect(mapStateToProps)(Courses);
