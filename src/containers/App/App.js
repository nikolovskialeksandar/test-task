import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css'; 
import Users from '../Users/Users';
import Repos from '../Repos/Repos';

const App = (props) => (
  <Switch>
    <Route path="/repos/" component={Repos} />
    <Route path="/" component={Users} />
  </Switch>
);

const mapStateToProps = (state) => ({
  selectedUser: state.repos.selectedUser
});

export default connect(mapStateToProps, null)(App);
