import View from './view';
import icons from 'url:../../img/icons.svg';



export default class PreviewView extends View {
    _successMessage =
        'Start by searching for a recipe or an ingredient. Have fun!';


    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join();
    }

    _generateMarkupPreview(result) {
        const id = window.location.hash.slice(1);
        return `
           <li class="preview">
            <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
              </div>
            </a>
          </li>
        `;
    }
}