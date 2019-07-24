/*
 *
 * Dashboard reducer
 *
 */

import produce from 'immer';
import {
  LOAD_DASHBOARD_SUCCESS,
  LOAD_DASHBOARD,
  LOAD_DASHBOARD_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DASHBOARD:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_DASHBOARD_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_DASHBOARD_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default dashboardReducer;
