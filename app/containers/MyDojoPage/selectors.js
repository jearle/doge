import { createSelector } from 'reselect';

/**
 * Direct selector to the myDojoPage state domain
 */
const selectMyDojoPageDomain = () => (state) => state.get('myDojoPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MyDojoPage
 */

const makeSelectMyDojoPage = () => createSelector(
  selectMyDojoPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMyDojoPage;
export {
  selectMyDojoPageDomain,
};
