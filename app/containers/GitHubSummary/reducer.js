import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_PRS,
  LOAD_PRS_SUCCESS,
  LOAD_PRS_ERROR,
} from './constants';

const initialState = fromJS({
  loadingRepos: false,
  loadingReposError: false,
  loadingPrs: false,
  loadingPrsError: false,
  repos: [],
  prs: [],
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
    default:
      return state;
  }
}

export default githubRepoReducer;
