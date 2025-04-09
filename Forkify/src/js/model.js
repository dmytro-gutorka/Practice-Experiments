import { API_URL, RESULTS_PER_PAGE, API_KEY } from './config.js';
import { AJAX } from './helpers.js';


export const state = {
  recipe: {},
  bookmarks: [],
  search: {
    query: '',
    result: '',
    resultsPerPage: RESULTS_PER_PAGE,
    page: 2,
  }
};


function createRecipeObject(data) {
  const {recipe} = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && {key: recipe.key})
  }

}

export async function loadRecipe(id) {
  const data = await AJAX(`${API_URL}${id}`);
  state.recipe = createRecipeObject(data)
  state.recipe.bookmarked = state.bookmarks.some(bookmark => bookmark.id === id);
}


export async function loadSearchResults(query) {

  state.search.query = query;
  const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);
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


function persistBookmarks() {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
}


export function addBookmark(recipe) {
  state.bookmarks.push(recipe)

  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
}


export function deleteBookmark(id) {
  const index = state.bookmarks.findIndex(el => el.id === id)
  state.bookmarks.splice(index, 1)

  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
}


function init() {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
}

init()


export const uploadRecipe = async function(newRecipe) {

    const ingredients = Object.entries(newRecipe)
        .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
        .map(ing=> {
          const ingArr = ing[1].replaceAll(' ', '').split(',')

          if (ingArr.length !== 3) throw new Error('Wrong format! Please use the correct format :)')
          const [quantity, unit, description] = ingArr;

          return {
            quantity: quantity ? +quantity: null,
            unit: unit,
            description
          }
        })

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients
    }


  const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe)
  state.recipe = createRecipeObject(data)


  addBookmark(state.recipe);
}
