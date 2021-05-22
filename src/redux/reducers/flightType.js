import {SET_ONEWAY, SET_ROUNDTRIP} from '../actions/types';

const initialState = {
  oneway: false,
  roundtrip: true,
};

function flightTypeReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_ONEWAY:
      return {
        ...state,
        oneway: payload,
      };
    case SET_ROUNDTRIP:
      return {
        ...state,
        roundtrip: payload,
      };
    default:
      return state;
  }
}

export default flightTypeReducer;
