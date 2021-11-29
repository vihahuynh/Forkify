import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './view/recipeView';
import searchView from './view/searchView';
import resultsView from './view/resultsView';

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
    resultsView.render(model.getSearchResultsPage(1));
  } catch (err) {
    console.log(err);
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearch);
};
init();
