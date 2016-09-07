import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_PRS,
  LOAD_PRS_SUCCESS,
  LOAD_PRS_ERROR,
  LOAD_GITHUB_USER,
  LOAD_GITHUB_USER_SUCCESS,
  LOAD_GITHUB_USER_ERROR,
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

export function loadGithubUser() {
  return {
    type: LOAD_GITHUB_USER,
  };
}
export function loadGithubUserError(error) {
  return {
    type: LOAD_GITHUB_USER_ERROR,
    error,
  };
}
export function loadGithubUserSuccess(user) {
  return {
    type: LOAD_GITHUB_USER_SUCCESS,
    user,
  };
}
