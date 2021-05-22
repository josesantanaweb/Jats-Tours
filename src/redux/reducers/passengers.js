import {SET_PASSENGERS} from '../actions/types';

const initialState = {
  passengers: {
    adults: 1,
    childs: 0,
    infants: 0,
  },
};

function passengersReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_PASSENGERS:
      return {
        ...state,
        passengers: payload,
      };
    default:
      return state;
  }
}

export default passengersReducer;
