# Run-time Integration via WebCompoents

This project demonstrates a simple runtime integration of micro frontends using WebComponents within a shell HTML application. It aims to showcase how independent applications can communicate and coexist within the same main interface, maintaining their own functionality and isolation.

The main application (index.html) serves as a shell, embedding two micro frontends:

1. A Search Frontend accessible via a `<search-component />` custom html component, which provides a simple search interface.
2. A Tasks Frontend accessible via a `<tasks-component />` custom html component, displaying a list of tasks.

This architecture pattern is often used in micro frontend setups where different parts of a web application, potentially built by separate teams, need to integrate within a single UI while preserving modularity and isolation.

## Project Structure

### Application Shell

`index.html` that composes the `search` and `tasks` microfrontends

### Search Frontend (/search)

- Contains a search input field and button to search predefined values.
- The backend service (search/search.js) listens on /search, processing search queries and returning matches.
- The `search.json` contains a dummy list of possible search results, in a real-case example would be some sort of data store with relevant information.

### Tasks Frontend (/tasks)

- Displays a list of predefined tasks in HTML format.
- The `tasks.json` contains a dummy list of tasks, in a real-case example would be some sort of data store with relevant information.

## Installation and Setup

```
npm install
npm start
```

After that the main application will be available in `http://localhost:3000`
