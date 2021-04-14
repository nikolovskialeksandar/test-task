import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';
import './App.css'; 
import Users from '../Users/Users';
import Repos from '../Repos/Repos';
import ErrorPage from '../../components/UI/ErrorPage/ErrorPage';

const App = (props) => (
  <Fragment>
    <header>
      <h1>GitXplore</h1>
    </header>
    <Switch>
      <Route path="/repos/" component={Repos} />
      <Route path="/error" render={() => (
        <ErrorPage error={props.error} />
      )}/>
      <Route path="/" component={Users} />
    </Switch>
  </Fragment>
);

const mapStateToProps = (state) => ({
  error: state.users.error || state.repos.error,
  selectedUser: state.repos.selectedUser
});

export default connect(mapStateToProps, null)(App);
