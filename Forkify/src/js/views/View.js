import icons from 'url:../../img/icons.svg';


export default class View {
  _data;


  render(data, render) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderErrorMessage()

    this._data = data
    const markup = this._generateMarkup()
    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
  }


  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderErrorMessage()

    this._data = data
    const newMarkup = this._generateMarkup()
    const newDom = document.createRange().createContextualFragment(newMarkup)
    const newElements = Array.from(newDom.querySelectorAll('*'))
    const curElements = Array.from(this._parentElement.querySelectorAll('*'))

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i]

      if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
          curEl.textContent = newEl.textContent
      }

      if(!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value)
        })
      }
        }
    )
  }


  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`

    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }


  renderErrorMessage(message = this._errorMessage){
    const markup = `
      <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`

    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }


  renderSuccessfulMessage(message = this._successfulMessage){
    const markup = `
      <div class="message">
        <div>
          <svg>
           <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`

    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }


  _clear() {
    this._parentElement.innerHTML = '';
  }
}