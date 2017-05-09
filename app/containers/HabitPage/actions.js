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

  MEDITATION_REMOVE,
  MEDITATION_REMOVE_SUCCESS,
  MEDITATION_REMOVE_ERROR,

  DAY_SELECT,

  WEEK_OFFSET_ADD,
  WEEK_OFFSET_SUBSTRACT,

  DAYS_MEDITATED_SET,
  MEDITATION_ID_SET,
} from './constants';

export const setDaysMeditated = (meditations) => ({
  type: DAYS_MEDITATED_SET,
  payload: {
    meditations,
  },
});

export const setMeditationId = (meditationId) => ({
  type: MEDITATION_ID_SET,
  payload: {
    meditationId,
  },
});

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

export const removeMeditation = (id) => ({
  type: MEDITATION_REMOVE,
  payload: {
    id,
  },
});

export const removeMeditationSuccess = () => ({
  type: MEDITATION_REMOVE_SUCCESS,
});

export const removeMeditationError = (error) => ({
  type: MEDITATION_REMOVE_ERROR,
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
