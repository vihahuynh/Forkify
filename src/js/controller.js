import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './view/recipeView';

const recipeContainer = document.querySelector('.recipe');

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

const init = () => {
  recipeView.addHandleRender(controlRecipes);
};
init();
