import axios from 'axios';

import * as types from './types';

export function login(sid, username) {
    return {
        type: types.LOGIN,
        promise: axios.post('/api/login', {
            sid: sid,
            username: username
        })
    }
}

export function createInstructor(name, email, password) {
    return {
        type: types.CREATE_INSTRUCTOR,
        promise: axios.post('/api/instructor', {
            name: name,
            email: email,
            password: password
        })
    }
}

export function createStudent(course, sid) {
    return {
        type: types.CREATE_STUDENT,
        promise: axios.post('/api/student', {
            course: course,
            sid: sid
        })
    }
}
