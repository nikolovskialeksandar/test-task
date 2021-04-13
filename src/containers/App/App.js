import { connect } from 'react-redux';

import styles from './App.module.css';

import SearchUsers from '../../components/SearchUsers/SearchUsers';
import UserList from '../../components/UserList/UserList';
import * as actionCreators from '../../store/actions/index';

const App = (props) => (
  <div className={styles.app}>
    <SearchUsers searchUsers={(event) => props.searchUsers(event.target.value)} />
    <UserList users={props.users} />
  </div>
);

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (searchTerm) => dispatch(actionCreators.searchUsers(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
