import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './view/recipeView';
import searchView from './view/searchView';
import resultsView from './view/resultsView';
import paginationView from './view/paginationView';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    // 1) Load recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    // 2) Rendering the recipe;
    recipeView.render(recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearch = async () => {
  resultsView.renderSpinner();
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = goToPage => {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerClick(controlPagination);
};
init();
