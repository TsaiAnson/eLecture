import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CourseSection from '../components/courses/CourseSection';
import CourseInfo from '../components/courses/CourseInfo';
import CourseCreateForm from '../components/courses/CourseCreateForm';

import { getCourses } from '../actions/courses';

class Courses extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getCourses);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <CourseSection courses={this.props.courses}/>}/>
                <Route exact path="/:courseId" component={CourseInfo}/>
                <Route exact path="/:courseId/edit" component={CourseCreateForm}/>
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
