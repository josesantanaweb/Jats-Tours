import {SET_FLEXDATE} from '../actions/types';

const initialState = {
  flexDatesActive: false,
};

function flexDatesReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_FLEXDATE:
      return {
        ...state,
        flexDatesActive: payload,
      };
    default:
      return state;
  }
}

export default flexDatesReducer;
