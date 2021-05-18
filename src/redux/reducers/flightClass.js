import {SET_CLASS} from '../actions/types';

const initialState = {
  name: 'Economica',
};

function classReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_CLASS:
      return {
        ...state,
        name: payload,
      };
    default:
      return state;
  }
}

export default classReducer;
