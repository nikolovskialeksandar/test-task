import './RepoCard.css';
import RepoIcons from './RepoIcons/RepoIcons';

const repoCard = (props) => {
  return (
    <div className="card repo-card">
      <h3>{props.repoName}</h3>
      <RepoIcons 
        stars={props.stars}
        watchers={props.watchers}
        forks={props.forks}
      />
      <p>{props.description}</p>
      <p>{props.license ? props.license.name : null}</p>
    </div>
  );
};

export default repoCard;
