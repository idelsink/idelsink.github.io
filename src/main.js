import '@babel/polyfill';
import Vue from 'vue';
import './plugins/fontawesome';
import './plugins/vuetify';
import App from './App';
import router from './router';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');