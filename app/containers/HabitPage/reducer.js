/*
 *
 * HabitPage reducer
 *
 */

import { fromJS } from 'immutable';
import moment from 'moment';
import { getDayDifference } from 'utils/day';

import {
  MEDITATIONS_LOAD,
  MEDITATIONS_LOAD_SUCCESS,
  MEDITATIONS_LOAD_ERROR,

  MEDITATION_CREATE,
  MEDITATION_CREATE_SUCCESS,
  MEDITATION_CREATE_ERROR,

  DAY_SELECT,

  WEEK_OFFSET_ADD,
  WEEK_OFFSET_SUBSTRACT,

  DAYS_MEDITATED_SET,
  MEDITATION_ID_SET,
} from './constants';

const initialState = fromJS({
  selectedDay: moment().format('dddd'),
  selectedDate: moment().format('dddd, MMM Do'),
  weekOffset: 0,

  meditations: [],
  isMeditationsLoading: false,
  meditationsLoadError: '',

  isCreatingMeditation: false,
  createMeditationsError: '',

  daysMeditated: 0,
  meditationId: null,
});

function habitPageReducer(state = initialState, action) {
  switch (action.type) {
    case MEDITATIONS_LOAD:
      return state
        .set('isMeditationsLoading', true);
    case MEDITATIONS_LOAD_SUCCESS:
      return state
        .set('meditations', action.payload.meditations)
        .set('meditationsLoadError', '')
        .set('isMeditationsLoading', false);
    case MEDITATIONS_LOAD_ERROR:
      return state
        .set('meditationsLoadError', action.payload.error)
        .set('isMeditationsLoading', false);

    case MEDITATION_CREATE:
      return state
        .set('isCreatingMeditation', true);
    case MEDITATION_CREATE_SUCCESS:
      return state
        .set('createMeditationsError', '')
        .set('isCreatingMeditation', false);
    case MEDITATION_CREATE_ERROR:
      return state
        .set('createMeditationsError', action.payload.error)
        .set('isCreatingMeditation', false);

    case DAY_SELECT:
      return state
        .set('selectedDay', action.payload.day)
        .set('selectedDate', moment()
          .add(getDayDifference(action.payload.day, state.get('weekOffset')), 'day')
          .format('dddd, MMM Do'));

    case WEEK_OFFSET_ADD:
      return state
        .set('weekOffset', state.get('weekOffset') + 7);
    case WEEK_OFFSET_SUBSTRACT:
      return state
        .set('weekOffset', state.get('weekOffset') - 7);

    case DAYS_MEDITATED_SET:
      return state
        .set('daysMeditated', action.payload.meditations);
    case MEDITATION_ID_SET:
      return state
        .set('meditationId', action.payload.meditationId);

    default:
      return state;
  }
}

export default habitPageReducer;
