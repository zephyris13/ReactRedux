import * as types from './actionTypes';

export function fetchPosts() {
  return {
    types: [types.FETCH_POSTS, types.SUCCESS_POSTS, types.FAILED_POSTS],
    payload: {
      request: {
        url: '/posts',
      },
    },
  };
}
