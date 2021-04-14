import axios from '../../services/axios';

import * as actionTypes from './actionTypes';

const debounce = (callback, time) => {
  let timeout;
  if(timeout) {
    clearTimeout(timeout)
  }

  timeout = setTimeout(() => {
    callback();
  }, time);
};

export const setUsers = (users) => ({
  type: actionTypes.SET_USERS,
  users,
});

export const fetchUsersFailed = (error) => ({
  type: actionTypes.FETCH_USERS_FAILED,
  error,
});

export const clearUsersError = () => ({
  type: actionTypes.CLEAR_USERS_ERROR,
});


export const searchUsers = (searchTerm) => {
  const url = `/search/users?q=${searchTerm}`;
  return (dispatch) => {
    debounce(() => {
      axios
      .get(url)
      .then((response) => {
        dispatch(setUsers(response.data.items));
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error));
      });
    }, 500);
  };
};
