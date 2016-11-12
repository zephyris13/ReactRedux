import Immutable from 'immutable';
import * as types from '../actions/actionTypes';

const DefaultState = Immutable.Record({
  data: Immutable.List(),
});

const initialState = new DefaultState();

export default function courseReducer(state = initialState, action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return state.update('data', Immutable.List(), x => x.push(action.course));

    default:
      return state;
  }
}
