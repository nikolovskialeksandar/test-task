const searchUsers = (props) => (
  <div>
    <form>
      <input type="text" onChange={props.searchUsers} />
    </form>
  </div>
);

export default searchUsers;
