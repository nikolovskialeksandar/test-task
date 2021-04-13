import styles from './UserList.module.css';
import UserCard from './UserCard/UserCard';

const userList = (props) => {
  let userCards = null;
  if(props.users) {
    userCards = props.users.map((user) => {
      return (
        <UserCard 
          username={user.login}
          avatarUrl={user.avatar_url}
        />
      )
    })
  }
  return (
    <div className={styles.userList}>
      {userCards}
    </div>
  );
};

export default userList;
