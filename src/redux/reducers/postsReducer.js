import Immutable from 'immutable';
import * as types from '../actions/actionTypes';

const DefaultState = Immutable.Record({
  data: Immutable.List(),
  isFetching: false,
  error: null,
});

const initialState = new DefaultState();

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS:
      return state.merge({ isFetching: true });

    case types.SUCCESS_POSTS:
      return state.merge({ isFetching: false, data: Immutable.fromJS(action.payload.data) });

    case types.FAILED_POSTS:
      return state.merge({ isFetching: false, error: 'Server Error' });

    default:
      return state;
  }
}
