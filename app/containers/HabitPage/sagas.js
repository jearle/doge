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
  getDateWithDayAndOffset,
  getDays,
} from 'utils/day';

import {
  DAY_SELECT,

  MEDITATIONS_LOAD,
  MEDITATIONS_LOAD_SUCCESS,

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

  setDaysMeditated,
  setMeditationId,
} from './actions';

import makeSelectHabitPage, {
  makeSelectDaysMeditated,
  makeSelectMeditationIdForDate,
} from './selectors';

export function* setSelectionsSaga() {
  const {
    selectedDate,
    weekOffset,
  } = yield select(makeSelectHabitPage());

  const daysMeditated = yield select(makeSelectDaysMeditated());
  const meditationIdForDate = yield select(makeSelectMeditationIdForDate());

  const dates = getDays()
    .map((day) => getDateWithDayAndOffset(day, weekOffset));

  const daysMeditatedCount = daysMeditated(dates);

  const meditationId = meditationIdForDate(selectedDate);

  yield put(setDaysMeditated(daysMeditatedCount));
  yield put(setMeditationId(meditationId));
}

export function* removeMeditationSaga({ payload: { id } }) {
  try {
    yield call(removeMeditation, { id });
    yield put(removeMeditationSuccess());
  } catch ({ message }) {
    yield put(removeMeditationError(message));
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

export function* takeLatestLoadMeditationsSuccessSaga() {
  const watcher = yield takeLatest(MEDITATIONS_LOAD_SUCCESS, setSelectionsSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* takeLatestSelectDaySaga() {
  const watcher = yield takeLatest(DAY_SELECT, setSelectionsSaga);

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
  takeLatestSelectDaySaga,
  takeLatestMeditationCreate,
  takeLatestAddWeekOffsetSaga,
  takeLatestSubtractWeekOffsetSaga,
  takeLatestLoadMeditationsSaga,
  takeLatestMeditationCreateSuccessSaga,
  takeLatestMeditationRemoveSaga,
  takeLatestMeditationRemoveSuccessSaga,
  takeLatestLoadMeditationsSuccessSaga,
  initialLoadMeditationsSaga,
];
