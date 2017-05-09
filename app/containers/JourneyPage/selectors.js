import { createSelector } from 'reselect';

/**
 * Direct selector to the journeyPage state domain
 */
const selectJourneyPageDomain = () => (state) => state.get('journeyPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by JourneyPage
 */

const makeSelectJourneyPage = () => createSelector(
  selectJourneyPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectJourneyPage;
export {
  selectJourneyPageDomain,
};
