import {SET_FROMCOUNTRY, SET_TOCOUNTRY} from '../actions/types';

const initialState = {
  fromCountry: {
    region_name: 'Caracas',
    iata: 'CCS',
  },
  toCountry: {
    region_name: 'Miami',
    iata: 'MIA',
  },
};

function countryReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_FROMCOUNTRY:
      return {
        ...state,
        fromCountry: payload,
      };
    case SET_TOCOUNTRY:
      return {
        ...state,
        toCountry: payload,
      };
    default:
      return state;
  }
}

export default countryReducer;
