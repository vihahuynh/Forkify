import View from './View';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found!';

  _generateMarkup() {
    return this._data
      .map(rec => {
        return `
          <li class="preview">
            <a class="preview__link" href="#${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image}" alt="${rec.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
              </div>
            </a>
          </li>`;
      })
      .join('');
  }
}

export default new ResultsView();
