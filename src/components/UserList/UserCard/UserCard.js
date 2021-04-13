import styles from './UserCard.module.css';

const userCard = (props) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatarUrl} alt="userAvatar"></img>
      <h3>{props.username}</h3>
    </div>
  );
};

export default userCard;
