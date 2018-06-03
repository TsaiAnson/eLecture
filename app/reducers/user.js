import * as types from "../actions/types";

const initialState = {
    authenticated: false,
    instructor: false,
};

function user(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_INSTRUCTOR_SUCCESS:
            return Object.assign({}, state, {
                authenticated: true,
                instructor: true,
            });
        case types.LOGIN_STUDENT_SUCCESS:
            return Object.assign({}, state, {
                authenticated: true,
                instructor: false,
            });
        case types.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                authenticated: false,
                instructor: false,
            });
        default:
            return state;
    }
}

export default user;
