## Project Description

This project demonstrates Qwik's powerful resumability capabilities using a simple counter application. Unlike traditional hydration in other frameworks, Qwik uses resumability to achieve optimal client-side performance.

### What's Special About This Counter?

The counter example showcases how Qwik handles state and component rendering differently from traditional frameworks:

1. **Selective Rendering**: When you interact with the counter (clicking +1):
   - Only the necessary components are "resumed"
   - Console logs show that components are NOT re-rendered unnecessarily
   - State updates happen without triggering full component tree re-renders

2. **Why This Matters**:
   - **Better Performance**: Traditional frameworks often re-render entire component trees when state changes
   - **Lower Memory Usage**: Components are only loaded when needed
   - **Faster Initial Load**: No need to ship and execute unnecessary JavaScript
   - **Improved User Experience**: Instant interactivity without full hydration

### Technical Benefits

- **No Hydration**: Unlike React, Vue, or other frameworks, Qwik doesn't need to re-execute component code on the client
- **Progressive Loading**: JavaScript is loaded only for the components that need interactivity
- **State Preservation**: Server-side state is seamlessly resumed on the client without re-running component logic

To see this in action, open your browser's console and observe the render logs while interacting with the counter. You'll notice that components only log their initial render, and subsequent state updates don't trigger unnecessary re-renders!

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build
```
