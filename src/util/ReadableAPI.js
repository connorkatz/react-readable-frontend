const apiServer = 'http://localhost:3001';
const headers = {
   'Authorization': 'connor-katz2',
   'Accept': 'application/json',
   'Content-Type': 'application/json'

}

// Get all categories
export const getAllCategories = () => {
   return fetch(`${apiServer}/categories`, { headers })
      .then(response => response.json())
      .then(data => data);
}

// Get all posts
export const getAllPosts = () => {
   return fetch(`${apiServer}/posts`, { headers })
      .then(response => response.json())
      .then(data => data)
}

// Get single post
export const getPost = id => {
   return fetch(`${apiServer}/posts/${id}`, { headers })
      .then(response => response.json())
      .then(data => data)
}

// Add a new post
export const addNewPost = (post) => {
   return fetch(`${apiServer}/posts`, {
      method: 'POST',
      headers,
      body: JSON.stringify(post)
   })
   .then(response => response.json())
   .then(data => data)
}

// Update existing post
export const updatePost = (post, id) => {
   return fetch(`${apiServer}/posts/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(post)
   })
   .then(response => response.json())
   .then(data => data)
}

// Get comments for post
export const getPostComments = (id) => {
   return fetch(`${apiServer}/posts/${id}/comments`, {headers})
      .then(response => response.json())
      .then(data => data)
}

// Add comment
export const addComment = (comment) => {
   return fetch(`${apiServer}/comments`, {
      method: 'POST',
      headers,
      body: JSON.stringify(comment)
   })
   .then(response => response.json())
   .then(data => data)
}