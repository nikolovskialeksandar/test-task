import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

import './App.css'; 
import Users from '../Users/Users';
import Repos from '../Repos/Repos';
import ErrorPage from '../../components/UI/ErrorPage/ErrorPage';

const app = (props) => (
  <Fragment>
    <header>
      <Link to="/"><h1>GitXplore</h1></Link>
    </header>
    <Switch>
      <Route path="/repos" component={Repos} />
      <Route path="/error" render={() => (
        <ErrorPage error={{...props.error}} />
      )}/>
      <Route path="/" component={Users} />
    </Switch>
  </Fragment>
);

const mapStateToProps = (state) => ({
  error: state.users.error || state.repos.error,
});

app.propTypes = {
  error: PropTypes.object
};

export default connect(mapStateToProps, null)(app);
