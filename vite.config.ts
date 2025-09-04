import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // antd相关依赖
          antd: ['antd'],
          // react相关基础库
          base: ['react', 'react-dom'],
          // three.js库
          three: ['three'],
          // 其他第三方库
          vendor: [
            // 这里可以添加其他你想单独拆分的第三方库
          ],
        },
      },
    },
  },
});
