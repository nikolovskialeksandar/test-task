import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Users from '../../components/Users/Users';
import * as actionCreators from '../../store/actions/index';

const App = (props) => (
  <Switch>
    <Route path="/repos" />
    <Route path="/" render={() =>(
      <Users
        users={props.users}
        searchUsers={(event) => props.searchUsers(event.target.value)}
      />
    )} />
  </Switch>
);

const mapStateToProps = (state) => ({
  users: state.users.users,
  repos: state.repos.repos,
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (searchTerm) => dispatch(actionCreators.searchUsers(searchTerm)),
  fetchRepos: (username) => dispatch(actionCreators.searchUsers(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
