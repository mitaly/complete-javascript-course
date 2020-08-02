export const elements = {
    searchRecipeForm: document.querySelector('.search'),
    searchRecipeInput: document.querySelector('.search__field'),
    searchResultsList: document.querySelector('.results__list'),
    searchResults: document.querySelector('.results')
};

const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>    
        `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const removeLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) {
        loader.parentElement.removeChild(loader);
    }
}