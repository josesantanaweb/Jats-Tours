import {SET_FROMCOUNTRY, SET_TOCOUNTRY} from './types';

export const setFromCountry = fromCountry => dispatch => {
  dispatch({
    type: SET_FROMCOUNTRY,
    payload: fromCountry,
  });
};

export const setToCountry = toCountry => dispatch => {
  dispatch({
    type: SET_TOCOUNTRY,
    payload: toCountry,
  });
};
