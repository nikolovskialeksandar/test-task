import axios from 'axios';

import * as actionTypes from './actionTypes';

export const setUsers = (users) => ({
  type: actionTypes.SET_USERS,
  users,
});

export const fetchUsersFailed = (error) => ({
  type: actionTypes.FETCH_USERS_FAILED,
  error,
});

export const searchUsers = (searchTerm) => {
  const url = `https://api.github.com/search/users?q=${searchTerm}`;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setUsers(response.data.items));
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error));
      });
  };
};
