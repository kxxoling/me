import expect from 'expect';
import gitHubSummaryReducer from '../reducer';
import { fromJS } from 'immutable';

describe('gitHubSummaryReducer', () => {
  it('returns the initial state', () => {
    const expected = fromJS({
      repos: [
      ],
      loadingReposError: false,
      loadingRepos: false,
      loadingGithubUser: false,
      githubUser: {
      },
      prs: [
      ],
      loadingPrsError: false,
      loadingPrs: false,
      loadingGithubUserError: false,
    });
    expect(gitHubSummaryReducer(undefined, {})).toEqual(expected);
  });
});
