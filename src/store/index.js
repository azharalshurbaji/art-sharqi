// Utilities
import { createPinia } from 'pinia'
import piniaPluginPresistedstate from 'pinia-plugin-persistedstate'

export default createPinia().use(piniaPluginPresistedstate)
