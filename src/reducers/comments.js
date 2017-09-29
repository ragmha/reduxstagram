import { ADD_COMMENT, REMOVE_COMMENT } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [];
    case REMOVE_COMMENT:
      return [];
    default:
      return state;
  }
}
