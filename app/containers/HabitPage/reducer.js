/*
 *
 * HabitPage reducer
 *
 */

import { fromJS } from 'immutable';
import moment from 'moment';

import {
  MEDITATIONS_LOAD,
  MEDITATIONS_LOAD_SUCCESS,
  MEDITATIONS_LOAD_ERROR,

  MEDITATION_CREATE,
  MEDITATION_CREATE_SUCCESS,
  MEDITATION_CREATE_ERROR,

  DAY_SELECT,
} from './constants';

const initialState = fromJS({
  selectedDay: moment().format('dddd'),
  selectedDate: moment().format('dddd, MMM Do'),

  meditations: [],
  isMeditationsLoading: false,
  meditationsLoadError: '',

  isCreatingMeditation: false,
  createMeditationsError: '',
});

function habitPageReducer(state = initialState, action) {
  console.log(action);
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
        .set('selectedDay', action.payload.day);
    default:
      return state;
  }
}

export default habitPageReducer;
