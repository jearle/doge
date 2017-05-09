import { take, takeLatest, call, put, select } from 'redux-saga/effects';

import {
  LOCATION_CHANGE,
} from 'react-router-redux';

import {
  WEEK_OFFSET_ADD,
  WEEK_OFFSET_SUBSTRACT,
} from './constants';

import {
  selectDay,
} from './actions';

import makeSelectHabitPage from './selectors';

export function* selectDaySaga() {
  const {
    selectedDay,
  } = yield select(makeSelectHabitPage());

  yield put(selectDay(selectedDay));
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

// All sagas to be loaded
export default [
  takeLatestAddWeekOffsetSaga,
  takeLatestSubtractWeekOffsetSaga,
  // takeLatestSubtractWeekOffsetSaga,
];
