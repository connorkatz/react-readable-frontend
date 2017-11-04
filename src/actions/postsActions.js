export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export const getAllPosts = ( posts ) => (
   {
      type: GET_ALL_POSTS,
      posts
   }
)

export const addPost = ({ id, category, timestamp, title, author, body }) => (
   {
      type: ADD_POST,
      id,
      timestamp,
      title,
      author,
      body
   }
)

export const updatePost = ({ id, title, author, body }) => (
   {
      type: UPDATE_POST,
      id,
      title,
      author,
      body
   }
)

export const deletePost = id => (
   {
      type: DELETE_POST,
      id
   }
)
