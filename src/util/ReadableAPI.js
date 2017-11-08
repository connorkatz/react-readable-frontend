const apiServer = 'http://localhost:3001';
const headers = {
   'Authorization': 'connor-katz',
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

export const getPost = id => {
   return fetch(`${apiServer}/posts/${id}`, { headers })
      .then(response => response.json())
      .then(data => data)
}

// Add a new post
export const createPost = (post) => {
   fetch(`${apiServer}/posts`, {
      method: 'POST',
      headers,
      body: JSON.stringify(post)
   })
}