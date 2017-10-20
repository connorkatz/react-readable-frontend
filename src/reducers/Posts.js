import { ADD_POST, UPDATE_POST } from '../actions/Posts';

const reducer = (state = {}, action) => {
   const { id, title, author, content } = action.post;

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            posts: {
               ...state[posts],
               
         }
   }
      default:
return state;
   }
}