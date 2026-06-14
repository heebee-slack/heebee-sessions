import { defineConfig } from 'vite'

export default defineConfig({
  base: '/heebee-sessions/', // change to your GitHub repo name
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin.html'
      }
    }
  }
})
