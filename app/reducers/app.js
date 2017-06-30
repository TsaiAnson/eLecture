import { combineReducers } from 'redux';

import user from './user';
import student from './student';
import instructor from './instructor';

const rootReducer = combineReducers({
    user,
    student,
    instructor
});

export default rootReducer;
