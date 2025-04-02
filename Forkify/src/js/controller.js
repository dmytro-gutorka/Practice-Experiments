import * as model from './model.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'
import paginationView from './views/paginationView.js'

import 'core-js/stable';
import 'regenerator-runtime/runtime';


async function controlRecipes() {

  try {
    const id = window.location.hash.slice(1)
    if (!id) return;

    recipeView.renderSpinner()
    resultsView.update(model.getSearchResultsPage())

    await model.loadRecipe(id)
    recipeView.render(model.state.recipe)

  } catch(err) {
    recipeView.renderErrorMessage();
  }
}


async function controlSearchResults() {

  try {

    const query = searchView.getQuery()
    if (!query) return;
    resultsView.renderSpinner()

    await model.loadSearchResults(query)
    resultsView.render(model.getSearchResultsPage())

    paginationView.render(model.state.search)

  } catch(err) {
    console.log(err)
  }
}


function controlPagination(goToPage) {
  paginationView.renderSpinner()

  resultsView.render(model.getSearchResultsPage(goToPage))
  paginationView.render(model.state.search)
}

function controlServings(newServings) {
  model.updateServings(newServings)
  recipeView.update(model.state.recipe)
}

function controlAddBookmark() {
  if (model.state.recipe.bookmarked) {
    model.deleteBookmark(model.state.recipe.id)
  } else {
    model.addBookmark(model.state.recipe)
  }

  recipeView.update(model.state.recipe)
}


function init() {
  recipeView.addHandlerRender(controlRecipes)
  recipeView.addHandlerUpdateServings(controlServings)
  recipeView.addHandlerAddBookmark(controlAddBookmark)
  searchView.addHandlerRender(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
}


init();
