import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import Icon from 'react-fa';

import messages from './messages';
import {
  selectLoadingRepos,
  selectRepos,
  selectLoadingReposError,
  selectPrs,
  selectLoadingPrs,
  selectLoadingPrsError,
  selectGithubUser,
  selectLoadingGithubUser,
  selectLoadingGithubUserError,
} from './selectors';
import {
  loadRepos,
  loadPrs,
  loadGithubUser,
} from './actions';
import styles from './styles.css';

export class GitHubSummary extends React.Component {
  componentDidMount() {
    this.props.fetchRepos();
    this.props.fetchPrs();
    this.props.fetchGithubUser();
  }

  renderGithubCard(user) {
    return (
      <div className={styles.githubCard}>
        <figure className={styles.githubAvatar}>
          <img src={user.avatar_url} alt={`${user.name}@GitHub`} />
          <Icon name="github" className={styles.githubIcon} size="4x" />
        </figure>
      </div>
    );
  }

  render() {
    const repos = this.props.repos.map((repo) => (
      <div>
        <a href={repo.html_url}>{repo.stargazers_count}</a>
        <span>{' '}</span>
        <a href={repo.html_url}>{repo.name}</a>
        <span>{repo.language}</span>
        <a href={repo.issues_url}><FormattedMessage {...messages.issuesCount} />{repo.issues_count}</a>

        { repo.fork && (<FormattedMessage {...messages.forkedFrom} />) }
      </div>
    ));
    const prs = this.props.prs.map((pr) => (
      <div>
        {pr.title}
      </div>
    ));

    const user = this.props.githubUser;

    return (
      <div className={styles.github}>
        <Helmet
          title={messages.title.defaultMessage}
          meta={[
            { name: 'description', content: messages.description.defaultMessage },
          ]}
        />

        { this.renderGithubCard(user) }

        <div>
          <h2 className={styles.title}>
            <FormattedMessage {...messages.prsTitle} />
          </h2>
          { prs }
        </div>
        <div>
          <h2 className={styles.title}>
            <FormattedMessage {...messages.reposTitle} />
          </h2>
          { repos }
        </div>
      </div>
    );
  }
}

GitHubSummary.propTypes = {
  loadingRepos: React.PropTypes.bool,
  loadingReposError: React.PropTypes.oneOfType([
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.object,           // Strange here!!!
    React.PropTypes.array,
  ]),
  loadingPrs: React.PropTypes.bool,
  loadingPrsError: React.PropTypes.bool,
  prs: React.PropTypes.oneOfType([
    React.PropTypes.object,           // Strange here!!!
    React.PropTypes.array,
  ]),
  fetchRepos: React.PropTypes.func,
  fetchPrs: React.PropTypes.func,
  githubUser: React.PropTypes.object,
  loadingGithubUser: React.PropTypes.bool,
  loadingGithubUserError: React.PropTypes.bool,
  fetchGithubUser: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    fetchRepos: () => {
      dispatch(loadRepos());
    },
    fetchPrs: () => {
      dispatch(loadPrs());
    },
    fetchGithubUser: () => {
      dispatch(loadGithubUser());
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  repos: selectRepos(),
  loadingRepos: selectLoadingRepos(),
  loadingReposError: selectLoadingReposError(),
  prs: selectPrs(),
  loadingPrs: selectLoadingPrs(),
  loadingPrsError: selectLoadingPrsError(),
  githubUser: selectGithubUser(),
  loadingGithubUser: selectLoadingGithubUser(),
  loadingGithubUserError: selectLoadingGithubUserError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(GitHubSummary);
