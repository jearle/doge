import { take, takeLatest, call, put, select, cancel } from 'redux-saga/effects';

import {
  LOCATION_CHANGE,
} from 'react-router-redux';

import {
  createMeditation,
  removeMeditation,
  loadMeditations,
} from 'services/meditate';

import {
  MEDITATIONS_LOAD,

  MEDITATION_CREATE,
  MEDITATION_CREATE_SUCCESS,

  MEDITATION_REMOVE,
  MEDITATION_REMOVE_SUCCESS,

  WEEK_OFFSET_ADD,
  WEEK_OFFSET_SUBSTRACT,
} from './constants';

import {
  loadMeditations as loadMeditationsAction,
  loadMeditationsSuccess,
  loadMeditationsError,

  selectDay,
  createMeditationSuccess,
  createMeditationError,

  removeMeditationSuccess,
  removeMeditationError,
} from './actions';

import makeSelectHabitPage from './selectors';

export function* removeMeditationSaga({ payload: { id }}) {
  try {
    yield call(removeMeditation, { id });
    yield put(removeMeditationSuccess());
  } catch ({ message }) {
    yield put(removeMeditationError(messagee));
  }
}

export function* loadMeditationsSaga() {
  try {
    const meditations = yield call(loadMeditations);

    yield put(loadMeditationsSuccess(meditations));
  } catch ({ message }) {
    yield put(loadMeditationsError(message));
  }
}

export function* selectDaySaga() {
  const {
    selectedDay,
  } = yield select(makeSelectHabitPage());

  yield put(selectDay(selectedDay));
}

export function* createMeditationSaga({ payload: { date } }) {
  try {
    yield call(createMeditation, { date });
    yield put(createMeditationSuccess());
  } catch ({ message }) {
    yield put(createMeditationError(message));
  }
}

export function* takeLatestMeditationCreate() {
  const watcher = yield takeLatest(MEDITATION_CREATE, createMeditationSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* takeLatestAddWeekOffsetSaga() {
  const watcher = yield takeLatest(WEEK_OFFSET_ADD, selectDaySaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* takeLatestSubtractWeekOffsetSaga() {
  const watcher = yield takeLatest(WEEK_OFFSET_SUBSTRACT, selectDaySaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* takeLatestLoadMeditationsSaga() {
  const watcher = yield takeLatest(MEDITATIONS_LOAD, loadMeditationsSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* takeLatestMeditationCreateSuccessSaga() {
  const watcher = yield takeLatest(MEDITATION_CREATE_SUCCESS, loadMeditationsSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* takeLatestMeditationRemoveSaga() {
  const watcher = yield takeLatest(MEDITATION_REMOVE, removeMeditationSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* takeLatestMeditationRemoveSuccessSaga() {
  const watcher = yield takeLatest(MEDITATION_REMOVE_SUCCESS, loadMeditationsSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* initialLoadMeditationsSaga() {
  yield put(loadMeditationsAction());
}

// All sagas to be loaded
export default [
  takeLatestMeditationCreate,
  takeLatestAddWeekOffsetSaga,
  takeLatestSubtractWeekOffsetSaga,
  takeLatestLoadMeditationsSaga,
  takeLatestMeditationCreateSuccessSaga,
  takeLatestMeditationRemoveSaga,
  takeLatestMeditationRemoveSuccessSaga,
  initialLoadMeditationsSaga,
];
