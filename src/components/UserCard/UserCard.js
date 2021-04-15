import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './UserCard.css';

const userCard = (props) => {
  return (
    <div className="card user-card">
      <img src={props.avatarUrl} alt="userAvatar"></img>
      <Link to={`/repos/${props.username}`}>
        <h3>{props.username}</h3>
      </Link>
    </div>
  );
};

userCard.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
export default userCard;
