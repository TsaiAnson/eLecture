import * as types from '../actions/types';

const initialState = {
    authenticated: false,
    sid: '',
    username: '',
    name: ''
};

function user(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_STUDENT_REQUEST:
            return state;
        case types.LOGIN_STUDENT_SUCCESS:
            return Object.assign({}, state, {
                authenticated: true,
                sid: action.req.data.sid,
                username: action.req.data.username
            });
        case types.LOGIN_STUDENT_FAILURE:
            return state;
        case types.LOGIN_INSTRUCTOR_REQUEST:
            return state;
        case types.LOGIN_INSTRUCTOR_SUCCESS:
            return Object.assign({}, state, {
                authenticated: true,
                name: action.req.data.name
            });
        case types.LOGIN_INSTRUCTOR_FAILURE:
            return state;
        default:
            return state;
    }
}

export default user;
