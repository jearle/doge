
import { fromJS } from 'immutable';
import conciergePageReducer from '../reducer';

describe('conciergePageReducer', () => {
  it('returns the initial state', () => {
    expect(conciergePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
