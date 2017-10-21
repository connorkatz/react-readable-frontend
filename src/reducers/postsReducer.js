import { ADD_POST, UPDATE_POST, DELETE_POST } from '../actions/postsActions';

const postsReducer = (state = {}, action) => {
   const { id, timestamp, title, author, body, category } = action;

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
            posts: state.posts.map(post => {
               return id === post.id ? {
                  ...post,
                  title,
                  author,
                  body,
                  category
               } : post
            })
         }
      case DELETE_POST:
         return {
            ...state,
            posts: state.posts.filter(post => id !== post.id)
         }
      default:
         return state;
   }
}

export default postsReducer;