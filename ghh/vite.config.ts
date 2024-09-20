import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions:{
        enabled:true
      },
      manifest: {
        name:'ReactJS',
        short_name: 'ReactJS',
        theme_color: '#000',
        start_url: '/',
        display: 'standalone',
        background_color: '#000',
        icons: [
          {
            src: '/solid.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/solid.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    })
  ],
})
