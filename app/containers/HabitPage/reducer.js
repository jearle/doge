/*
 *
 * HabitPage reducer
 *
 */

import { fromJS } from 'immutable';
import moment from 'moment';
window.mm = moment;
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
} from './constants';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getDayDifference = (newDay, weekOffset) => {
  const today = moment().format('dddd');

  const todaysIndex = days.indexOf(today);
  const newDaysIndex = days.indexOf(newDay);

  return newDaysIndex - todaysIndex + weekOffset;
}

const initialState = fromJS({
  selectedDay: moment().format('dddd'),
  selectedDate: moment().format('dddd, MMM Do'),
  weekOffset: 0,

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
        .set('selectedDay', action.payload.day)
        .set('selectedDate', moment()
          .add(getDayDifference(action.payload.day, state.get('weekOffset')), 'day')
          .format('dddd, MMM Do'));

    case WEEK_OFFSET_ADD:
      return state
        .set('weekOffset', state.get('weekOffset') + 7)
    case WEEK_OFFSET_SUBSTRACT:
      return state
        .set('weekOffset', state.get('weekOffset') - 7)
    default:
      return state;
  }
}

export default habitPageReducer;
