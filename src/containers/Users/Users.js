import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from '../../services/axios';
import PropTypes from 'prop-types';

import SearchBox from '../../components/SearchBox/SearchBox';
import UserCard from '../../components/UserCard/UserCard';
import * as actionCreators from '../../store/actions/index';

const Users = (props) => {
  const [ userBios, setUserBios] = useState({});

  const fetchUserBio = (user) => {
    axios
      .get(`/users/${user}`)
      .then((response) => {
        const existingUserBios = userBios;
        let description = response.data.bio;
        if(response.data.bio === null) {
          description = 'No description'
        }
        setUserBios({
          ...existingUserBios,
          [user]: description
        })
      })
  };

  let error = null;
  if(props.error) {
    error = <Redirect to="/error" />;
  }

  let userCards = props.users.map((user, index) => (
    <UserCard
      key={index}
      username={user.login}
      avatarUrl={user.avatar_url}
      description={userBios[user.login] ? userBios[user.login] : null}
      fetchUserBio={() => fetchUserBio(user.login)}
    />
  ));
  
  return (
    <Fragment>
      {error}
      <nav>
        <SearchBox searchUsers={(event) => props.searchUsers(event.target.value)}/>
      </nav>
      <main className="card-list">
        {userCards}
      </main>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  error: state.users.error || state.repos.error,
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (searchTerm) => dispatch(actionCreators.searchUsers(searchTerm)),
});

Users.propTypes = {
  users: PropTypes.array.isRequired,
  error: PropTypes.object,
  searchUsers: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
