// import 'babel-polyfill';
import Vue from 'vue';
import Vuetify from 'vuetify'

import router from './js/router';

require('./css/app.css'); // Styles

Vue.config.productionTip = false; // Disable the "You are running Vue in development mode. message"

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router: router,
  render: h => h('router-view')
});
