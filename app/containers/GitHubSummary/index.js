import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import {
  selectLoadingRepos,
  selectRepos,
  selectLoadingReposError,
  selectPrs,
  selectLoadingPrs,
  selectLoadingPrsError,
} from './selectors';
import {
  loadRepos,
  loadPrs,
} from './actions';
import styles from './styles.css';

export class GitHubSummary extends React.Component {
  componentDidMount() {
    this.props.fetchRepos();
    this.props.fetchPrs();
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

    return (
      <div className={styles.github}>
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
};

function mapDispatchToProps(dispatch) {
  return {
    fetchRepos: () => {
      dispatch(loadRepos());
    },
    fetchPrs: () => {
      dispatch(loadPrs());
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
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(GitHubSummary);
