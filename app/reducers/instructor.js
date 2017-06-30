import * as types from '../actions/types';

const initialState = {
    name: ''
};

function instructor(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_INSTRUCTOR_SUCCESS:
            return Object.assign({}, state, {
                name: action.req.data.name
            });
        default:
            return state;
    }
}

export default instructor;
