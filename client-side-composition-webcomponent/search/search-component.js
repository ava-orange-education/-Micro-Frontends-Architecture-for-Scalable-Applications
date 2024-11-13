const domainUrl = "http://localhost:3001";

class SearchComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async loadHtml() {
    const response = await fetch(domainUrl);
    const templateHTML = await response.text();
    this.shadowRoot.innerHTML = templateHTML;
  }

  async performSearch() {
    const query = this.shadowRoot.getElementById("searchInput").value;

    const response = await fetch(
      `${domainUrl}/search?query=${encodeURIComponent(query)}`
    );
    const results = await response.json();

    // Call the onSearch callback if it's defined
    if (this.onSearch) {
      this.onSearch(results);
    }
  }

  async connectedCallback() {
    await this.loadHtml();

    // Event listener for search
    this.shadowRoot
      .getElementById("searchButton")
      .addEventListener("click", () => this.performSearch());
  }

  // Define the onSearch property
  set onSearch(callback) {
    this._onSearch = callback;
  }

  get onSearch() {
    return this._onSearch;
  }
}

customElements.define("search-component", SearchComponent);
