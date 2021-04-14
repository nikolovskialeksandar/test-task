import styles from './UserCard.module.css';

const userCard = (props) => {
  return (
    <div className={styles.userCard}>
      <img onClick={props.fetchRepos} src={props.avatarUrl} alt="userAvatar"></img>
      <h3>{props.username}</h3>
    </div>
  );
};

export default userCard;
