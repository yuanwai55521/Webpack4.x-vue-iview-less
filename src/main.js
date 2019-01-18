import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';

import app from './components/app';
import store from './store';
import router from './routes';
import './styles/index.less';

Vue.use(VueRouter);
Vue.use(iView);

window._vueInstance = new Vue({
  el: '#app',
  components: { app },
  template: '<app/>',
  store,
  router
});
