
import { fromJS } from 'immutable';
import habitPageReducer from '../reducer';

describe('habitPageReducer', () => {
  it('returns the initial state', () => {
    expect(habitPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
