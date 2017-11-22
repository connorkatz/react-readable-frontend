import { combineReducers } from 'redux';
import posts from './postsReducer';
import comments from './commentsReducer';
import categories from './categoriesReducer';
import util from './utilReducer';

export default combineReducers(
   {
      posts,
      categories,
      comments,
      util
   }
)