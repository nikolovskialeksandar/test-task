import { Fragment } from 'react';

import styles from './Users.module.css';
import SearchBox from '../SearchBox/SearchBox';
import UserCard from './UserCard/UserCard';

const users = (props) => {
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
    <Fragment>
      <SearchBox searchUsers={props.searchUsers}/>
      <div className={styles.userList}>
        {userCards}
      </div>
    </Fragment>
  );
};

export default users;
