import expect from 'expect';
import gitHubSummaryReducer from '../reducer';
import { fromJS } from 'immutable';

describe('gitHubSummaryReducer', () => {
  it('returns the initial state', () => {
    expect(gitHubSummaryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
