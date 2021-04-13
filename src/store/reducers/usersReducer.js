import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.users,
        error: action.error,
      };
    case actionTypes.FETCH_USERS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
