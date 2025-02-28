

// In micro-frontend A:
try {
  // ... code that might throw
} catch (error) {
  logError({
    error,
    extra: {
      microFrontend: "micro-frontend-a",
      version: "1.2.3",
      // ... other context
    },
  });
}

// In micro-frontend B:
try {
  // ... code that might throw
} catch (error) {
  logError({
    error,
    extra: {
      microFrontend: "micro-frontend-b",
      version: "2.0.0",
      // ... other context
    },
  });
}

