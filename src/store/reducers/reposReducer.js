import * as actionTypes from '../actions/actionTypes';

const initialState = {
  repos: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_REPOS:
      return {
        ...state,
        repos: action.repos,
        error: action.error,
      };
    case actionTypes.FETCH_REPOS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
