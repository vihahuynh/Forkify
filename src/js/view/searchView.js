class SearchView {
  #parentElement = document.querySelector('.search');
  #inputElement = document.querySelector('.search__field');

  getQuery() {
    const query = this.#inputElement.value;
    this.#clear();
    return query;
  }

  #clear() {
    this.#inputElement.value = '';
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
