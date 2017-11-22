export const ADD_NEW_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const VOTE_POST = 'VOTE_POST';

export const getAllPosts = ( posts ) => (
   {
      type: GET_ALL_POSTS,
      posts
   }
)

export const addNewPost = ({ id, category, timestamp, title, author, body }) => (
   {
      type: ADD_NEW_POST,
      id,
      category,
      timestamp,
      title,
      author,
      body,
      voteScore: 1
   }
)

export const updatePost = ({ id, title, body }) => (
   {
      type: UPDATE_POST,
      id,
      title,
      body
   }
)

export const deletePost = id => (
   {
      type: DELETE_POST,
      id
   }
)

export const votePost = (vote, id) => (
   {
      type: VOTE_POST,
      vote,
      id
   }
)
