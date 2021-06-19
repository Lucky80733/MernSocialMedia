import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import calendarPosts from './calendarPosts';
export const reducers = combineReducers({ posts, auth, calendarPosts });
