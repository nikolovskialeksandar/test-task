import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css'; 
import Users from '../Users/Users';
import Repos from '../Repos/Repos';
import { Fragment } from 'react';

const App = (props) => (
  <Fragment>
    <header>
      <h1>GitXplore</h1>
    </header>
    <Switch>
      <Route path="/repos/" component={Repos} />
      <Route path="/" component={Users} />
    </Switch>
  </Fragment>
);

const mapStateToProps = (state) => ({
  selectedUser: state.repos.selectedUser
});

export default connect(mapStateToProps, null)(App);
