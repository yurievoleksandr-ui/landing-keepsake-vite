import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';
import path from 'path';

export default {
  base: '/landing-keepsake-vite/',
  plugins: [
    vituum({
      pages: {
        root: './src/pages',
      },
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': [],
        },
      },
    }),
    pug({ root: './src' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
    },
  },
};
