import View from './View';
import PreviewView from './previewView';

class BookMarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks found!';

  addHandlerRender(handler) {
    window.addEventListener('load', () => handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => PreviewView.render(bookmark, false))
      .join('');
  }
}

export default new BookMarkView();
