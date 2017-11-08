import { GET_ALL_CATEGORIES } from '../actions/categoriesActions';

const categoriesReducer = (state = [], action) => {
   const { categories } = action;

   switch (action.type) {
      case GET_ALL_CATEGORIES:
         return [...categories.categories]
      default:
         return state
   }
}

export default categoriesReducer;