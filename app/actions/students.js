import axios from 'axios';

import * as types from './types';

export function loginStudent(sid, username) {
    return {
        type: types.LOGIN_STUDENT,
        promise: axios.post('/api/student/login', {
            sid: sid,
            username: username
        })
    };
}

export function createStudent(course, sid) {
    return {
        type: types.CREATE_STUDENT,
        promise: axios.post('/api/student', {
            course: course,
            sid: sid
        })
    };
}