import {SET_COMMENTS} from '../actions/types';

const initialState = {
  comments: '',
};

function commentsReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: payload,
      };
    default:
      return state;
  }
}

export default commentsReducer;
