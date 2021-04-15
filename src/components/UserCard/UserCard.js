import { Link } from 'react-router-dom';

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

export default userCard;
