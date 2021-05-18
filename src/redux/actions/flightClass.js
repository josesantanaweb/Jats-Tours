import {SET_CLASS} from './types';

export const setFlightClass = name => dispatch => {
  dispatch({
    type: SET_CLASS,
    payload: name,
  });
};
