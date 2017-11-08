import { combineReducers } from 'redux';
import posts from './postsReducer';
import comments from './commentsReducer';
import categories from './categoriesReducer';

export default combineReducers(
   {
      posts,
      categories,
      comments
   }
)