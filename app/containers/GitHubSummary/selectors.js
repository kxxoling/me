import { createSelector } from 'reselect';

const selectGitHubSummaryDomain = () => state => state.get('gitHubSummary');

const selectGitHubSummary = () => createSelector(
  selectGitHubSummaryDomain(),
  (substate) => substate.toJS()
);

const selectLoadingRepos = () => createSelector(
  selectGitHubSummaryDomain(),
  (state) => state.get('loadingRepos'),
);

const selectLoadingReposError = () => createSelector(
  selectGitHubSummaryDomain(),
  (state) => state.get('loadingReposError'),
);

const selectRepos = () => createSelector(
  selectGitHubSummaryDomain(),
  (state) => state.get('repos'),
);

const selectPrs = () => createSelector(
  selectGitHubSummaryDomain(),
  (state) => state.get('prs'),
);

const selectLoadingPrs = () => createSelector(
  selectGitHubSummaryDomain(),
  (state) => state.get('loadingPrs'),
);

const selectLoadingPrsError = () => createSelector(
  selectGitHubSummaryDomain(),
  (state) => state.get('loadingPrsError'),
);

export {
  selectGitHubSummaryDomain,
  selectGitHubSummary,
  selectLoadingRepos,
  selectLoadingReposError,
  selectRepos,
  selectLoadingPrs,
  selectLoadingPrsError,
  selectPrs,
};
