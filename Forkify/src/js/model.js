import { API_URL, RESULTS_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';


export const state = {
  recipe: {},
  search: {
    query: '',
    result: '',
    resultsPerPage: RESULTS_PER_PAGE,
    page: 2,
  }
};


export async function loadRecipe(id) {

     const data = await getJSON(`${API_URL}${id}`);
     const {recipe} = data.data;

     state.recipe = {
       id: recipe.id,
       title: recipe.title,
       publisher: recipe.publisher,
       sourceUrl: recipe.source_url,
       image: recipe.image_url,
       servings: recipe.servings,
       cookingTime: recipe.cooking_time,
       ingredients: recipe.ingredients,
     }
}


export async function loadSearchResults(query) {

  state.search.query = query;
  const data = await getJSON(`${API_URL}?search=${query}`);
  state.search.result = data.data.recipes.map(recipe => {

    return {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url
    }


  })

  pageResetAfterSearch()
}


export function getSearchResultsPage(page = state.search.page) {
  state.search.page = page

  const start = (page - 1) * state.search.resultsPerPage
  const end = page * state.search.resultsPerPage

  return state.search.result.slice(start, end)
}


function pageResetAfterSearch() {
  state.search.page = 1
}


export function updateServings(newServings) {
  state.recipe.ingredients.forEach(ing =>
      ing.quantity = (ing.quantity * newServings) / state.recipe.servings)

  state.recipe.servings = newServings
}