import * as types from '../actions/types';

const initialState = {
    authenticated: false
};

function user(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_STUDENT_SUCCESS:
        case types.LOGIN_INSTRUCTOR_SUCCESS:
            return Object.assign({}, state, {
                authenticated: true
            });
        case types.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                authenticated: false
            });
        default:
            return state;
    }
}

export default user;
