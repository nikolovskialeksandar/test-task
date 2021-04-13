import styles from './SearchUsers.module.css';

const searchUsers = (props) => (
  <div className={styles.searchUsers}>
    <form>
      <input type="text" placeholder="Search users" onChange={props.searchUsers} />
    </form>
  </div>
);

export default searchUsers;
