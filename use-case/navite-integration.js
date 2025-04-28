
import { ScriptManager, Federated } from '@callstack/repack/client';

// Resolver function
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  const resolveURL = Federated.createURLResolver({
    containers: {
      search: 'https://example.com/search.container.bundle',
      tasks: 'https://example.com/tasks.container.bundle',
    },
  });

  const url = resolveURL(scriptId, caller);
  if (url) {
    return { url };
  }
});

// Somewhere later...
import Search from 'search/App';
import Tasks from 'tasks/App';


