import axios from "axios";

import * as types from "./types";

export function loginStudent(sid, username) {
    return {
        type: types.LOGIN_STUDENT,
        promise: axios.post("/login/student", {
            sid: sid,
            username: username,
        })
    };
}

export function createStudent(course, sid) {
    return {
        type: types.CREATE_STUDENT,
        promise: axios.post("/signup/student", {
            course: course,
            sid: sid,
        })
    };
}
