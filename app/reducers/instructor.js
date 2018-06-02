import * as types from "../actions/types";

const initialState = {
    name: "",
};

function instructor(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_INSTRUCTOR_SUCCESS:
            return Object.assign({}, state, {
                name: action.req.data.name,
            });
        case types.LOGOUT_REQUEST:
            return Object.assign({}, state, {
                name: "",
            });
        default:
            return state;
    }
}

export default instructor;
