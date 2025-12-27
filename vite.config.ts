import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/rrb-nursing-dualite/",

  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


