import './RepoCard.css';
import RepoIcons from './RepoIcons/RepoIcons';

const repoCard = (props) => {
  return (
    <div className="card repo-card">
      <a 
        href={props.repoUrl} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <h3>{props.repoName}</h3>
      </a>
      <RepoIcons 
        stars={props.stars}
        watchers={props.watchers}
        forks={props.forks}
      />
      <p className="repo-description">{props.description}</p>
      <p className="repo-license">{props.license ? props.license.name : null}</p>
    </div>
  );
};

export default repoCard;
