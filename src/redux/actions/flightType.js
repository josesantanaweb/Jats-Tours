import {SET_ONEWAY, SET_ROUNDTRIP} from './types';

export const setOneway = oneway => dispatch => {
  dispatch({
    type: SET_ONEWAY,
    payload: oneway,
  });
};

export const setRoundtrip = roundtrip => dispatch => {
  dispatch({
    type: SET_ROUNDTRIP,
    payload: roundtrip,
  });
};
