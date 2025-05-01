import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss(), react(), tsconfigPaths()],
  resolve: {
    alias: {
      src: path.resolve('src/'),
      assets: path.resolve('src/assets'),
      pages: path.resolve('src/pages'),
      context: path.resolve('src/context'),
      components: path.resolve('src/components'),
      constants: path.resolve('src/constants'),
      config: path.resolve('src/config'),
      schemas: path.resolve('src/schemas'),
      hooks: path.resolve('src/hooks'),
      endpoints: path.resolve('src/endpoints'),
      utils: path.resolve('src/utils'),
      types: path.resolve('src/types'),
      stores: path.resolve('src/stores'),
      transformers: path.resolve('src/transformers'),
    },
  },
});
