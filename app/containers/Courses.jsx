import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import { getCourses } from '../../actions/courses';

import Navbar from '../components/Navbar';
import CourseList from '../components/courses/CourseList';
import CourseInfo from '../components/courses/CourseInfo';
import CourseCreateForm from '../components/courses/CourseCreateForm';

class Courses extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getCourses);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Grid>
                    <Switch>
                        <Route exact path="/" render={() => <CourseList courses = {this.props.courses}/>}/>
                        <Route exact path="/:courseId" component={CourseInfo}/>
                        <Route exact path="/:courseId/edit" component={CourseCreateForm}/>
                    </Switch>
                </Grid>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        courses: state.course.courses
    }
}

export default connect(mapStateToProps)(Courses);
