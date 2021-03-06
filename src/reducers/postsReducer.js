import { GET_ALL_POSTS, ADD_NEW_POST, UPDATE_POST, DELETE_POST, VOTE_POST } from '../actions/postsActions';

const postsReducer = (state = [], action) => {
   const { posts, id, timestamp, title, author, body, category, voteScore, vote } = action;

   switch (action.type) {
      case GET_ALL_POSTS:
         return [...posts]
      case ADD_NEW_POST:
         return [
            ...state,
            {
               id,
               timestamp,
               title,
               author,
               body,
               category,
               voteScore
            }
         ]
      case UPDATE_POST:
         return state.map(post =>
            (post.id === id) ? {
               ...post,
               title,
               body
            } : post
         )
      case DELETE_POST:
         return state.map(post =>
            (post.id === id) ? {
               ...post,
               deleted: true
            } : post
         )
      case VOTE_POST:
         return state.map(post =>
            (post.id == id) ? {
               ...post,
               voteScore: vote === 'upVote' ? post.voteScore + 1 : post.voteScore - 1
            } : post
         )
      default:
         return state;
   }
}

export default postsReducer;