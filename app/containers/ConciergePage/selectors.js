import { createSelector } from 'reselect';

/**
 * Direct selector to the conciergePage state domain
 */
const selectConciergePageDomain = () => (state) => state.get('conciergePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ConciergePage
 */

const makeSelectConciergePage = () => createSelector(
  selectConciergePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectConciergePage;
export {
  selectConciergePageDomain,
};
