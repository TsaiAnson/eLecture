import * as types from '../actions/types';

const initialState = {
    courses: []
};

function course(state = initialState, action) {
    switch (action.type) {
        case types.GET_COURSES_SUCCESS:
            return Object.assign({}, state, {
                courses: action.req.data.courses
            });
        case types.LOGOUT_REQUEST:
            return Object.assign({}, state, {
                courses: []
            });
        default:
            return state;
    }
}

export default course;
