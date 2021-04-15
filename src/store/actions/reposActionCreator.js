import axios from '../../services/axios';

import * as actionTypes from './actionTypes';

export const setRepos = (repos, selectedUser) => ({
  type: actionTypes.SET_REPOS,
  repos,
  selectedUser
});

export const fetchReposFailed = (error, status) => ({
  type: actionTypes.FETCH_REPOS_FAILED,
  error,
  status,
});

export const clearReposError = () => ({
  type: actionTypes.CLEAR_REPOS_ERROR,
});

export const fetchRepos = (username) => {
  const url = `/users/${username}/repo`;
  return (dispatch) => {
    axios
    .get(url)
    .then((response) => {
      dispatch(setRepos(response.data, username));
    })
    .catch((error) => {
      dispatch(fetchReposFailed(error, error.response.status));
    });
  };
};
