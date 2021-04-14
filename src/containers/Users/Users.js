import { Fragment } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../../components/SearchBox/SearchBox';
import UserCard from '../../components/UserCard/UserCard';
import * as actionCreators from '../../store/actions/index';

const users = (props) => {
  let userCards = null;
  if(props.users) {
    userCards = props.users.map((user) => {
      return (
        <UserCard
          fetchRepos={() => props.fetchRepos(user.login)}
          username={user.login}
          avatarUrl={user.avatar_url}
        />
      );
    });
  }
  
  return (
    <Fragment>
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
  selectedUser: state.repos.selectedUser,
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (searchTerm) => dispatch(actionCreators.searchUsers(searchTerm)),
  fetchRepos: (username) => dispatch(actionCreators.fetchRepos(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(users);
