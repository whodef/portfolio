import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main:                  resolve(__dirname, 'index.html'),
        projectSkolkovoGolf:   resolve(__dirname, 'projects/skolkovogolf/index.html'),
        projectTherink:        resolve(__dirname, 'projects/therink/index.html'),
        projectSportsPari:     resolve(__dirname, 'projects/sportspari/index.html'),
      },
    },
  },
})
