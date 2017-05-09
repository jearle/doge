
import { fromJS } from 'immutable';
import journeyPageReducer from '../reducer';

describe('journeyPageReducer', () => {
  it('returns the initial state', () => {
    expect(journeyPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
