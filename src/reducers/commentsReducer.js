import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../actions/commentsActions';

const commentsReducer = (state = {}, action) => {
   const { id, parentId, timestamp, body, author, voteScore, deleted } = action;

   switch (action.type) {
      case ADD_COMMENT:
         return {
            ...state,
            comments: {
               ...state.comments,
            }
         }
      case UPDATE_COMMENT:
         return {
            
         }
      case DELETE_COMMENT:
         return {
            
         }
      default:
         return state;
   }
}

export default commentsReducer;