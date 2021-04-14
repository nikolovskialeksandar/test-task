import './RepoIcons.css';

const repoIcons = (props) => (
  <div className="repo-icons">
    <span>
      <p>{props.stars}</p>
      <i class="fas fa-star"></i>
    </span>
    <span>
      <p>{props.forks}</p>
      <i class="fas fa-code-branch"></i>
    </span>
    <span>
      <p>{props.watchers}</p>
      <i class="far fa-eye"></i>
    </span>
  </div>
);

export default repoIcons;