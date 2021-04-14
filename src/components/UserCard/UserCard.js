import styles from './UserCard.module.css';
import { Link } from 'react-router-dom';

const userCard = (props) => {
  return (
    <div className={styles.userCard}>
      <Link onClick={props.fetchRepos}  to={`/repos/${props.selectedUser}`}>      <img src={props.avatarUrl} alt="userAvatar"></img></Link>

      <h3>{props.username}</h3>
    </div>
  );
};

export default userCard;
