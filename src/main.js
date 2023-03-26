/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'


const app = createApp(App)

registerPlugins(app)

// AOS Animation
import AOS from 'aos'
import 'aos/dist/aos.css'

    AOS.init();

app.mount('#app')
