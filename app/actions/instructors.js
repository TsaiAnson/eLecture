import axios from 'axios';

import * as types from './types';

export function loginInstructor(email, password) {
    return {
        type: types.LOGIN_INSTRUCTOR,
        promise: axios.post('/login/instructor', {
            email: email,
            password: password
        })
    };
}

export function createInstructor(name, email, password) {
    return {
        type: types.CREATE_INSTRUCTOR,
        promise: axios.post('/signup/instructor', {
            name: name,
            email: email,
            password: password
        })
    };
}
