/*
 *
 * Dashboard actions
 *
 */

import {
  LOAD_DASHBOARD,
  LOAD_DASHBOARD_SUCCESS,
  LOAD_DASHBOARD_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_DASHBOARD
 */
export function loadDashboardDatas() {
  return {
    type: LOAD_DASHBOARD,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_DASHBOARD_SUCCESS passing the repos
 */
export function dashboardDatasLoaded(datas) {
  return {
    type: LOAD_DASHBOARD_SUCCESS,
    datas,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_DASHBOARD_ERROR passing the error
 */
export function dashboardDatasLoadingError(error) {
  return {
    type: LOAD_DASHBOARD_ERROR,
    error,
  };
}
