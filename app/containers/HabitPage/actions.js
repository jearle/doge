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

export const createMeditation = (meditation) => ({
  type: MEDITATION_CREATE,
  payload: {
    meditation,
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
