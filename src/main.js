import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue} from 'bootstrap-vue'
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const axios = require('axios');
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
