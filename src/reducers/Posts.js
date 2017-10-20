import { ADD_POST, UPDATE_POST, DELETE_POST } from '../actions/Posts';

const postsReducer = (state = {}, action) => {
   const { id, timestamp, title, author, body, category } = action.post;

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            posts: [
               ...state.posts,
               {
                  id,
                  timestamp,
                  title,
                  author,
                  body,
                  category
               }
            ]
         }
      case UPDATE_POST:
         return {
            ...state,
            posts: []
         }
      case DELETE_POST:
         return {

         }
      default:
         return state;
   }
}