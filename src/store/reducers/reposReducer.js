import * as actionTypes from '../actions/actionTypes';

const initialState = {
  repos: [],
  selectedUser: '',
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_REPOS:
      return {
        ...state,
        repos: action.repos,
        selectedUser: action.selectedUser,
        error: null,
      };
    case actionTypes.FETCH_REPOS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.CLEAR_REPOS_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
