import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'design_system',
      exposes: {
        './tokens': './src/tokens.ts',
        './createTheme': './src/createTheme.ts',
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
    port: 3002,
  },
});
