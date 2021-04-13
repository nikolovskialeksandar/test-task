import axios from 'axios';

import * as actionTypes from './actionTypes';

export const setRepos = (users) => ({
  type: actionTypes.SET_REPOS,
  users,
});

export const fetchReposFailed = (error) => ({
  type: actionTypes.FETCH_REPOS_FAILED,
  error,
});

export const fetchRepos = (username) => {
  const url = `https://api.github.com/users/${username}/repos`;
  return (dispatch) => {
    axios
    .get(url)
    .then((response) => {
      dispatch(setRepos(response.data));
    })
    .catch((error) => {
      dispatch(fetchReposFailed(error));
    });
  };
};
