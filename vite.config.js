// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base:process.env.NODE_ENV === "production" ? "/art-sharqi/" : "/",
  plugins: [
    vue({ 
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  build: {
    chunkSizeWarningLimit: 2000,
    // rollupOptions: {
    //     output:{
    //         manualChunks(id) {
    //           if (id.includes('node_modules')) {
                
    //               return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //           }
    //       }
    //     }
    // }
  },
  server: {
    port: 3000,
  },
})
