/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { dashboardDatasLoaded, dashboardDatasLoadingError } from './actions';
import { LOAD_DASHBOARD } from './constants';

/**
 * Github repos request/response handler
 */
export function* getDatas() {
  // Select username from store
  const username = 'test';
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(dashboardDatasLoaded(repos));
  } catch (err) {
    yield put(dashboardDatasLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* dashboardSaga() {
  // Watches for LOAD_DASHBOARD actions and calls getDatas when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DASHBOARD, getDatas);
}
