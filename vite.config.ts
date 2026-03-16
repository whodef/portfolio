import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:           resolve(__dirname, 'index.html'),
        projectTherink: resolve(__dirname, 'project-therink/index.html'),
        projectAlqen:   resolve(__dirname, 'project-alqen/index.html'),
      },
    },
  },
})
