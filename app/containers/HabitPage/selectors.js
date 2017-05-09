import { createSelector } from 'reselect';

/**
 * Direct selector to the habitPage state domain
 */
const selectHabitPageDomain = () => (state) => state.get('habitPage');

/**
 * Other specific selectors
 */
const makeSelectMeditationIdForDate = () => createSelector(
  selectHabitPageDomain(),
  (substate) => (date) => {
    const filteredMeditations = substate
      .toJS()
      .meditations
      .filter((meditation) => meditation.date === date);

    if (filteredMeditations.length > 0) {
      return filteredMeditations[0].id;
    }

    return null;
  }
);

const makeSelectHadMeditated = () => createSelector(
  selectHabitPageDomain(),
  (substate) => (date) => substate
    .toJS()
    .meditations
    .filter((meditation) => meditation.date === date)
    .length > 0
);

const makeSelectDaysMeditated = () => createSelector(
  selectHabitPageDomain(),
  (substate) => (dates) => substate
    .toJS()
    .meditations
    .filter((meditation) => dates.indexOf(meditation.date) !== -1)
    .length
);

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
  makeSelectHadMeditated,
  makeSelectDaysMeditated,
  makeSelectMeditationIdForDate,
};
