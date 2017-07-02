import * as types from '../actions/types';

const initialState = {
    sid: '',
    username: ''
};

function student(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_STUDENT_SUCCESS:
            return Object.assign({}, state, {
                sid: action.req.data.sid,
                username: action.req.data.username
            });
        default:
            return state;
    }
}

export default student;
