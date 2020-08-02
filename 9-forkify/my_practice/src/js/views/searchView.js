import { elements } from './base';

export const getRecipeQueryInput = () => elements.searchRecipeInput.value;

export const clearRecipeQueryInput = () => {
    elements.searchRecipeInput.value = '';
}

export const populateRecipelist = (data) => {
    data.recipes.forEach(createRecipeItemInList);
}

export const clearRecipeList = () => {
    elements.searchResultsList.innerHTML = '';
};

const trimText = (text, limit=17) => {
    const finalArr = [];
    if(text.length > limit) {
        text.split(' ').reduce((total, curr) => {
            if(total + curr.length <= limit){
                finalArr.push(curr);
            }
            return total + curr.length;
        }, 0);
        return `${finalArr.join(' ')}...`;
    }
    return text;
};

const createRecipeItemInList = (recipe) => {
    let recipeItemHTML = `<li>
        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${trimText(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>`;
    elements.searchResultsList.insertAdjacentHTML('beforeend', recipeItemHTML);
}