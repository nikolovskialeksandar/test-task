import { connect } from 'react-redux';

import './App.css';

import SearchUsers from '../../components/SearchUsers/SearchUsers';
import * as actionCreators from '../../store/actions/index';

const App = (props) => (
  <div className="App">
    <SearchUsers searchUsers={(event) => props.searchUsers(event.target.value)} />
  </div>
);

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (searchTerm) => dispatch(actionCreators.searchUsers(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
