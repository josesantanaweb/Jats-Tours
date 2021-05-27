import {SET_COMMENTS} from './types';

export const setComments = comments => dispatch => {
  dispatch({
    type: SET_COMMENTS,
    payload: comments,
  });
};
