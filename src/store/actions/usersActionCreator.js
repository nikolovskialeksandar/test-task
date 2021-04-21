import axios from '../../services/axios';

import * as actionTypes from './actionTypes';
let timeout;
const debounce = (callback, time) => {

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

export const fetchUsersFailed = (error, status) => ({
  type: actionTypes.FETCH_USERS_FAILED,
  error,
  status
});

export const clearUsersError = () => ({
  type: actionTypes.CLEAR_USERS_ERROR,
});


export const searchUsers = (searchTerm) => {
  const url = `/search/users?q=${searchTerm}`;
  return (dispatch) => {
    if(searchTerm !== '') {
      debounce(() => {
        axios
        .get(url)
        .then((response) => {
          dispatch(setUsers(response.data.items));
        })
        .catch((error) => {
          dispatch(fetchUsersFailed(error, error.response.status));
        });
      }, 500);
    } else {
      dispatch(setUsers([]));
    }
  };
};
