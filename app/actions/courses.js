import axios from "axios";

import * as types from "./types";

export function createCourse(term, year, number, name, instructors) {
    return {
        type: types.CREATE_COURSE,
        promise: axios.post("/api/courses", {
            term: term,
            year: year,
            number: number,
            name: name,
            instructors: instructors,
        })
    };
}

export function getCourses() {
    return {
        type: types.GET_COURSES,
        promise: axios.get("/api/courses"),
    };
}
