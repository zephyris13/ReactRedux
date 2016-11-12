import * as types from './actionTypes';

export default function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
