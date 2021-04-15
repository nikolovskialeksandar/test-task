import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import PropTypes from 'prop-types';

import './Repos.css';
import RepoCard from '../../components/RepoCard/RepoCard';
import Button from '../../components/UI/Button/Button';
import * as actionCreators from '../../store/actions/index';

const Repos = (props) => {
  const [ avatarUrl, setAvatarUrl ] = useState('');

  const fetchRepos = props.fetchRepos;
  useEffect(() => {
    const user = window.location.pathname.replace('/repos/', '');
    fetchRepos(user);
    fetchAvatar(user);
  }, [fetchRepos]);
  
  const fetchAvatar = (user) => {
    axios
    .get(`users/${user}`)
    .then((response) => {
      setAvatarUrl(response.data.avatar_url);
    });
  };

  let error = null;
  if(props.error) {
    error = <Redirect to="/error" />;
  }

  let repoCards = (props.repos).map((repo, index) => (
    <RepoCard
      key={index} 
      repoName={repo.name}
      description={repo.description}
      repoUrl={repo.html_url}
      stars={repo.stargazers_count}
      watchers={repo.watchers_count}
      forks={repo.forks_count}
      license={repo.license}
  />
  ));

  return (
    <Fragment>
      {error}
      <nav>
        <Link to="/">
          <Button buttonClass="button-nav" text="  Back" icon={<i class="fas fa-angle-left"></i>} />
        </Link>
      </nav>
      <div className="user-profile-info">
        <img src={avatarUrl} alt="userAvatar"></img>
        <h2>{props.selectedUser}</h2>
      </div>
      <main className="card-list">
        {repoCards}
      </main>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  repos: state.repos.repos,
  selectedUser: state.repos.selectedUser,
  error: state.users.error || state.repos.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRepos: (username) => dispatch(actionCreators.fetchRepos(username)),
});

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
  selectedUser: PropTypes.string.isRequired,
  error: PropTypes.object,
  fetchRepos: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
