// Search component definition
function SearchComponent() {
  const container = document.createElement("div");
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Search...");

  input.addEventListener("input", function (e) {
    const query = e.target.value;
    // Emit a custom event with the search query
    window.dispatchEvent(
      new CustomEvent("search", {
        detail: { query: query },
      })
    );
  });

  container.appendChild(input);
  return container;
}

// Register the component for single-spa
export const mount = async () => {
  const searchComponent = SearchComponent();
  document.getElementById("search").appendChild(searchComponent);
};

export const unmount = async () => {
  const searchElement = document.getElementById("search");
  if (searchElement) {
    searchElement.innerHTML = ""; // Clear the search component
  }
};
