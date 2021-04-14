import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Users from '../Users/Users';

const App = (props) => (
  <Switch>
    <Route path="/repos" />
    <Route path="/" component={Users} />
  </Switch>
);

const mapStateToProps = (state) => ({
  selectedUser: state.repos.selectedUser
});

export default connect(mapStateToProps, null)(App);
