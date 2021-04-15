import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './ErrorPage.css';
import * as actionCreators from '../../../store/actions/index';

const ErrorPage = (props) => {
  const clearErrors = () => {
    props.clearUsersError();
    props.clearReposError();
  };
  
  const statusCode = props.error.status ? (
    <p>Status code <span>{props.error.status}</span></p>
  ) : null;

  return (
    <div className="error-page">
      <p>Something went wrong</p>
      {statusCode}
      <Link to="/" onClick={() => clearErrors()}>
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