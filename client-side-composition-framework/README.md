# Run-time Integration using Single-SPA

The project demonstrates a simple runtime integration of micro frontends using Single-SPA framework. It aims to showcase how independent micro frontends can be integrated using Single-SPA framework.

The main application (index.html) serves as a shell, embedding two micro frontends:

1. A Search Frontend which provides a simple search interface.
2. A Tasks Frontend which displaying a list of random tasks.

## Project Structure

### Application Shell

`index.html` that composes the `search` and `tasks` microfrontends, via the `register.js`, using `registerApplication` from Single-SPA

## Installation and Setup

```
npx http-serve
```

After that the main application will be available in `http://localhost:8080`

## Documentation

For more implementaion reference, please refer to the [framework's documentation](https://single-spa.js.org/)
