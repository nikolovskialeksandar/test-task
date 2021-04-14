import styles from './RepoCard.module.css';

const repoCard = (props) => {
  return (
    <div className={styles.repoCard}>
      <h3>{props.repoName}</h3>
      <p>{props.description}</p>
      <p>{props.stars}</p>
      <p>{props.forks}</p>
      <p>{props.watchers}</p>
    </div>
  );
};

export default repoCard;
