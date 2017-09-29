import { INCREMENT_LIKES } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case INCREMENT_LIKES:
      return [];
    default:
      return state;
  }
}
