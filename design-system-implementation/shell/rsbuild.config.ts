import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'shell_application',
      remotes: {
        search: 'search@http://localhost:3000/mf-manifest.json',
        tasks: 'tasks@http://localhost:3001/mf-manifest.json',
        design_system: 'design_system@http://localhost:3002/mf-manifest.json',
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
    port: 2000,
  },
});
