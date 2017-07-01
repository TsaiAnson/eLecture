import axios from 'axios';

import * as types from './types';

export function createCourse(term, year, number, name, instructors) {
    return {
        type: types.CREATE_COURSE,
        promise: axios.post('/api/course', {
            term: term,
            year: year,
            number: number,
            name: name,
            instructors: instructors
        })
    };
}
