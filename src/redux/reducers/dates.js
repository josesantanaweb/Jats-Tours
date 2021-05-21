import {SET_FROMDATE, SET_TODATE} from '../actions/types';

const initialState = {
  fromDate: new Date(),
  toDate: new Date(),
};

function datesReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_FROMDATE:
      return {
        ...state,
        fromDate: payload,
      };
    case SET_TODATE:
      return {
        ...state,
        toDate: payload,
      };
    default:
      return state;
  }
}

export default datesReducer;
