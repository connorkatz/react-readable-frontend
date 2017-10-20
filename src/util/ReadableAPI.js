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

// Get all posts or all posts in a category
export const getPosts = (category = false) => {
   if (category) {
      return fetch(`${apiServer}/${category}/posts`, { headers })
         .then(response => response.json())
         .then(data => data);
   } else {
      return fetch(`${apiServer}/posts`, { headers })
         .then(response => response.json())
         .then(data => data);
   }
}

// Add a new post
export const createPost = (post) =>
   fetch(`${apiServer}/posts`, {
      method: 'POST',
      headers,
      body: JSON.stringify(post)
   }
   ).then(res => res.json())
