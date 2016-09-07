import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_PRS,
  LOAD_PRS_SUCCESS,
  LOAD_PRS_ERROR,
  LOAD_GITHUB_USER,
  LOAD_GITHUB_USER_ERROR,
  LOAD_GITHUB_USER_SUCCESS,
} from './constants';

const initialState = fromJS({
  loadingRepos: false,
  loadingReposError: false,
  loadingPrs: false,
  loadingPrsError: false,
  repos: [],
  prs: [],
  githubUser: {},
  loadingGithubUser: false,
  loadingGithubUserError: false,
});

function githubRepoReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS_SUCCESS:
      return state
        .set('loadingRepos', false)
        .set('loadingReposError', false)
        .set('repos', action.repos);
    case LOAD_REPOS:
      return state
        .set('loadingRepos', true)
        .set('loadingReposError', false);
    case LOAD_REPOS_ERROR:
      return state.set('loadingRepos', false).set('loadingReposError', true);

    case LOAD_PRS:
      return state
        .set('loadingPrs', true)
        .set('loadingPrsError', false);
    case LOAD_PRS_SUCCESS:
      return state
        .set('loadingPrs', false)
        .set('loadingPrsError', false)
        .set('prs', action.prs);
    case LOAD_PRS_ERROR:
      return state
        .set('loadingPrs', false)
        .set('loadingPrsError', true);

    case LOAD_GITHUB_USER:
      return state
        .set('loadingGithubUser', true)
        .set('loadingGithubUserError', false);
    case LOAD_GITHUB_USER_SUCCESS:
      return state
        .set('loadingGithubUser', false)
        .set('loadingGithubUserError', false)
        .set('githubUser', action.user);
    case LOAD_GITHUB_USER_ERROR:
      return state
        .set('loadingGithubUser', false)
        .set('loadingGithubUserError', true);
    default:
      return state;
  }
}

export default githubRepoReducer;
