import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SearchBox from '../../components/SearchBox/SearchBox';
import UserCard from '../../components/UserCard/UserCard';
import * as actionCreators from '../../store/actions/index';

const users = (props) => {
  let error = null;
  if(props.error) {
    error = <Redirect to="/error" />;
  }

  let userCards = null;
  if(props.users) {
    userCards = props.users.map((user) => {
      return (
        <UserCard
          username={user.login}
          avatarUrl={user.avatar_url}
        />
      );
    });
  }
  
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

export default connect(mapStateToProps, mapDispatchToProps)(users);
