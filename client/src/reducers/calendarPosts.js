import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (calendarPosts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    
    case CREATE:
      return [...calendarPosts, action.payload];
    
    
    default:
      return calendarPosts;
  }
};