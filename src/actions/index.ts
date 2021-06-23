/* eslint-disable import/extensions */

import axios from 'axios';
import { PostData } from '../components/Interface/Interface';

export const FETCH_ERROR = 'FETCH_ERROR';
export const LOADING_REQUEST = 'LOADING_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const successfullPostFetch = (data: PostData[]) => (
  {
    type: FETCH_POSTS_SUCCESS,
    payload: data,
  }
);

export const fetchPostRequest = () => async (dispatch: any) => {
  try {
    dispatch({ type: LOADING_REQUEST, payload: 'Fetching Resource' });
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
    console.log(response.data);
    dispatch(successfullPostFetch(response.data));
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
};
