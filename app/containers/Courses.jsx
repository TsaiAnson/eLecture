import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import CourseSection from '../components/courses/CourseSection';
import CourseInfo from '../components/courses/CourseInfo';
import CourseForm from '../components/courses/CourseForm';

import { getCourses } from '../actions/courses';

class Courses extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getCourses());
    }

    render() {
        return (
            <Switch>
                <Route exact path="/app/courses" render={() => <CourseSection courses={this.props.courses}/>}/>
                <Route exact path="/app/courses/:courseId" render={() => <CourseInfo courses={this.props.courses}/>}/>
                <Route exact path="/app/courses/:courseId/edit" render={() => <CourseForm courses={this.props.courses}/>}/>
            </Switch>
        );
    }

}

function mapStateToProps(state) {
    return {
        courses: state.course.courses
    }
}

export default connect(mapStateToProps)(Courses);
