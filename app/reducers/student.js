import * as types from "../actions/types";

const initialState = {
    username: "",
};

function student(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_STUDENT_SUCCESS:
            return Object.assign({}, state, {
                username: action.req.data.username,
            });
        case types.LOGOUT_REQUEST:
            return Object.assign({}, state, {
                username: "",
            });
        default:
            return state;
    }
}

export default student;
