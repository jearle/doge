
import { fromJS } from 'immutable';
import myDojoPageReducer from '../reducer';

describe('myDojoPageReducer', () => {
  it('returns the initial state', () => {
    expect(myDojoPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
