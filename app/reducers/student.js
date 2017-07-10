import * as types from '../actions/types';

const initialState = {
    username: ''
};

function student(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_STUDENT_REQUEST:
            return Object.assign({}, state, {
                username: action.username
            });
        case types.LOGIN_STUDENT_FAILURE:
            return Object.assign({}, state, {
                username: ''
            });
        case types.LOGOUT_REQUEST:
            return Object.assign({}, state, {
                username: ''
            });
        default:
            return state;
    }
}

export default student;
