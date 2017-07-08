import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import CourseForm from 'components/courses/CourseForm';
import CourseSelect from 'components/courses/CourseSelect';
import {
    fetchCourses,
    addCourse
} from '../actions/courses';

class Courses extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatch } = this.props;

        dispatch(fetchCourses());
    }

    add() {
        const { dispatch, schoolId } = this.props;
        dispatch(addCourse());
    }

    edit() {
        const { dispatch } = this.props;
        dispatch(editCourse());
    }

    save() {
        const { dispatch, draft } = this.props;
        if (draft._id) {
            dispatch(updateCourse(draft));
        } else dispatch(createCourse(draft));
    }

    cancel() {
        const { dispatch } = this.props;
        dispatch(cancelCourse());
    }

    destroy() {
        const { dispatch, current } = this.props;
        dispatch(destroyCourse(current._id));
    }

    render() {
        const { courses, draft, isEditing } = this.props;
        if (isEditing) {
            return <CourseForm course={draft}
                               students={students}
                               teachers={teachers}
                               save={this.save}
                               cancel={this.cancel}/>
        } else {
            return <CourseSelect courses={courses}
                                 onAdd={this.add}
                                 onEdit={this.edit}
                                 onDestroy={this.destroy}
                                 onSelect={this.select}/>
        }
    }
}

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    draft: PropTypes.object,
    isEditing: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        draft: state.course.draft,
        isEditing: state.course.isEditing
    };
}

export default connect(mapStateToProps)(Courses);
