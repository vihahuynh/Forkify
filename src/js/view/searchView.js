class SearchView {
  _parentElement = document.querySelector('.search');
  _inputElement = document.querySelector('.search__field');

  getQuery() {
    const query = this._inputElement.value;
    this._clear();
    return query;
  }

  _clear() {
    this._inputElement.value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
