import {SET_PASSENGERS} from './types';

export const setPassengers = passengers => dispatch => {
  dispatch({
    type: SET_PASSENGERS,
    payload: passengers,
  });
};
