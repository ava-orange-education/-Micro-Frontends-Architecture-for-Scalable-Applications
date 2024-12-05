# Design System Implementation

The project demonstrates a simple runtime integration of micro frontends using Module Federation 2.0 sharing common design system definitions. It aims to showcase how independent applications can communicate, coexist and share consistent styling within the same main interface, maintaining their own functionality and isolation.

The main application `/shell` consumes the modules exported by the `/search`, `/tasks` and `/design-system` micro frontend applications

1. A Search Frontend accessible via a `<search-component />` custom html component, which provides a simple search interface.
2. A Tasks Frontend accessible via a `<tasks-component />` custom html component, displaying a list of tasks.
2. A Design System Frontend which exports `Tokens` and a `createTheme` factor method so that consumer applications can use them in order to guarantee consistent styling.

This architecture pattern is often used in micro frontend setups where different parts of a web application, potentially built by separate teams, need to integrate within a single UI while preserving modularity and isolation.

## Project Structure

The project is composed by 3 react/typescript applications using [rsbuild](https://rsbuild.dev/) as bundler and module federation to integrate them via run time.

## Installation and Setup

```
./run_application
```

After that the main application will be available in `http://localhost:2000`

And the two micro frontend applications will also be running in isolation in:

- Search: `http://localhost:3000`
- Tasks: `http://localhost:3001`
- Design System: `http://localhost:3002`

And the micro frontend manifest files will be available at:

- Search: `http://localhost:3000/mf-manifest.json`
- Tasks: `http://localhost:3001/mf-manifest.json`
- Design System: `http://localhost:3002/mf-manifest.json`

## Documentation

For more implementaion reference, please refer to the [module federation 2.0 documentation](https://module-federation.io)
