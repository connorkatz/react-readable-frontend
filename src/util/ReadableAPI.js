const apiServer = 'http://localhost:3001';
const headers = {
   'Authorization': 'connor-katz',
}

export const getAllCategories = () => {
   fetch(`${apiServer}/categories`, { headers })
      .then(response => response.json())
      .then(data => {console.log(data)})
}