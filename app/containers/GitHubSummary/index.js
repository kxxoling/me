import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import Icon from 'react-fa';

import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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

const slideStyles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
};

export class GitHubSummary extends React.Component {
  state = {
    index: 1,
  };

  componentDidMount() {
    this.props.fetchRepos();
    this.props.fetchPrs();
    this.props.fetchGithubUser();
    this.handleChangeIndex.bind(this);
  }

  handleChangeIndex(index) {
    this.setState({
      index,
    });
  }

  renderGithubCard(user) {
    return (
      <div className={styles.githubCard}>
        <figure className={styles.githubAvatar}>
          <img src={user.avatar_url} alt={`${user.name}@GitHub`} />
          <Icon name="github" className={styles.githubIcon} size="4x" />
        </figure>
        <div className={styles.data}>
          <div className={styles.item}>
            <div className={styles.itemNumber}>
              { user.public_repos }
            </div>
            <div>Repos</div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemNumber}>
              { user.public_gists }
            </div>
            <div>Gists</div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemNumber}>
              { user.followers }
            </div>
            <div>followers</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const repos = this.props.repos.map((repo) => (
      <div key={repo.html_url}>
        <a href={repo.html_url}>{repo.stargazers_count}</a>
        <span>{' '}</span>
        <a href={repo.html_url}>{repo.name}</a>
        <span>{repo.language}</span>
        <a href={`${repo.html_url}/issues`}><FormattedMessage {...messages.issuesCount} />{repo.issues_count}</a>

        { repo.fork && (<FormattedMessage {...messages.forkedFrom} />) }
      </div>
    ));
    const prs = this.props.prs.map((pr) => (
      <div key={pr.html_url}>
        {pr.title}
      </div>
    ));

    const user = this.props.githubUser;
    const { index } = this.state;
    return (
      <div className={styles.github}>
        <Helmet
          title={messages.title.defaultMessage}
          meta={[
            { name: 'description', content: messages.description.defaultMessage },
          ]}
        />

        { this.renderGithubCard(user) }

        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <Tabs value={index}>
              <Tab label="Repositories" value={0} onClick={() => { this.handleChangeIndex(0); }} />
              <Tab label="Pull Requests" value={1} onClick={() => { this.handleChangeIndex(1); }} />
            </Tabs>
            <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} className={styles.swipeableView}>
              <div style={Object.assign({}, slideStyles.slide, slideStyles.slide1)}>
                <h2 className={styles.title}>
                  <FormattedMessage {...messages.reposTitle} />
                </h2>
                { repos }
              </div>
              <div style={Object.assign({}, slideStyles.slide, slideStyles.slide2)}>
                <h2 className={styles.title}>
                  <FormattedMessage {...messages.prsTitle} />
                </h2>
                { prs }
              </div>
            </SwipeableViews>
          </div>
        </MuiThemeProvider>
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
