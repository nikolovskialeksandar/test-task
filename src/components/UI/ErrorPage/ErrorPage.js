import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './ErrorPage.css';
import * as actionCreators from '../../../store/actions/index';

const ErrorPage = (props) => {
  useEffect(() => {
    return () => {
      props.clearUsersError();
      props.clearReposError();
    }
  });

  return (
    <div className="error-page">
      <p>Something went wrong</p>
      <p>Status code <span>{props.error.status}</span></p>
      <Link to="/">
        Back to home page
      </Link>
    </div>
  ); 
}

const mapDispatchToProps = (dispatch) => ({
  clearUsersError: () => dispatch(actionCreators.clearUsersError()),
  clearReposError: () => dispatch(actionCreators.clearReposError()),
});

ErrorPage.propTypes = {
  error: PropTypes.object,
  clearUsersError: PropTypes.func.isRequired,
  clearReposError: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ErrorPage);