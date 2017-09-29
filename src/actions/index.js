export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENT ';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const increment = index => ({ type: INCREMENT_LIKES, index });

export const addComment = (postID, author, comment) => ({
  type: ADD_COMMENT,
  postID,
  author,
  comment
});

export const removeComment = (postID, index) => ({
  type: REMOVE_COMMENT,
  postID,
  index
});
