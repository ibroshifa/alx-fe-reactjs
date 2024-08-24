import React from 'react';
import useRecipeStore  from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
   const search = useRecipeStore(state=>state.filterRecipes);
  // const reset = setSearchTerm('');

  return (
    <div>
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e)=>{setSearchTerm(`${e.target.value}`);
     search();
      }}
    />
    <button >clear</button>
    </div>)
  ;
};

export default SearchBar;