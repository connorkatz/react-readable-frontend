export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const addComment = (comment) => (
   {
      type: ADD_COMMENT,
      comment
   }
)

export const updateComment = (comment) => (
   {
      type: UPDATE_COMMENT,
      comment
   }
)

export const deletePost = (comment) => (
   {
      type: DELETE_COMMENT,
      comment
   }
)