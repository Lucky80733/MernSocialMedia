import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getCalendarPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCalendarPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCalendarPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createCalendarPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};