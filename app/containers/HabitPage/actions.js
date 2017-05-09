/*
 *
 * HabitPage actions
 *
 */

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

export const loadMeditations = () => ({
  type: MEDITATIONS_LOAD,
});

export const loadMeditationsSuccess = (meditations) => ({
  type: MEDITATIONS_LOAD_SUCCESS,
  payload: {
    meditations,
  },
});

export const loadMeditationsError = (error) => ({
  type: MEDITATIONS_LOAD_ERROR,
  payload: {
    error,
  },
});

export const createMeditation = (date) => ({
  type: MEDITATION_CREATE,
  payload: {
    date,
  },
});

export const createMeditationSuccess = () => ({
  type: MEDITATION_CREATE_SUCCESS,
});

export const createMeditationError = (error) => ({
  type: MEDITATION_CREATE_ERROR,
  payload: {
    error,
  },
});

export const selectDay = (day) => ({
  type: DAY_SELECT,
  payload: {
    day,
  },
});

export const addWeekOffset = () => ({
  type: WEEK_OFFSET_ADD,
});

export const subtractWeekOffset = () => ({
  type: WEEK_OFFSET_SUBSTRACT,
});
