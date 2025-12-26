import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/rrb-nursing-dualite/",   // 👈 ADD THIS LINE

  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

