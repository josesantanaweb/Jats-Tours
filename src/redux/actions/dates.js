import {SET_FROMDATE, SET_TODATE} from './types';

export const setFromDate = fromDate => dispatch => {
  dispatch({
    type: SET_FROMDATE,
    payload: fromDate,
  });
};

export const setToDate = toDate => dispatch => {
  dispatch({
    type: SET_TODATE,
    payload: toDate,
  });
};
