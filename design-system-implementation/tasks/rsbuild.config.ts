import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'tasks',
      remotes: {
        design_system: 'design_system@http://localhost:3002/remoteEntry.js',
      },
      exposes: {
        './tasks': './src/tasks/Tasks.tsx',
        './actions': './src/actions/Actions.tsx',
      },
      shared: {
        '@emotion/react': {
          requiredVersion: '^11',
        },
        '@emotion/styled': {
          requiredVersion: '^11',
        },
        '@mui/material': {
          requiredVersion: '^6',
        },
        react: {
          requiredVersion: '^18',
        },
        'react-dom': {
          requiredVersion: '^18',
        },
      },
    }),
  ],
  server: {
    port: 3001,
  },
});
