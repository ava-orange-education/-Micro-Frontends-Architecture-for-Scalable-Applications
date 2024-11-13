# Run-time Integration via Module Federation

The project demonstrates a simple runtime integration of micro frontends using Module Federation 2.0. It aims to showcase how independent applications can communicate and coexist within the same main interface, maintaining their own functionality and isolation.

The main application `/shell` consumes the modules exported by the `/search` and `/tasks` micro frontend applications

1. A Search Frontend accessible via a `<search-component />` custom html component, which provides a simple search interface.
2. A Tasks Frontend accessible via a `<tasks-component />` custom html component, displaying a list of tasks.

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

And the micro frontend manifest files will be available at:

- Search: `http://localhost:3000/mf-manifest.json`
- Tasks: `http://localhost:3001/mf-manifest.json`

## Documentation

For more implementaion reference, please refer to the [module federation 2.0 documentation](https://module-federation.io)
