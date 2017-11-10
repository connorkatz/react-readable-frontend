import { GET_POST_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../actions/commentsActions';


const commentsReducer = (state = {}, action) => {
   const { parentId, id, comments, timestamp, body, author, voteScore, deleted } = action;

   switch (action.type) {
      case GET_POST_COMMENTS:
         return {
            ...state,
            [parentId]: [
               ...comments
            ]
         }
      case ADD_COMMENT:
         return {
            ...state,
            [parentId]: [
               ...state[parentId],
               {
                  parentId,
                  id,
                  body,
                  author,
                  timestamp,
                  voteScore
               }
            ]
         }
      case UPDATE_COMMENT:
         return {
            ...state,
            [parentId]: state[parentId].map(comment =>
               (comment.id === id) ? {
                  ...comment,
                  body
               } : comment)
         }
      case DELETE_COMMENT:
         return {
            ...state,
            [parentId]: state[parentId].map(comment =>
               (comment.id === id) ? {
                  ...comment,
                  deleted: true
               } : comment)
         }
      default:
         return state;
   }
}

export default commentsReducer;