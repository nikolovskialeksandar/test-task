import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import RepoCard from '../../components/RepoCard/RepoCard';

const repos = (props) => {
  let error = null;
  if(props.error) {
    error = <Redirect to="/error" />;
  }

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
          license={repo.license}
        />
    ));
  }

  return (
    <div className="card-list">
      {error}
      {repoCards}
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.users.error || state.repos.error,
  repos: state.repos.repos,
});

export default connect(mapStateToProps, null)(repos);
