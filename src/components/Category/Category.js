import React from 'react';

const Category = (props) => {
   return (
      <div>
         I is a category named {props.match.params.id} 
      </div>
   )
}

export default Category;