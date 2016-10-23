import {
  SEARCH_CHANGE,
  SEARCH_NEW,
} from '../actions/actionTypes';

const search = (state = [""], action) => {
  switch (action.type) {
    case SEARCH_NEW:
      return [
        action.value,
        ...state
      ];

    case SEARCH_CHANGE:
      return  [
        action.value,
        ...state.slice(1),
      ];

    default :
      return state;
  }
};

export default search;

// Selectors
export const getCurrentSearch = (state) => state[0];