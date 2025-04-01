import * as model from './model.js'
import recipeView from './views/recipeView.js'

import 'core-js/stable';
import 'regenerator-runtime/runtime';


async function controlRecipes() {

  try {
    const id = window.location.hash.slice(1)
    if (!id) return;
    recipeView.renderSpinner()

    // Load recipe
    await model.loadRecipe(id)

    // Render recipe
    recipeView.render(model.state.recipe)

  } catch(err) {
    recipeView.renderErrorMessage();
  }
}


function init() {
  recipeView.addHandlerRender(controlRecipes)
}


init();