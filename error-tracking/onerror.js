

const microFrontends = [
  {
    name: "micro-frontend-a",
    source: "micro-frontend-a.bundle.js",
  },
  {
    name: "micro-frontend-b",
    source: "micro-frontend-b.bundle.js",
  },
];

window.onerror = (message, source, lineno, colno, error) => {
  let microFrontend = undefined;

  for (const mf of microFrontends) {
    if (source.includes(mf.source)) {
      microFrontend = mf.name;
      break;
    }
  }

  logError({
    error,
    extra: {
      microFrontend: microFrontend, // Best guess
    },
  });
};

