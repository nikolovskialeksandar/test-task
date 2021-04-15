import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';

import './UserCard.css';

const userCard = (props) => {
  return (
    <div className="card user-card">
      <img src={props.avatarUrl} alt="userAvatar"></img>
      <Link to={`/repos/${props.username}`}>
        <h3>{props.username}</h3>
      </Link>
      <p className="user-description">{props.description}</p>
      <Button click={props.fetchUserBio} text="Description" buttonClass="button-description"></Button>
    </div>
  );
};

userCard.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
export default userCard;
