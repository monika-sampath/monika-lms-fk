import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target:
          "https://monika-lms-bk.onrender.com" ||
          "https://monika-lms-frnt-end.netlify.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
