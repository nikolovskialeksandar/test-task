import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBox from '../../components/SearchBox/SearchBox';
import UserCard from '../../components/UserCard/UserCard';
import * as actionCreators from '../../store/actions/index';

const users = (props) => {
  let error = null;
  if(props.error) {
    error = <Redirect to="/error" />;
  }

  let userCards = props.users.map((user, index) => (
    <UserCard
      key={index}
      username={user.login}
      avatarUrl={user.avatar_url}
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

users.propTypes = {
  users: PropTypes.array.isRequired,
  error: PropTypes.number,
  searchUsers: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(users);
