/**
 * Test store addons
 */

import expect from 'expect';
import configureStore from '../../app/store';
import { hashHistory } from 'react-router';

describe('configureStore', () => {
  let store;

  before(() => {
    store = configureStore({}, hashHistory);
  });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toEqual('object');
    });
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toEqual('function');
    });
  });
});