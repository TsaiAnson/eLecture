import * as types from '../actions/types';

const initialState = {
    authenticated: false,
    sid: '',
    username: ''
};

function user(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return state;
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                authenticated: true,
                sid: action.req.data.sid,
                username: action.req.data.username
            });
        case types.LOGIN_FAILURE:
            return state;
        default:
            return state;
    }
}

export default user;
