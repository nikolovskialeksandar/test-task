import { connect } from 'react-redux';

import styles from './Repos.module.css';
import RepoCard from '../../components/RepoCard/RepoCard';

const repos = (props) => {
  let repoCards = null;
  if(props.repos) {
    repoCards = (props.repos).map((repo) => (
        <RepoCard 
          repoName={repo.name}
          description={repo.description}
          repoUrl={repo.html_url}
          stars={repo.stargazers_count}
          watchers={repo.watchers_count}
          forks={repo.forks_count}
        />
    ));
  }

  return (
    <div className={styles.repoList}>
      {repoCards}
    </div>
  );
};

const mapStateToProps = (state) => ({
  repos: state.repos.repos,
});

export default connect(mapStateToProps, null)(repos);
