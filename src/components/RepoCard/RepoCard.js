import './RepoCard.css';

const repoCard = (props) => {
  return (
    <div className="card repo-card">
      <h3>{props.repoName}</h3>
      <p>{props.description}</p>
      <p>{props.stars}</p>
      <p>{props.forks}</p>
      <p>{props.watchers}</p>
    </div>
  );
};

export default repoCard;
