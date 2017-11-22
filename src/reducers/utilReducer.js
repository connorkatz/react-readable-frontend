import { SET_SORT_BY } from '../actions/utilActions';

const defaultState = {
   sortBy: [
      {
         name: 'date',
         active: true
      },
      {
         name: 'votes',
         active: false
      }
   ]
}

const utilReducer = (state = defaultState, action) => {
   const { sortBy } = action;

   switch (action.type) {
      case SET_SORT_BY:
         return {
            ...state,
            sortBy: state.sortBy.map(sortItem => (
               sortItem.name === sortBy ? (
                  {
                     ...sortItem,
                     active: true
                  }
               ) : (
                     {
                        ...sortItem,
                        active: false
                     }
                  )
            ))
         }
      default:
         return state;
   }
}

export default utilReducer;