/* eslint-disable import/extensions */

import { FETCH_POSTS_SUCCESS, FETCH_ERROR, LOADING_REQUEST } from '../actions';

const initialState = {
  posts: [],
  loading: false,
  error: '',
};

const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_ERROR:
      return {
        ...state,
        posts: [],
        loading: false,
        error: action.payload,
      };
    case LOADING_REQUEST:
      return {
        ...state,
        posts: [],
        loading: true,
        error: '',
      };
    default:
      return state;
  }
};

export default postReducer;
