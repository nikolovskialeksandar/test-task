import styles from './SearchBox.module.css';

const searchBox = (props) => (
  <div className={styles.searchUsers}>
    <form>
      <input type="text" placeholder="Search users" onChange={props.searchUsers} />
    </form>
  </div>
);

export default searchBox;
