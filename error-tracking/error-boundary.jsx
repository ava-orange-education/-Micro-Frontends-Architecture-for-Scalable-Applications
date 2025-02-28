

import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  useEffect(() => {
    logError({
      error,
      extra: {
        microFrontend: "micro-frontend-b",
        version: "2.0.0",
        // ... other context
      },
    });
  }, [error]);

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <strong>{error.message}</strong>
    </div>
  );
}

<ErrorBoundary
  fallbackRender={fallbackRender}
  onReset={(details) => {
    // Reset the state of your app so the error doesn't happen again
  }}
>
  <ExampleApplication />
</ErrorBoundary>;

