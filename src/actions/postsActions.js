export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

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

export const updatePost = ({ id, title, author, body}) => (
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
