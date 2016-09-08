import { take, call, put, fork } from 'redux-saga/effects';
import { LOAD_REPOS, LOAD_PRS, LOAD_GITHUB_USER } from './constants';
import {
  loadRepos,
  loadReposSuccess,
  loadReposError,
  loadPrs,
  loadPrsError,
  loadPrsSuccess,
  loadGithubUser,
  loadGithubUserError,
  loadGithubUserSuccess,
} from './actions';

import request from 'utils/request';

const username = 'kxxoling';

export function* fetchRepos() {
  const api = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  put(loadRepos());
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadReposError(rsp.err));
  } else {
    yield put(loadReposSuccess(rsp.data));
  }
}

export function* fetchPrs() {
  const api = `https://api.github.com/search/issues?q=type%3apr+state%3aclosed+author%3a${username}&per_page=100&page=1`;

  put(loadPrs);
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadPrsError(rsp.err));
  } else {
    yield put(loadPrsSuccess(rsp.data.items));
  }
}

export function* fetchGithubUser() {
  const api = `https://api.github.com/users/${username}`;

  put(loadGithubUser());
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadGithubUserError(rsp.err));
  } else {
    yield put(loadGithubUserSuccess(rsp.data));
  }
}

export function* fetchReposWatcher() {
  while (yield take(LOAD_REPOS)) {
    yield call(fetchRepos);
  }
}

export function* fetchPrsWatcher() {
  while (yield take(LOAD_PRS)) {
    yield call(fetchPrs);
  }
}

export function* fetchGithubUserWatcher() {
  while (yield take(LOAD_GITHUB_USER)) {
    yield call(fetchGithubUser);
  }
}

export function* githubData() {
  yield fork(fetchReposWatcher);
}

export function* githubPrs() {
  yield fork(fetchPrsWatcher);
}

export function* githubUser() {
  yield fork(fetchGithubUser);
}

export default [
  githubData,
  githubPrs,
  githubUser,
];
