import { combineReducers } from 'redux';

import user from './user';
import student from './student';
import instructor from './instructor';
import course from './course';

const rootReducer = combineReducers({
    user,
    student,
    instructor,
    course
});

export default rootReducer;
