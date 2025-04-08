import { MODAL_CLOSE_SEC } from './config.js';

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';


async function controlRecipes() {

  try {
    const id = window.location.hash.slice(1)
    if (!id) return;

    recipeView.renderSpinner()
    resultsView.update(model.getSearchResultsPage())
    bookmarksView.update(model.state.bookmarks)

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
  bookmarksView.render(model.state.bookmarks)
}


function controlBookmarks() {
  bookmarksView.render(model.state.bookmarks)
}


async function controlAddRecipe(newRecipe) {

  try {

    const savedParentElement = addRecipeView._parentElement.innerHTML

    addRecipeView.renderSpinner()

    await model.uploadRecipe(newRecipe)

    recipeView.render(model.state.recipe)

    addRecipeView.renderSuccessfulMessage()

    setTimeout(() => {
          addRecipeView.toggleWindow()
          addRecipeView._parentElement.innerHTML = savedParentElement
        },
        MODAL_CLOSE_SEC * 1000)

  }
  catch(err) {
    console.error(`😢😢`, err);
    addRecipeView.renderErrorMessage(err.message)
  }
}


function init() {
  recipeView.addHandlerRender(controlRecipes)
  recipeView.addHandlerUpdateServings(controlServings)
  recipeView.addHandlerAddBookmark(controlAddBookmark)
  searchView.addHandlerRender(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
  bookmarksView.addHandlerListener(controlBookmarks)
  addRecipeView.addHandlerUpload(controlAddRecipe)
}


init();
