import {elements, renderLoader, removeLoader } from './views/base';
import Search from './models/Search';
import * as searchView from './views/searchView';

/**
 * State
 *  - save the Search obj(query and result)
 *  - save the current recipe
 *  - save the liked recipes
 *  - save the shopping list
 */
const state = {};

const getRecipesControl = async () => {
    const query = searchView.getRecipeQueryInput();
    
    // store the Search in state
    state.search = new Search(query);
    
     // clear the input
     searchView.clearRecipeQueryInput();

     // clear the list
     searchView.clearRecipeList();
    
     // show loader
    renderLoader(elements.searchResults);

    // getResults is async method - thus returns promise - thus, await - therefore getRecipesControl is async function too.
    await state.search.getResults();

    // remove loader
    removeLoader();

    // result has count and an array of recipe
    // show the recipes in UI
    searchView.populateRecipelist(state.search.result);
};

elements.searchRecipeForm.addEventListener('submit',event => {
    // stops page reload- that is default behaviour on submit of form
    event.preventDefault();
    getRecipesControl();
});