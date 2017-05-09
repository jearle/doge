import { createSelector } from 'reselect';

/**
 * Direct selector to the habitPage state domain
 */
const selectHabitPageDomain = () => (state) => state.get('habitPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HabitPage
 */

const makeSelectHabitPage = () => createSelector(
  selectHabitPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHabitPage;
export {
  selectHabitPageDomain,
};
