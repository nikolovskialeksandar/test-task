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
        error: null,
      };
    case actionTypes.FETCH_USERS_FAILED:
      return {
        ...state,
        error: {
          error: action.error,
          status: action.status,
        },
      };
    case actionTypes.CLEAR_USERS_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
