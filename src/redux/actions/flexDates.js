import {SET_FLEXDATE} from './types';

export const setFlexDates = flexDatesActive => dispatch => {
  dispatch({
    type: SET_FLEXDATE,
    payload: flexDatesActive,
  });
};
