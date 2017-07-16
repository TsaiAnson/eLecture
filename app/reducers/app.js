import { combineReducers } from 'redux';
import { REHYDRATE } from 'redux-persist'

import user from './user';
import student from './student';
import instructor from './instructor';
import course from './course';

const combinedReducer = combineReducers({
    user,
    student,
    instructor,
    course
});

function rehydrate(state, action) {
    switch (action.type) {
        case REHYDRATE:
            const incoming = action.payload;
            if (incoming) {
                for (let reducer of state) {
                    state[reducer] = {...state[reducer], ...incoming[reducer]};
                }
            }
            return state;
        default:
            return state;
    }
}

function rootReducer(state, action) {
    const intermediateState = combinedReducer(state, action);
    return rehydrate(intermediateState, action);
}

export default rootReducer;
