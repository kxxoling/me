import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_PRS,
  LOAD_PRS_SUCCESS,
  LOAD_PRS_ERROR,
} from './constants';

export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

export function loadReposSuccess(repos) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
  };
}

export function loadReposError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

export function loadPrs() {
  return {
    type: LOAD_PRS,
  };
}

export function loadPrsSuccess(prs) {
  return {
    type: LOAD_PRS_SUCCESS,
    prs,
  };
}

export function loadPrsError(error) {
  return {
    type: LOAD_PRS_ERROR,
    error,
  };
}
