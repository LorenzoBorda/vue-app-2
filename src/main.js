import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDb5RvxGkCOKziqW5juAkV4IT3aW25dN_Y',
    libraries: 'places', 
  },
  
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')