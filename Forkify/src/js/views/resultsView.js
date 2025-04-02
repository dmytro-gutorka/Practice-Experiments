import View from './View.js'
import icons from 'url:../../img/icons.svg';


class resultsView extends View {
  _parentElement = document.querySelector('.results')
  _successfulMessage = ''
  _errorMessage = 'No recipes found for your query! Please try again'


  test() {
    console.log(this._data)
  }


  _generateMarkup() {
    return this._data.map(rec => this._generateMarkupPreview(rec)).join('')
  }


  _generateMarkupPreview(recipe) {
    const id = window.location.hash.slice(1)

    return `
    <li class="preview">
    <a class="preview__link preview__link ${recipe.id === id ? 'preview__link--active': ''}" href="#${recipe.id}">
      <figure class="preview__fig">
        <img src="${recipe.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${recipe.title}</h4>
        <p class="preview__publisher">${recipe.publisher}</p>
      </div>
    </a>
    </li>`
  }
}


export default new resultsView()