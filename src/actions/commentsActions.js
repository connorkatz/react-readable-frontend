export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const getPostComments = (parentId, comments) => (
   {
      type: GET_POST_COMMENTS,
      parentId,
      comments
   }
)

export const addComment = ({parentId, id, author, body, timestamp, voteScore}) => (
   {
      type: ADD_COMMENT,
      parentId,
      id,
      author,
      body,
      timestamp,
      voteScore
   }
)

export const updateComment = (parentId, id, body) => (
   {
      type: UPDATE_COMMENT,
      parentId,
      id,
      body
   }
)

export const deleteComment = (parentId, id) => (
   {
      type: DELETE_COMMENT,
      parentId,
      id
   }
)