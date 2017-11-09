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