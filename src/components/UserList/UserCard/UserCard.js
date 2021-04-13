import styles from './UserCard.module.css';

const userCard = (props) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatarUrl} alt="userAvatar"></img>
      <p>{props.username}</p>
    </div>
  );
};

export default userCard;
