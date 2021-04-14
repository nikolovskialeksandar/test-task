import styles from './RepoIcons.module.css';

const repoIcons = (props) => (
  <div className={styles.repoIcons}>
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